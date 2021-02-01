const { author, book, publisher } = require("../db/models");

const baseResponse = require("../helper/BaseResponse");

class AuthorController {
  static async get(req, res) {
    try {
      const payload = await author.findAll();
      baseResponse({ message: "author retrieved", data: payload })(res);
    } catch (error) {
      console.log(error);
    }
  }

  static async getById(req, res) {
    try {
      const payload = await author.findByPk(req.params.id);
      baseResponse({ message: "author retrieved", data: payload })(res);
    } catch (error) {
      console.log(error);
    }
  }

  static async getByIdBook(req, res) {
    try {
      const payload = await author.findByPk({
        include: "books",
      });
      baseResponse({ message: "books retrieved", data: payload })(res);
    } catch (error) {
      console.log(error);
    }
  }

  static async createAuthor(req, res) {
    try {
      const payload = await author.create({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
      });
      baseResponse({ message: "author created", data: payload })(res);
    } catch (error) {
      console.log(error);
    }
  }

  static async updateAuthor(req, res) {
    const authorDetails = await author.update(
      {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
      },
      { where: { id: req.body.id } }
    );
    if (!authorDetails) {
      baseResponse({ message: "author not found", data: authorDetails })(
        res,
        404
      );
    }
    baseResponse({ message: "author updated", data: authorDetails })(res, 200);
  }
  catch(error) {
    console.log(error);
  }

  static async deleteAuthor(req, res) {
    try {
      const authorDetails = await author.destroy({
        where: {
          id: req.params.id,
        },
      });
      if (!authorDetails) {
        baseResponse({ message: "author not found", data: authorDetails })(
          res,
          404
        );
      }
      baseResponse({ message: "author delete", data: authorDetails })(res, 200);
    } catch (error) {
      console.log(error);
    }
  }

  static async getAuthorBook(req, res) {
    const payload = await book.findAll({
      include: [
        {
          model: author,
          where: {
            id: req.params.id,
          },
          as: "author",
        },
      ],
    });
    baseResponse({
      message: "book get book with author success",
      data: payload,
    })(res, 200);
  }

  static async getAuthorPublisher(req, res) {
    const payload = await author.findOne({
      where: { id: req.params.id },
      include: [
        {
          model: publisher,
          as: "books",
          through: { attributes: [] },
        },
      ],
    });
    baseResponse({
      message: "Publishers get author success",
      data: payload,
    })(res, 200);
  }
}

module.exports = AuthorController;
