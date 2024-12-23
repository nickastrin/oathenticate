import { APIError } from "./api-error";

export class ConflictError extends APIError {
  constructor(message: string) {
    super(message, 409);
  }
}
