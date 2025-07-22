import nodemailer from "nodemailer";
import config from "./config";

interface ApiError extends Error {
  statusCode: number;
}

class CustomApiError extends Error implements ApiError {
  statusCode: number;

  constructor(statusCode: number, message: string) {
    super(message);
    this.statusCode = statusCode;
    this.name = "ApiError";
  }
}

const emailSender = async (subject: string, email: string, html: string) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.office365.com",
  port: 587,
  secure: false,
  auth: {
    type: "OAuth2",
    user: "ahraju2003@outlook.com",
    clientId: "3ff99b34-8d4e-4593-a6d3-cc30bef2fb4f",
    clientSecret: "7f04fd1e-bdd9-40b5-9e8c-dd57a19dd8ed",
    refreshToken: "YOUR_REFRESH_TOKEN",
    accessToken: "YOUR_ACCESS_TOKEN", // optional if refresh token is working
  },
  });

  const mailOptions = {
    from: `"Rapid Flow" <${config.emailSender.email}>`,
    to: email,
    subject,
    html,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    return info;
  } catch (error) {
    console.error("Error sending email:", error);
    throw new CustomApiError(500, "Error sending email");
  }
};

export default emailSender;
