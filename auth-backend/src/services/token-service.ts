import jwt from 'jsonwebtoken';
import { Schema } from 'mongoose';
import config from '@config/config';
import { addMinutes } from '@utils/add-minutes';
import { Token } from '@models/models';
import { TokenModel, TokenPair } from '@interfaces/interfaces';

// Expiration dates (in minutes).
const JWT_EXPIRATION = 2;
const REFRESH_EXPIRATION = 15;

export class TokenService {
  constructor(private tokenRepository: typeof Token) {}

  public generateAccessToken(userId: Schema.Types.ObjectId) {
    // Return a signed JWT.
    return jwt.sign({ id: userId }, config.JWT_SECRET, {
      expiresIn: JWT_EXPIRATION * 60,
    });
  }

  public async generateRefreshToken(
    userId: Schema.Types.ObjectId
  ): Promise<TokenModel> {
    try {
      const refreshToken = jwt.sign({ id: userId }, config.REFRESH_SECRET, {
        expiresIn: REFRESH_EXPIRATION * 60,
      });

      // Create new token and save it to the db.
      const newToken = await this.tokenRepository.create({
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

  public async revokeAllTokens(userId: Schema.Types.ObjectId): Promise<void> {
    try {
      await this.tokenRepository
        .updateMany({ user: userId }, { revokedAt: new Date() })
        .exec();
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  public async getToken(token: string): Promise<TokenModel> {
    const refreshToken = await this.tokenRepository
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

  public async renewToken(token: string): Promise<TokenPair> {
    try {
      const currentToken = await this.getToken(token);

      if (currentToken) {
        // If the token is active but has already been replaced,
        // that means that someone is trying to use a stolen token.
        // So revoke all tokens and throw exception.
        if (currentToken.replacedBy) {
          await this.revokeAllTokens(currentToken.user);
          throw new Error('Illegal token');
        }

        // Generate new refresh token.
        const newRefreshToken = await this.generateRefreshToken(
          currentToken.user
        );
        await newRefreshToken.save();

        // Revoke current token.
        currentToken.revokedAt = new Date();
        currentToken.replacedBy = newRefreshToken.token;
        await currentToken.save();

        // Generate new access token.
        const newAccessToken = this.generateAccessToken(currentToken.user);

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
}
