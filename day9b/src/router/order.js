const express = require("express");
const routers = express.Router();
const OrderController = require("../controller/OrderController");

routers.get("/", OrderController.get);
routers.get("/:id", OrderController.getById);
routers.post("/create", OrderController.createOrder);
routers.put("/update", OrderController.updateOrder);
routers.delete("/:id", OrderController.deleteOrder);

module.exports = routers;
