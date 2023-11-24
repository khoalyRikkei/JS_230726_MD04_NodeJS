const express = require("express");
const {
  uploadToCloudinaryAndReturnUrl,
  uploadArrayToCloudinaryAndReturnUrls,
} = require("../middlewares/uploadFileMiddleware");
const router = express.Router();

router.post("/single", uploadToCloudinaryAndReturnUrl);
router.post("/array", uploadArrayToCloudinaryAndReturnUrls);

module.exports = router;
