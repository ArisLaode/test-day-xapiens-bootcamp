const express = require("express");
const routers = express.Router();
const publisherController = require("../controller/PublisherController");

// get all books
routers.get("/", publisherController.get);
routers.get("/:id", publisherController.getById);
routers.post("/create", publisherController.createPublisher);
routers.put("/update", publisherController.updatePublisher);
routers.delete("/:id", publisherController.deletePublisher);
routers.get("/:id/publishers", publisherController.getAuthorPublisher);
module.exports = routers;
