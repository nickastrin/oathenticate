export class APIError extends Error {
  constructor(
    message: string,
    public statusCode: number,
  ) {
    super(message);
    this.statusCode = statusCode;

    Object.setPrototypeOf(this, new.target.prototype);
  }
}
