"use strict";

const axios = require("axios").default;
const response = require("../helper/responseAPI");

const urlAPI = "https://api.rajaongkir.com/starter/";
const APIkey = "70d14532dbdaca1a00c2b8dc41116670";

class rajaongkirController {
  static async getDataCost(req, res, next) {
    try {
      const payload = await axios.post(urlAPI + "cost", req.body, {
        headers: {
          key: APIkey,
        },
      });
      response({ message: "data retrieved", data: payload.data })(res);
    } catch (error) {
      next(error);
    }
  }

  static async getDataCity(req, res, next) {
    try {
      const payload = await axios.post(urlAPI + "city", req.body, {
        headers: {
          key: APIkey,
        },
      });
      response({ message: "data retrieved", data: payload.data })(res);
    } catch (error) {
      next(error);
    }
  }

  static async getDataProvince(req, res, next) {
    try {
      const payload = await axios.post(urlAPI + "province", req.body, {
        headers: {
          key: APIkey,
        },
      });
      response({ message: "data retrieved", data: payload.data })(res);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = rajaongkirController;
