import  jwt  from "jsonwebtoken";
export function authenticateToken(req, res, next) {
  const token = req.headers["authorization"];

  if (token == null) {
    return res.sendStatus(401);
  }

  jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
    if (err) {
      return res.sendStatus(403); // Lỗi xác thực token
    }

    req.user = user;
    next(); // Tiếp tục xử lý yêu cầu nếu token hợp lệ
  });
}
