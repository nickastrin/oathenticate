import User, { UserModel } from '@models/user';
import Token from '@models/token';
import {
  generateAccessToken,
  generateRefreshToken,
  TokenPair,
} from '@services/token-service';
import { Schema } from 'mongoose';

async function authenticate(
  email: string,
  password: string,
  userRepository: typeof User,
  tokenRepository: typeof Token
): Promise<TokenPair> {
  try {
    const user: UserModel | null = await userRepository
      .findOne({ email: email })
      .exec();

    // Check that the user exists and that the password is valid.
    if (!user || !(await user.comparePassword(password))) {
      throw new Error('Invalid email or password.');
    }

    // Generate the tokens.
    const accessToken = generateAccessToken(user._id as Schema.Types.ObjectId);
    const refreshToken = await generateRefreshToken(
      user._id as Schema.Types.ObjectId,
      tokenRepository
    );

    return {
      accessToken: accessToken,
      refreshToken: refreshToken.token,
    };
  } catch (error) {
    console.error(error); // TODO: This should be replaced by a logger.
    throw error;
  }
}

async function createUser(user: UserModel, userRepository: typeof User) {
  try {
    const duplicate = await userRepository
      .findOne({ email: user.email })
      .exec();

    if (duplicate) {
      throw new Error('User already exists.');
    }

    const newUser = await userRepository.create({ ...user });
    await newUser.save();
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export { authenticate, createUser };
