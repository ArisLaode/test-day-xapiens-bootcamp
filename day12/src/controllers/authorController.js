"use strict";

const { author } = require("../db/models");
const response = require("../helper/response");
const { validationResult } = require("express-validator/check");

class userController {
  static async getAuthor(req, res, next) {
    try {
      const payload = await author.findAll();
      response({ message: "get all authors!", data: payload })(res);
    } catch (error) {
      next(error);
    }
  }

  static async getId(req, res, next) {
    try {
      const payload = await author.findByPk(req.params.id);
      response({ message: "get spesific author!", data: payload })(res);
    } catch (error) {
      next(error);
    }
  }

  static async delAuthor(req, res, next) {
    try {
      const payload = await author.destroy({
        where: {
          id: req.params.id,
        },
      });
      response({ message: "author delete success", data: payload })(res, 200);
    } catch (error) {
      next(error);
    }
  }

  static async createAuthor(req, res, next) {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        res.status(422).json({ errors: errors.array() });
        return;
      }

      const payload = await author.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
      });
      response({ message: "add author success", data: payload })(res, 200);
    } catch (error) {
      next(error);
    }
  }

  static async updateAuthor(req, res, next) {
    try {
      const payload = await author.update({
        where: {
          id: req.params.id,
        },
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
      });
      response({ message: "update author success", data: payload })(res, 200);
    } catch (error) {
      next(error);
    }
  }

  static async uploadPhoto(req, res, next) {
    try {
      return response({ message: "photo upload success" })(res, 200);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = userController;
