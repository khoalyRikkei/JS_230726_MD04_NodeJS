export class ServiceException extends Error {
    name = "ServiceException";
    constructor(code, message) {
      super();
      this.message = message;
      this.code = code;
    }
  }