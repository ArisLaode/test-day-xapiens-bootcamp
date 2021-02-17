const { driver } = require("../db/models");

const baseResponse = require("../helper/BaseResponse");

module.exports = class DriverController {
  static async get(req, res) {
    try {
      const payload = await driver.findAll();
      baseResponse({ message: "drivers retrieved", data: payload })(res);
    } catch (error) {
      console.log(error);
    }
  }

  static async getById(req, res) {
    try {
      const payload = await driver.findByPk(req.params.id);
      baseResponse({ message: "drivers retrieved", data: payload })(res);
    } catch (error) {
      console.log(error);
    }
  }

  static async createDriver(req, res) {
    try {
      const payload = await driver.create({
        full_name: req.body.full_name,
        phone_number: req.body.phone_number,
      });
      baseResponse({ message: "drivers created", data: payload })(res);
    } catch (error) {
      console.log(error);
    }
  }

  static async updateDriver(req, res) {
    const driverDetails = await driver.update(
      {
        full_name: req.body.full_name,
        phone_number: req.body.phone_number,
      },
      { where: { id: req.body.id } }
    );
    if (!driverDetails) {
      baseResponse({ message: "driver not found", data: driverDetails })(
        res,
        404
      );
    }
    baseResponse({ message: "driver updated", data: driverDetails })(res, 200);
  }
  catch(error) {
    console.log(error);
  }

  static async deleteDriver(req, res) {
    try {
      const driverDetails = await driver.destroy({
        where: {
          id: req.params.id,
        },
      });
      if (!driverDetails) {
        baseResponse({ message: "driver not found", data: driverDetails })(
          res,
          404
        );
      }
      baseResponse({ message: "driver delete", data: driverDetails })(res, 200);
    } catch (error) {
      console.log(error);
    }
  }
};
