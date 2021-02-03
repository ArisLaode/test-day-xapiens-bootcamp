"use strict";

const morgan = require("morgan");
const path = require("path");
const fs = require("fs");

const appLogStream = fs.createWriteStream(path.join("tmp/logDaily.log"), {
  flags: "a",
});

const log_morgan = morgan("common", { stream: appLogStream });

module.exports = log_morgan;
