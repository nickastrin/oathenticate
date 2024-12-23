import { UserModel } from "@interfaces/interfaces";
import { AuthenticationService } from "@services/services";
import { setTokenCookie } from "@utils/utils";
import { Request, Response, NextFunction } from "express";

export class AuthenticationController {
  constructor(private authService: AuthenticationService) {}

  public register = async (req: Request, res: Response, next: NextFunction) => {
    const data: UserModel = req.body;

    await this.authService
      .createUser(data)
      .then(() => {
        res.json({ message: "User created successfully" });
      })
      .catch(next);
  };

  public authenticate = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    const { email, password } = req.body;

    await this.authService
      .authenticate(email, password)
      .then(({ accessToken, refreshToken }) => {
        setTokenCookie(res, refreshToken ?? "");
        res.json({
          message: "User logged in successfully",
          token: accessToken,
        });
      })
      .catch(next);
  };

  public logout = async (req: Request, res: Response, next: NextFunction) => {
    const token = req.cookies?.refreshToken;

    await this.authService
      .logout(token)
      .then(() => {
        res.json({ message: "User logged out successfully" });
      })
      .catch(next);
  };
}
