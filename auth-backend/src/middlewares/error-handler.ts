import { APIError } from "@interfaces/errors/api-error";
import { NextFunction, Request, Response } from "express";

export function errorHandler(
  err: APIError,
  _: Request,
  res: Response,
  next: NextFunction,
): void {
  if (!err) {
    next();
  } // If there is no error, call next.

  const status = err.statusCode || 500;
  res.status(status).send(err.message);
}
