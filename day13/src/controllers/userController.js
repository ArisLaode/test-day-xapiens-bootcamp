"use strict";

const { user } = require("../db/models");
const response = require("../helper/response");
const token = require("../helper/token");
const bcrypt = require("bcrypt");

class userControl {
  static async register(req, res, next) {
    let { first_name, last_name, email, password } = req.body;
    try {
      const payload = await user.create({
        first_name,
        last_name,
        email,
        password,
      });
      return response({ message: "User register is success!", data: payload })(
        res,
        200
      );
    } catch (err) {
      res.status(422);
      next(err);
    }
  }

  static async getAll(req, res, next) {
    try {
      const payload = await user.findAll();
      return response({ message: "Get all user is success!", data: payload })(
        res,
        200
      );
    } catch (err) {
      res.status(422);
      next(err);
    }
  }

  static async getId(req, res, next) {
    try {
      const payload = await user.findOne({
        where: {
          id: req.params.id,
        },
      });
      return response({ message: "Get user success", data: payload })(res, 200);
    } catch (err) {
      res.status(422);
      next(err);
    }
  }

  static async updateUser(req, res, next) {
    try {
      const payload = await user.update(
        {
          first_name: req.body.first_name,
          last_name: req.body.last_name,
          email: req.body.email,
          password: req.body.password,
        },
        {
          where: {
            id: req.params.id,
          },
        }
      );
      return response({ message: "update user success", data: payload })(
        res,
        200
      );
    } catch (err) {
      res.status(422);
      next(err);
    }
  }

  static async delUser(req, res, next) {
    try {
      const payload = await user.destroy({
        where: {
          id: req.params.id,
        },
      });
      return response({ message: "delete user success", data: payload })(
        res,
        200
      );
    } catch (err) {
      res.status(422);
      next(err);
    }
  }

  static async login(req, res, next) {
    try {
      let instance = await user.findOne({
        where: {
          email: req.body.email,
        },
      });
      if (!instance) {
        throw new Error(`Email ${req.body.email} doesn't exist!`);
      }
      const isPassword = await bcrypt.compareSync(
        req.body.password,
        instance.password
      );
      if (!isPassword) {
        throw new Error(`Wrong password!`);
      }
      return response({ message: "Login success", data: token(instance) })(
        res,
        200
      );
    } catch (err) {
      res.status(403);
      next(err);
    }
  }

  static async profile(req, res) {
    res.status(200);
    return res.json(req.user.entity);
  }
}

module.exports = userControl;
