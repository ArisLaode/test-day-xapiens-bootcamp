const routers = require("express").Router();
const userControl = require("../controllers/userController");
const passport = require("passport");
require("../middlewares/passport-jwt");

routers.post("/", userControl.register);
routers.get("/", userControl.getAll);
routers.get("/:id", userControl.getId);
routers.put("/:id", userControl.updateUser);
routers.delete("/:id", userControl.delUser);
routers.post("/login", userControl.login);

module.exports = routers;
