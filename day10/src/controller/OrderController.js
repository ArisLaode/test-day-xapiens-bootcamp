const { order } = require("../db/models");

const baseResponse = require("../helper/BaseResponse");

module.exports = class orderController {
  static async get(req, res) {
    try {
      const payload = await order.findAll();
      baseResponse({ message: "orders retrieved", data: payload })(res);
    } catch (error) {
      console.log(error);
    }
  }

  static async getById(req, res) {
    try {
      const payload = await order.findByPk(req.params.id);
      baseResponse({ message: "orders retrieved", data: payload })(res);
    } catch (error) {
      console.log(error);
    }
  }

  static async createOrder(req, res) {
    try {
      const payload = await order.create({
        user_id: req.body.user_id,
        driver_id: req.body.driver_id,
        product_id: req.body.product_id,
        quantity: req.body.quantity,
        status: req.body.status,
      });
      baseResponse({ status: "accepted", data: payload })(res);
    } catch (error) {
      console.log(error);
    }
  }

  static async updateOrder(req, res) {
    const orderDetails = await order.update(
      {
        user_id: req.body.user_id,
        driver_id: req.body.driver_id,
        product_id: req.body.product_id,
        quantity: req.body.quantity,
        status: req.body.status,
      },
      { where: { id: req.body.id } }
    );
    if (!orderDetails) {
      baseResponse({ message: "order not found", data: orderDetails })(
        res,
        404
      );
    }
    baseResponse({ message: "order updated", data: orderDetails })(res, 200);
  }
  catch(error) {
    console.log(error);
  }

  static async deleteOrder(req, res) {
    try {
      const orderDetails = await order.destroy({
        where: {
          id: req.params.id,
        },
      });
      if (!orderDetails) {
        baseResponse({ message: "order not found", data: orderDetails })(
          res,
          404
        );
      }
      baseResponse({ message: "order delete", data: orderDetails })(res, 200);
    } catch (error) {
      console.log(error);
    }
  }
};
