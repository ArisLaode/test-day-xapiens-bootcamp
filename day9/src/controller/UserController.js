const { user } = require("../db/models");
const baseResponse = require("../helper/BaseResponse");

class UserController {
  static async get(req, res) {
    // get data dari db
    const payload = await user.findAll();
    baseResponse({ message: "users retrieved", data: payload })(res);
    // res.json({
    //   success: true,
    //   message: "users retrieved",
    //   data: payload,
    // });
  }

  static async getById(req, res) {
    try {
      const payload = await user.findByPk(req.params.id);
      baseResponse({ message: "user retrieved", data: payload })(res);
    } catch (error) {
      console.log(error);
    }
  }

  static async delete(req, res) {
    const data = await user.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (data) {
      baseResponse({ message: "user deleted", data: payload })(res, 200);
    }
    baseResponse({ message: "user not found", data: payload })(res, 404);
  }
}

module.exports = UserController;
