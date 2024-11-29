import { TokenService } from "@services/token-service";
import { setTokenCookie } from "@utils/utils";
import { NextFunction, Request, Response } from "express";

export class TokenController {
  constructor(private tokenService: TokenService) {}

  public async renewToken(req: Request, res: Response, next: NextFunction) {
    const token = req.cookies?.refreshToken;

    // Call service to refresh token and store it in cookie.
    await this.tokenService
      .renewToken(token)
      .then(({ accessToken, refreshToken }) => {
        setTokenCookie(res, refreshToken);
        res.json(accessToken);
      })
      .catch(next);
  }
}
