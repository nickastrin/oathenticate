import config from '@config/config';
import Token, { TokenModel } from '@models/token';
import jwt from 'jsonwebtoken';
import { Schema } from 'mongoose';

// Expiration dates (in minutes).
const JWT_EXPIRATION = 2;
const REFRESH_EXPIRATION = 15;

export interface TokenPair {
  accessToken: string;
  refreshToken: string;
}

function generateAccessToken(userId: Schema.Types.ObjectId): string {
  // Return a signed JWT.
  return jwt.sign({ id: userId }, config.JWT_SECRET, {
    expiresIn: JWT_EXPIRATION * 60,
  });
}

async function generateRefreshToken(
  userId: Schema.Types.ObjectId,
  tokenRepository: typeof Token
): Promise<TokenModel> {
  try {
    const refreshToken = jwt.sign({ id: userId }, config.REFRESH_SECRET, {
      expiresIn: REFRESH_EXPIRATION * 60,
    });

    // Create new token and save it to the db.
    const newToken = await tokenRepository.create({
      user: userId,
      token: refreshToken,
      expiresAt: addMinutes(new Date(), REFRESH_EXPIRATION),
      createdAt: new Date(),
    });
    await newToken.save();

    return newToken;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

async function renewToken(
  token: string,
  tokenRepository: typeof Token
): Promise<TokenPair> {
  try {
    const currentToken = await getToken(token, tokenRepository);

    if (currentToken) {
      // If the token is active but has already been replaced,
      // that means that someone is trying to use a stolen token.
      // So revoke all tokens and throw exception.
      if (currentToken.replacedBy) {
        await revokeAllTokens(currentToken.user, tokenRepository);
        throw new Error('Illegal token');
      }

      // Generate new refresh token.
      const newRefreshToken = await generateRefreshToken(
        currentToken.user,
        tokenRepository
      );
      await newRefreshToken.save();

      // Revoke current token.
      currentToken.revokedAt = new Date();
      currentToken.replacedBy = newRefreshToken.token;
      await currentToken.save();

      // Generate new access token.
      const newAccessToken = generateAccessToken(currentToken.user);

      return {
        accessToken: newAccessToken,
        refreshToken: newRefreshToken.token,
      };
    }

    throw new Error('Token not found');
  } catch (error) {
    console.error(error);
    throw error;
  }
}

async function revokeAllTokens(
  userId: Schema.Types.ObjectId,
  tokenRepository: typeof Token
): Promise<void> {
  try {
    await tokenRepository
      .updateMany({ user: userId }, { revokedAt: new Date() })
      .exec();
  } catch (error) {
    console.error(error);
    throw error;
  }
}

async function getToken(
  token: string,
  tokenRepository: typeof Token
): Promise<TokenModel> {
  const refreshToken = await tokenRepository
    .findOne({ token: token })
    .populate('user');

  if (!refreshToken) {
    throw new Error('Token not found');
  }

  if (refreshToken.revokedAt || refreshToken.expiresAt < new Date()) {
    throw new Error('Invalid token');
  }

  return refreshToken;
}

function addMinutes(date: Date, minutes: number): Date {
  return new Date(date.getMinutes() + minutes);
}

export {
  generateAccessToken,
  generateRefreshToken,
  renewToken,
  revokeAllTokens,
};
