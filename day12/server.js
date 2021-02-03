"use strict";

const express = require("express");
const errorHandling500 = require("./src/middlewares/errorHandling500");
const errorHandling400 = require("./src/middlewares/errorHandling400");
const app = express();

const PORT = 3000;
const routers = require("./src/routers");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api/v1", routers);

app.use(errorHandling500);
app.use(errorHandling400);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
