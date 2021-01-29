const express = require("express");
const routers = express.Router();
const PublisherController = require("../controller/PublisherController");

// get all books
routers.get("/", PublisherController.get);
routers.get("/:id", PublisherController.getById);
routers.post("/create", PublisherController.createPublisher);
routers.put("/update", PublisherController.updatePublisher);
routers.delete("/:id", PublisherController.deletePublisher);
routers.get("/:id/books", PublisherController.getAuthorPublisher);
module.exports = routers;
