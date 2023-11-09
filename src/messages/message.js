export const MSG_COMMON = {
  MSG_ERROR: {
    BadRequestException: "Invalid request",
    UnauthorizedException: "Authentication required",
    NotFoundException: "No resources found",
    ForbiddenException: "Deny access",
    InternalServerException: "Server error",
  },
  MSG_SUCCESS: {
    create: (data) => `Create ${data} success`,
    read: (data) => `Get ${data} success`,
    update: (data) => `Update ${data} success`,
    delete: (data) => `Delete ${data} success`,
  },
  MSG_FAILURE: {
    create: (data) => `Create ${data} failure`,
    read: (data) => `Get ${data} failure`,
    update: (data) => `Update ${data} failure`,
    delete: (data) => `Delete ${data} failure`,
  },
};

export const MSG_VALIDATION = {
  UnauthorizedException: "Email or password is incorrect",
};
