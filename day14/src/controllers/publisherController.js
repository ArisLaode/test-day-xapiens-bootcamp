"use strict";

const { publisher } = require("../db/models");
const response = require("../helper/response");

class publisherController {
  static async getPublisher(req, res, next) {
    try {
      const payload = await publisher.findAll();
      response({ message: "get all publishers!", data: payload })(res);
      console.log("tesssss");
    } catch (error) {
      next(error);
    }
  }

  static async getId(req, res, next) {
    try {
      const payload = await publisher.findByPk(req.params.id);
      response({ message: "get spesific Publishers!", data: payload })(res);
    } catch (error) {
      next(error);
    }
  }

  static async delPublisher(req, res, next) {
    try {
      const payload = await publisher.destroy({
        where: {
          id: req.params.id,
        },
      });
      response({ message: "publisher delete success" })(res, 200);
    } catch (error) {
      next(error);
    }
  }

  static async createPublisher(req, res, next) {
    try {
      const payload = await publisher.create({
        name: req.body.name,
        adddress: req.body.adddress,
        email: req.body.email,
        phone: req.body.phone,
        website: req.body.website,
      });
      response({ message: "add publisher success", data: payload })(res, 200);
    } catch (error) {
      next(error);
    }
  }

  static async updatePublisher(req, res) {
    const payload = await publisher.update({
      where: {
        id: req.params.id,
      },
      name: req.body.name,
      adddress: req.body.adddress,
      email: req.body.email,
      phone: req.body.phone,
      website: req.body.website,
    });
    response({ message: "update publisher success", data: payload })(res, 200);
  }
}

module.exports = publisherController;
