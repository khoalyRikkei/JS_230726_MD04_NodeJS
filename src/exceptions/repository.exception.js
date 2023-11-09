export class RepositoryException extends Error {
  name = "RepositoryException";
  constructor(error, message) {
    super();
    this.message = message;
    this.error = error;
  }
}
