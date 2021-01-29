const express = require("express");
const routers = express.Router();
const AuthorController = require("../controller/AuthorController");
const BookController = require("../controller/BookController");

// get all auhtors
routers.get("/", AuthorController.get);
routers.get("/:id", AuthorController.getById);
routers.get("/:id/books", AuthorController.getByIdBook);
routers.post("/create", AuthorController.createAuthor);
routers.put("/update", AuthorController.updateAuthor);
routers.delete("/:id", AuthorController.deleteAuthor);

// Random
// routers.get("/:id/books", AuthorController.getBookAuthor);

module.exports = routers;
