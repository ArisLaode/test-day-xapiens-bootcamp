const { customer } = require("../db/models");

const baseResponse = require("../helper/BaseResponse");

module.exports = class CustomerController {
  static async get(req, res) {
    try {
      const payload = await customer.findAll();
      baseResponse({ message: "customers retrieved", data: payload })(res);
    } catch (error) {
      console.log(error);
    }
  }

  static async getById(req, res) {
    try {
      const payload = await customer.findByPk(req.params.id);
      baseResponse({ message: "customers retrieved", data: payload })(res);
    } catch (error) {
      console.log(error);
    }
  }

  static async createCustomer(req, res) {
    try {
      const payload = await customer.create({
        full_name: req.body.full_name,
        username: req.body.username,
        email: req.body.email,
        phone_number: req.body.phone_number,
      });
      baseResponse({ message: "customers created", data: payload })(res);
    } catch (error) {
      console.log(error);
    }
  }

  static async updateCustomer(req, res) {
    const customerDetails = await customer.update(
      {
        full_name: req.body.full_name,
        username: req.body.username,
        email: req.body.email,
        phone_number: req.body.phone_number,
      },
      { where: { id: req.body.id } }
    );
    if (!customerDetails) {
      baseResponse({ message: "customer not found", data: customerDetails })(
        res,
        404
      );
    }
    baseResponse({ message: "customer updated", data: customerDetails })(
      res,
      200
    );
  }
  catch(error) {
    console.log(error);
  }

  static async deleteCustomer(req, res) {
    try {
      const customerDetails = await customer.destroy({
        where: {
          id: req.params.id,
        },
      });
      if (!customerDetails) {
        baseResponse({ message: "customer not found", data: customerDetails })(
          res,
          404
        );
      }
      baseResponse({ message: "customer delete", data: customerDetails })(
        res,
        200
      );
    } catch (error) {
      console.log(error);
    }
  }
};
