const express = require("express");
const routers = express.Router();
const CustomerController = require("../controller/CustomerController");

routers.get("/", CustomerController.get);
routers.get("/:id", CustomerController.getById);
routers.post("/create", CustomerController.createCustomer);
routers.put("/update", CustomerController.updateCustomer);
routers.delete("/:id", CustomerController.deleteCustomer);

module.exports = routers;
