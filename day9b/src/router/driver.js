const express = require("express");
const routers = express.Router();
const DriverController = require("../controller/DriverController");

routers.get("/", DriverController.get);
routers.get("/:id", DriverController.getById);
routers.post("/create", DriverController.createDriver);
routers.put("/update", DriverController.updateDriver);
routers.delete("/:id", DriverController.deleteDriver);

module.exports = routers;
