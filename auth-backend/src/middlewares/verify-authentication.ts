import jwt from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";
import { APIError, UnauthorizedError } from "@interfaces/errors/errors";
import config from "@config/config";

export function verifyAuthentication(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader?.startsWith("Bearer ")) {
      throw new UnauthorizedError("Missing access token.");
    }

    const accessToken = authHeader.split(" ")[1];
    const decoded = jwt.verify(accessToken, config.JWT_SECRET);

    Object.assign(req, { user: decoded }); // Add user info to request object.
    next();
  } catch (originalError) {
    const error =
      originalError instanceof jwt.JsonWebTokenError
        ? new UnauthorizedError("Invalid or expired token.")
        : originalError;

    const status = error instanceof APIError ? error.statusCode : 500;
    const message =
      error instanceof Error ? error.message : "Authentication failed.";

    res
      .status(status)
      .json({ error: message })
      .set("WWW-Authenticate", "Bearer realm='Authentication required'");
  }
}
