import jwt from 'jsonwebtoken';
import nodemailer from 'nodemailer';
import "dotenv/config";

const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY
const MAIL_USERNAME = process.env.MAIL_USERNAME
const MAIL_PASSWORD = process.env.MAIL_PASSWORD





export function generateResetToken() {
  const secretKey = JWT_SECRET_KEY;
  const expiresIn = '1h'; 

  const resetToken = jwt.sign({}, secretKey, { expiresIn });

  return resetToken;
}

export function generateRandomToken(length) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let token = '';

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    token += characters.charAt(randomIndex);
  }
  return token;
}





export function sendResetEmail(email, resetPassword, resetPasswordExpiryInMinutes) {
  const transporter = nodemailer.createTransport({
    service: 'gmail', 
    auth: {
      user: MAIL_USERNAME, 
      pass: MAIL_PASSWORD, 
    },
  });

  const mailOptions = {
    from: MAIL_USERNAME, 
    to: email,
    subject: 'Password Reset',
    text: `Password reset confirmation code: ${resetPassword}. This code is valid for ${resetPasswordExpiryInMinutes} minutes.`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
    } else {
      console.log('Email sent:', info.response);
    }
  });
}

