const routers = require("express").Router();
const userControl = require("../controllers/userController");
const authenticate = require("../middlewares/authenticate");

routers.get("/profile", authenticate, userControl.profile);
routers.post("/", userControl.register);
routers.get("/", userControl.getAll);
routers.get("/:id", userControl.getId);
routers.put("/:id", userControl.updateUser);
routers.delete("/:id", userControl.delUser);
routers.post("/login", userControl.login);

module.exports = routers;
