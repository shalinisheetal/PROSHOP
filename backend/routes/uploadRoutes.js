import express from "express";
import multer from "multer";
import path from "path";

const router = express.Router();

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, "uploads/");
  },
  filename(req, file, cb) {
    cb(
      null,
      `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
      // extracts the original extension of the uploaded file
    );
  },
});

function checkFileType(file, cb) {
  // possible image formats
  const fileTypes = /jpeg|jpg|png/;

  // check if uploaded file if any of permissible image types
  const extName = fileTypes.test(
    path.extname(file.originalname).toLocaleLowerCase()
  );
  const mimeType = fileTypes.test(file.mimetype);

  if (extName && mimeType) {
    return cb(null, true);
  } else {
    cb("Images only!");
  }
}

const upload = multer({
  storage,
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb);
  },
});

router.post("/", upload.single("image"), (req, res) => {
  res.send(`\${req.file.path}`);
});

export default router;
