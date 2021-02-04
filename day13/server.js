"use strict";

const express = require("express");
const log_morgan = require("./src/middlewares/morganLog");
const error_handling_500 = require("./src/middlewares/errorHandling500");
const error_handling_404 = require("./src/middlewares/errorHandling404");
const cors = require("cors");
const app = express();

const PORT = 3000;
const routers = require("./src/routers");

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(log_morgan);
app.use("/api/v1", routers);
app.use(error_handling_500);
app.use(error_handling_404);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
