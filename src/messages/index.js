const MSG_COMMON = {
  MSG_ERROR: {
    BadRequestException: "Yêu cầu không hợp lệ",
    UnauthorizedException: "Unauthorized",
    NotFoundException: "Không tìm thấy tài nguyên",
    ForbiddenException: "Từ chối truy cập",
    InternalServerException: "Lỗi server",
  },
  MSG_SUCCESS: {
    create: (data) => `Create ${data} successfully`,
    read: (data) => `get ${data} successfully`,
    update: (data) => `Update ${data} successfully`,
    delete: (data) => `Delete ${data} successfully`,
  },
  MSG_FAILURE: {
    create: (data) => `Create ${data} failure`,
    read: (data) => `get ${data} failure`,
    update: (data) => `Update ${data} failure`,
    delete: (data) => `Delete ${data} failure`,
  },
};

const MSG_VALIDATION = {
  UnauthorizedException: "Email hoặc mật khẩu không đúng",
};

module.exports = {
  MSG_COMMON,
  MSG_VALIDATION,
};
