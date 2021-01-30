const express = require("express");
const routers = express.Router();
const AuthorController = require("../controller/AuthorController");

// get all auhtors
routers.get("/", AuthorController.get);
routers.get("/:id", AuthorController.getById);
routers.post("/create", AuthorController.createAuthor);
routers.put("/update", AuthorController.updateAuthor);
routers.delete("/:id", AuthorController.deleteAuthor);
routers.get("/:id/books", AuthorController.getAuthorBook);
routers.get("/:id/publishers", AuthorController.getAuthorPublisher);
// test
module.exports = routers;
