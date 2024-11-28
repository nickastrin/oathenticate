import { Schema } from "mongoose";
import { TokenService } from "@services/services";
import { TokenPair, UserModel } from "@interfaces/interfaces";
import { User } from "@models/models";

export class AuthenticationService {
  constructor(
    private userRepository: typeof User,
    private tokenService: TokenService,
  ) {}

  public async authenticate(
    email: string,
    password: string,
  ): Promise<TokenPair> {
    try {
      const user: UserModel | null = await this.userRepository
        .findOne({ email: email })
        .exec();

      // Check that the user exists and that the password is valid.
      if (!user || !(await user.comparePassword(password))) {
        throw new Error("Invalid email or password.");
      }

      // Generate the tokens.
      const accessToken = this.tokenService.generateAccessToken(
        user._id as Schema.Types.ObjectId,
      );
      const refreshToken = await this.tokenService.generateRefreshToken(
        user._id as Schema.Types.ObjectId,
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

  public async createUser(user: UserModel) {
    try {
      const duplicate = await this.userRepository
        .findOne({ email: user.email })
        .exec();

      if (duplicate) {
        throw new Error("User already exists.");
      }

      const newUser = await this.userRepository.create({ ...user });
      await newUser.save();
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
