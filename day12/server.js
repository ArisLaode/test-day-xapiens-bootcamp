"use strict";

const express = require("express");
<<<<<<< HEAD
const log_morgan = require("./src/middlewares/morganLog");
const error_handling_500 = require("./src/middlewares/errorHandling500");
const error_handling_404 = require("./src/middlewares/errorHandling404");
const cors = require("cors");
=======
const errorHandling500 = require("./src/middlewares/errorHandling500");
const errorHandling400 = require("./src/middlewares/errorHandling400");
>>>>>>> 2c1612c4a64fafd2cfd039d7752f011cb95e0959
const app = express();

const PORT = 3000;
const routers = require("./src/routers");

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api/v1", routers);
<<<<<<< HEAD
app.use(error_handling_500);
app.use(error_handling_404);
=======

app.use(errorHandling500);
app.use(errorHandling400);
>>>>>>> 2c1612c4a64fafd2cfd039d7752f011cb95e0959

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
