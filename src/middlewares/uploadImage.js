const multer = require("multer");
const cloudinary = require("cloudinary").v2;
const streamifier = require("streamifier");
const { CustomException } = require("../expeiptions");

// Cấu hình Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

// Tạo middleware upload hình
const uploadImage = (req, res, next) => {
  const upload = multer({
    storage: multer.memoryStorage(),
    limits: {
      fileSize: 2 * 1024 * 1024, // Giới hạn dung lượng file 2MB
    },
  }).array("images", 4); // Tên trường file trong form data và giới hạn số lượng file là 4

  upload(req, res, async (err) => {
    if (err) {
      const error = new CustomException("Error uploading files", 400);
      return next(error);
    }

    try {
      if (!req.files || req.files.length === 0) {
        const error = new CustomException("No files uploaded", 400);
        return next(error);
      }

      const cloudinaryUrls = await Promise.all(
        req.files.map(async (file) => {
          const result = await new Promise((resolve, reject) => {
            let stream = cloudinary.uploader.upload_stream((error, result) => {
              if (result) {
                resolve(result);
              } else {
                reject(error);
              }
            });

            streamifier.createReadStream(file.buffer).pipe(stream);
          });

          return result;
        })
      );

      // Lưu trữ URLs của các files đã upload trên Cloudinary vào req.urls
      const uploadedImages = cloudinaryUrls.map((image) => ({
        id: image.public_id,
        url: image.url,
      }));

      req.uploadedImages = uploadedImages;
      next();
    } catch (error) {
      next(error);
    }
  });
};

module.exports = uploadImage;
