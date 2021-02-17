const express = require("express");
const routers = express.Router();
const ProductController = require("../controller/ProductController");

routers.get("/", ProductController.get);
routers.get("/:id", ProductController.getById);
routers.post("/create", ProductController.createProduct);
routers.put("/update", ProductController.updateProduct);
routers.delete("/:id", ProductController.deleteproduct);

module.exports = routers;
