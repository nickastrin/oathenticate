export class APIError extends Error {
  constructor(
    message: string,
    public status: number,
  ) {
    super(message);
    this.status = status;

    Object.setPrototypeOf(this, new.target.prototype);
  }
}
