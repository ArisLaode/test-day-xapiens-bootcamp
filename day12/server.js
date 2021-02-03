"use strict";

const express = require("express");
const log_morgan = require("./src/middlewares/morganlog");
const errorHandling500 = require("./src/middlewares/errorHandling500");
const errorHandling404 = require("./src/middlewares/errorHandling404");
const app = express();

const PORT = 3000;
const routers = require("./src/routers");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(log_morgan);
app.use("/api/v1", routers);
app.use(errorHandling500);
app.use(errorHandling404);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
