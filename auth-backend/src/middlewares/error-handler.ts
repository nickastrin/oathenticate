import { NextFunction, Request, Response } from "express";

export function errorHandler(
  err: Error,
  _: Request,
  res: Response,
  next: NextFunction,
): void {
  if (!err) {
    next();
  } // If there is no error, call next.

  res.status(500).send(err.message);
}
