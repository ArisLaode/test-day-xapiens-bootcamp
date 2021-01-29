const express = require("express");
const routers = express.Router();
const UserController = require("../controller/UserController");

// get all auhtors
routers.get("/info", (req, res) => {
  res.json({
    status: true,
    message: "root users",
  });
});

// /users
routers.get("/", UserController.get);
routers.get("/:id", UserController.getById);
routers.delete("/:id", UserController.delete);
// routers.get("/", (req, res) => {
//   res.json({
//     data: req.query,
//   });
// });

routers.post("/", (req, res) => {
    res.json({
      data: req.body,
    });
  });

module.exports = routers;
