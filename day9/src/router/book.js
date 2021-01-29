const express = require("express");
const routers = express.Router();
const BookController = require("../controller/BookController");

// get all books
routers.get("/", BookController.get);
routers.get("/:id", BookController.getById);
routers.post("/create", BookController.createBook);
routers.put("/update", BookController.updateBook);
routers.delete("/:id", BookController.deleteBook);

module.exports = routers;
