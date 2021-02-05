"use strict";

const jwt = require("jsonwebtoken");
const { user } = require("../db/models");
require("dotenv").config();

module.exports = async (req, res, next) => {
  try {
    let token = req.headers.authorization;
    let payload = jwt.verify(token, process.env.SECRET_KEY);
    req.user = await user.findByPk(payload.id);
    next();
  } catch {
    res.status(401);
    next(new Error("Invalid Token!"));
  }
};
