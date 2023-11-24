const cloudinary = require("cloudinary").v2;
require("dotenv/config");

// Cấu hình Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

const deleteFile = (publicId) => {
  return new Promise((resolve, reject) => {
    cloudinary.uploader.destroy(publicId, (error, result) => {
      if (result && result.result === "ok") {
        resolve("File deleted successfully");
      } else {
        reject(error || "Error deleting file");
      }
    });
  });
};

module.exports = {
  deleteFile,
};
