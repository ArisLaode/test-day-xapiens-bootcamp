const { publisher, author, book } = require("../db/models");
const baseResponse = require("../helper/BaseResponse");

class publisherController {
  static async get(req, res) {
    try {
      const payload = await publisher.findAll();
      res.json(payload);
      // baseResponse({ message: "publishers retrieved", data: payload })(res);
    } catch (error) {
      console.log(error);
    }
  }

  static async getById(req, res) {
    try {
      const payload = await publisher.findByPk(req.params.id);
      baseResponse({ message: "publishers retrieved", data: payload })(res);
    } catch (error) {
      console.log(error);
    }
  }

  static async createPublisher(req, res) {
    try {
      const payload = await publisher.create({
        name: req.body.name,
        address: req.body.address,
        email: req.body.email,
        phone: req.body.phone,
        website: req.body.website,
      });
      baseResponse({ message: "publishers created", data: payload })(res);
    } catch (error) {
      console.log(error);
    }
  }

  static async updatePublisher(req, res) {
    const publisherDetails = await publisher.update(
      {
        name: req.body.name,
        address: req.body.address,
        email: req.body.email,
        phone: req.body.phone,
        website: req.body.website,
      },
      { where: { id: req.body.id } }
    );
    if (!publisherDetails) {
      baseResponse({ message: "publisher not found", data: publisherDetails })(
        res,
        404
      );
    }
    baseResponse({ message: "publisher updated", data: publisherDetails })(
      res,
      200
    );
  }
  catch(error) {
    console.log(error);
  }

  static async deletePublisher(req, res) {
    try {
      const publisherDetails = await publisher.destroy({
        where: {
          id: req.params.id,
        },
      });
      if (!publisherDetails) {
        baseResponse({
          message: "publisher not found",
          data: publisherDetails,
        })(res, 404);
      }
      baseResponse({ message: "publisher delete", data: publisherDetails })(
        res,
        200
      );
    } catch (error) {
      console.log(error);
    }
  }

  static async getPublisherBooks(req, res) {
    const payload = await publisher.findOne({
      where: { id: req.params.id },
      include: {
        model: book,
        as: "books",
      },
    });
    baseResponse({ message: "publisher get", data: payload })(res, 200);
  }

  // static async getAuthorPublisher(req, res) {
  //   const payload = await publisher.findOne({
  //     include: {
  //       model: book,
  //       as: "books",
  //     },
  //     where: {
  //       id: req.params.id,
  //     },
  //   });
  //   baseResponse({
  //     message: "get publisher with author success",
  //     data: payload,
  //   })(res, 200);
  // }
}

module.exports = publisherController;
