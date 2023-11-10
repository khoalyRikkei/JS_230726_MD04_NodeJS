class BadRequestException extends Error {
    constructor(message, statusCode = 400, field = null) {
      super(message);
      this.name = "BadRequestException";
      this.statusCode = statusCode;
      this.errors = field;
    }
  }
  
  class UnauthorizedException extends Error {
    constructor(message, statusCode = 401, field = null) {
      super(message);
      this.name = "UnauthorizedException";
      this.statusCode = statusCode;
      this.errors = field;
    }
  }
  class NotFoundException extends Error {
    constructor(message, statusCode = 404, field = null) {
      super(message);
      this.name = "NotFoundException";
      this.statusCode = statusCode;
      this.errors = field;
    }
  }
  class ValidationException extends Error {
    constructor(message, statusCode = 400, field = null) {
      super(message);
      this.name = "ValidationException";
      this.statusCode = statusCode;
      this.errors = field;
    }
  }
  class InternalServerException extends Error {
    constructor(message, statusCode = 500, field = null) {
      super(message);
      this.name = "InternalServerErrorException";
      this.statusCode = statusCode;
      this.errors = field;
    }
  }
  export {
    BadRequestException,
    UnauthorizedException,
    NotFoundException,
    ValidationException,
    InternalServerException,
  };