const routers = require("express").Router();
const publisherController = require("../controllers/publisherController");

routers.get("/", publisherController.getPublisher);
routers.get("/:id", publisherController.getId);
routers.delete("/:id", publisherController.delPublisher);
routers.post("/create", publisherController.createPublisher);
routers.post("/update/:id", publisherController.updatePublisher);

module.exports = routers;
