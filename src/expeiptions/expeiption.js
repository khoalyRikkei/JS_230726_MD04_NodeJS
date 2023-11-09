class BadRequestException extends Error {
    constructor(message, statusCode = 400, field = null) {
      super(message);
      this.statusCode = statusCode;
      this.field = field;
    }
  }
  
  class AuthencationException extends Error {
    constructor(message, statusCode = 401, field = null) {
      super(message);
      this.statusCode = statusCode;
      this.field = field;
    }
  }
  
  class ServerException extends Error {
    constructor(message, statusCode = 500, field = null) {
      super(message);
      this.statusCode = statusCode;
      this.field = field;
    }
  }
  
  export { BadRequestException, AuthencationException, ServerException };