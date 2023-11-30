const express = require("express");
const { routes } = require("./routes");
const app = express();
require("dotenv").config();
const bodyParser = require("body-parser");
const multer = require("multer");
const uploadToCloudinary = require("./utils/cloudinary");
const cors = require("cors");

// config bodyParser
app.use(
  cors({
    exposedHeaders: ["Authorization"],
  })
);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

routes(app);
const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 2 * 1024 * 1024, // 2 MB
    files: 1,
  },
});

app.post("/upload", upload.single("file"), async (req, res, next) => {
  if (!req.file) {
    return res.status(400).json({ error: "No file uploaded" });
  }

  // try {
  //   const result = await uploadToCloudinary(req.file);

  //   return res.status(201).json({
  //     url: result.url,
  //   });
  // } catch (err) {
  //   console.log(err);
  //   return res.status(500).json({ error: err });
  // }
});

const port = process.env.PORT;
app.listen(port, () => {
  console.log("connecting listen on http://localhost:" + port);
});
