const routers = require("express").Router();
const bookController = require("../controllers/bookController");
const multer = require("multer");
const storageBook = require("../middlewares/uploadCover");
const imageFilter = require("../helper/imageFilter");
const {
  bookValidationRules,
  validateBook,
} = require("../middlewares/validationBook");

const maxSize = 1 * 800 * 800;

routers.get("/", bookController.getBook);
routers.get("/:id", bookController.getId);
routers.delete("/:id", bookController.delBook);
routers.post(
  "/create",
  bookValidationRules(),
  validateBook,
  bookController.createBook
);
routers.post(
  "/:id",
  bookValidationRules(),
  validateBook,
  bookController.updateBook
);

routers.put(
  "/uploadCover/update/:id",
  multer({
    storage: storageBook,
    fileFilter: imageFilter,
    limits: { fileSize: maxSize },
  }).single("cover"),
  bookController.uploadCover
);

module.exports = routers;
