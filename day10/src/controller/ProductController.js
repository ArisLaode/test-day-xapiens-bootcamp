const { product } = require("../db/models");

const baseResponse = require("../helper/BaseResponse");

module.exports = class ProductController {
  static async get(req, res) {
    try {
      const payload = await product.findAll();
      baseResponse({ message: "products retrieved", data: payload })(res);
    } catch (error) {
      console.log(error);
    }
  }

  static async getById(req, res) {
    try {
      const payload = await product.findByPk(req.params.id);
      baseResponse({ message: "products retrieved", data: payload })(res);
    } catch (error) {
      console.log(error);
    }
  }

  static async createProduct(req, res) {
    try {
      const payload = await product.create({
        name: req.body.name,
        price: req.body.price,
      });
      baseResponse({ message: "products created", data: payload })(res);
    } catch (error) {
      console.log(error);
    }
  }

  static async updateProduct(req, res) {
    const productDetails = await product.update(
      {
        name: req.body.name,
        price: req.body.price,
      },
      { where: { id: req.body.id } }
    );
    if (!productDetails) {
      baseResponse({ message: "product not found", data: productDetails })(
        res,
        404
      );
    }
    baseResponse({ message: "product updated", data: productDetails })(
      res,
      200
    );
  }
  catch(error) {
    console.log(error);
  }

  static async deleteproduct(req, res) {
    try {
      const productDetails = await product.destroy({
        where: {
          id: req.params.id,
        },
      });
      if (!productDetails) {
        baseResponse({ message: "product not found", data: productDetails })(
          res,
          404
        );
      }
      baseResponse({ message: "product delete", data: productDetails })(
        res,
        200
      );
    } catch (error) {
      console.log(error);
    }
  }
};
