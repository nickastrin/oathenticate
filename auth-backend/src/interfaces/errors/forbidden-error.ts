import { APIError } from "./api-error";

export class ForbiddenError extends APIError {
  constructor(message: string) {
    super(message, 403);
  }
}
