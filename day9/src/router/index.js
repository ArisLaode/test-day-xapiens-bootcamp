// module.exports = {
//   author: require("./author"),
//   publisher: require("./publisher"),
//   book: require("./book"),
// };

const author = require("./author");
const book = require("./book");
const publisher = require("./publisher");

const express = require("express");
const routers = express.Router();

routers.use("/authors", author);
routers.use("/books", book);
routers.use("/publishers", publisher);

module.exports = routers;
