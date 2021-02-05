"use strict";

const morgan = require("morgan");
const moment = require("moment-timezone");
const path = require("path");
const fs = require("fs");

morgan.token("date", (req, res, tz) => {
  return moment().tz(tz).format();
});
morgan.format(
  "common",
  '[:date[Asia/Jakarta]] ":method :url" :status :res[content-length] - :response-time ms'
);

const appLogStream = fs.createWriteStream(path.join("tmp/logDaily.log"), {
  flags: "a",
});

const log_morgan = morgan("common", { stream: appLogStream });

module.exports = log_morgan;
