const routers = require("express").Router();
const userControl = require("../controllers/userController");
// const authenticate = require("../middlewares/authenticate");

routers.post("/", userControl.register);
routers.get("/", userControl.getAll);
routers.get("/:id", userControl.getId);
routers.put("/:id", userControl.updateUser);
routers.delete("/:id", userControl.delUser);
routers.post("/login", userControl.login);
// routers.get("/profile", authenticate, userControl.profile);
routers.get("/profile", userControl.profile);

module.exports = routers;
