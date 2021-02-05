const routers = require("express").Router();
const publisherController = require("../controllers/publisherController");
const {
  publisherValidationRules,
  validatePublisher,
} = require("../middlewares/validationPublisher");

routers.get("/", publisherController.getPublisher);
routers.get("/:id", publisherController.getId);
routers.delete("/:id", publisherController.delPublisher);
routers.post(
  "/create",
  publisherValidationRules(),
  validatePublisher,
  publisherController.createPublisher
);
routers.post(
  "/update/:id",
  publisherValidationRules(),
  validatePublisher,
  publisherController.updatePublisher
);

module.exports = routers;
