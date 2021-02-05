const routers = require("express").Router();
const userControl = require("../controllers/userController");
<<<<<<< HEAD
const authenticate = require("../middlewares/authenticate");

routers.get("/profile", authenticate, userControl.profile);
routers.post("/register", userControl.register);
=======
// const authenticate = require("../middlewares/authenticate");

routers.post("/", userControl.register);
>>>>>>> 2c1612c4a64fafd2cfd039d7752f011cb95e0959
routers.get("/", userControl.getAll);
routers.get("/:id", userControl.getId);
routers.put("/:id", userControl.updateUser);
routers.delete("/:id", userControl.delUser);
routers.post("/login", userControl.login);
<<<<<<< HEAD
=======
// routers.get("/profile", authenticate, userControl.profile);
routers.get("/profile", userControl.profile);
>>>>>>> 2c1612c4a64fafd2cfd039d7752f011cb95e0959

module.exports = routers;
