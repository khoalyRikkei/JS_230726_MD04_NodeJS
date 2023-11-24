const multer = require("multer");
const cloudinary = require("cloudinary").v2;
const streamifier = require("streamifier");
const { ServerException, CustomException } = require("../expeiptions");

// Cấu hình Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

// Tạo middleware multer
const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 2 * 1024 * 1024, // Giới hạn dung lượng file 2MB
  },
}); // Tên trường file trong form data

// Middleware để upload file lên Cloudinary và trả về req.url
const uploadToCloudinaryAndReturnUrl = (req, res, next) => {
  upload.single("avatar")(req, res, async (err) => {
    if (err) {
      const err = new CustomException("Error uploading file", 400);
      next(err);
    }

    try {
      if (req.file) {
        const result = await new Promise((resolve, reject) => {
          let stream = cloudinary.uploader.upload_stream((error, result) => {
            if (result) {
              resolve(result);
            } else {
              reject(error);
            }
          });

          streamifier.createReadStream(req.file.buffer).pipe(stream);
        });

        // Lấy URL của file đã upload trên Cloudinary và gán vào req.url
        req.avatar = { id: result.public_id, url: result.url };
      }
      next();
    } catch (error) {
      const err = new ServerException("Error processing file", 500);
      next(err);
    }
  });
};

// Middleware để upload files lên Cloudinary và trả về req.urls
const uploadArrayToCloudinaryAndReturnUrls = (req, res, next) => {
  upload.array("images", 4)(req, res, async (err) => {
    if (err) {
      const err = new CustomException("Error uploading files", 400);
      next(err);
    }

    try {
      if (!req.files || req.files.length === 0) {
        const err = new CustomException("No files uploaded", 400);
        next(err);
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
      req.urls = cloudinaryUrls;

      next();
    } catch (error) {
      const err = new ServerException("Error processing files", 500);
      next(err);
    }
  });
};

module.exports = { uploadToCloudinaryAndReturnUrl, uploadArrayToCloudinaryAndReturnUrls };
