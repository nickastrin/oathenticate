import { APIError } from "./api-error";

export class UnauthorizedError extends APIError {
  constructor(message: string) {
    super(message, 401);
  }
}
