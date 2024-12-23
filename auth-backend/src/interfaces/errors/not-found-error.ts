import { APIError } from "./api-error";

export class NotFoundError extends APIError {
  constructor(message: string) {
    super(message, 404);
  }
}
