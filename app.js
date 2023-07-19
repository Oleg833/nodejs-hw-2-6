const express = require("express");
const logger = require("morgan");
const cors = require("cors");
require("dotenv").config();
const app = express();

const fs = require("fs/promises");
const { upload } = require("./middlewares");
const path = require("path");

// const tempDir = path.join(__dirname, "temp");
// const multer = require("multer");
// const multerConfig = multer.diskStorage({
//   destination: tempDir,
//   filename: (req, file, cb) => {
//     cb(null, file.originalname);
//   },
// });
// const upload = multer({
//   storage: multerConfig,
// });
// upload.fields([{ name: "cover", maxCount: 100 }, { name: "subcover", maxCount: 2 }]);
// upload.array("files", 8);

const avatarsDir = path.join(__dirname, "public", "avatars");

app.post("/api/avatars", upload.single("cover"), async (req, res) => {
  console.log(req.query);
  console.log(req.body);
  console.log(req.file);
  const { path: tempUpload, originalname } = req.file;
  const resultUpload = path.join(avatarsDir, originalname);
  await fs.rename(tempUpload, resultUpload);
  const avatar = path.join("avatars", originalname);

  res.status(201).json(avatar);
});

const authRouter = require("./routes/api/auth");

const contactsRouter = require("./routes/api/contacts");

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use("/api/users", authRouter);

app.use("/api/contacts", contactsRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Not Found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});

module.exports = app;
