import { uploadToCloudinary, deleteCloudinary} from "../configs/cloudinary.config.js";
import upload from "../configs/multer.config.js";
import multer from "multer";
const createUploadHandler = (fieldName) => {
  const handleUpload = upload.single(fieldName);

  return (req, res, next) => {
    handleUpload(req, res, async (error) => {
      if (error instanceof multer.MulterError) {
        return res.status(400).json({ error: "Multer error" });
      } else if (error) {
        return res.status(500).json({ error: "Unknown error" });
      }

      if (!req.file) {
        return res.status(400).json({ error: "No file uploaded" });
      }

      try {
        req.cloudinaryResult = await uploadToCloudinary(req.file);
        next();
      } catch (err) {
        return res.status(500).json({ error: err });
      }
    });
  };
};

export const handleAvatarUpload = createUploadHandler("avatar");
