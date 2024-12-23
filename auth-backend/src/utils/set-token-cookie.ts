import { Response } from "express";

export function setTokenCookie(res: Response, token: string) {
  // Create http only cookie with refresh token that expires in 7 days.
  const cookieOptions = {
    httpOnly: true,
    expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    secure: false,
  };

  res.cookie("refreshToken", token, cookieOptions);
}
