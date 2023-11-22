const nodemailer = require("nodemailer");
const transporter = require("../src/configs/mail.config");

class mailer {
  async sendMail(req, res) {
    const content = "";
    content += `
        <div style="padding: 10px; background-color: #003375">
            <div style="padding: 10px; background-color: white;">
                <h4 style="color: #0085ff">Gửi mail với nodemailer và express</h4>
                <span style="color: black">Đây là mail test</span>
            </div>
        </div>
    `;
    const mainOptions = {
      // thiết lập đối tượng, nội dung gửi mail
      from: "Adorna Jewelry",
      to: req.body.mail,
      subject: "Reset your password",
      text: "Your text is here",
      html: content,
    };
    transporter.sendMail(mainOptions, function (err, info) {
      if (err) {
        console.log(err);
        req.flash("mess", "Lỗi gửi mail: " + err); //Gửi thông báo đến người dùng
        res.redirect("/");
      } else {
        console.log("Message sent: " + info.response);
        req.flash("mess", "Một email đã được gửi đến tài khoản của bạn"); //Gửi thông báo đến người dùng
        res.redirect("/");
      }
    });
  }
}

module.exports = new mailer();
