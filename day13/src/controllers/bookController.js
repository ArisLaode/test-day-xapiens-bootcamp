"use strict";

const { book, author, publisher } = require("../db/models");
const response = require("../helper/response");

class bookController {
  static async getBook(req, res, next) {
    try {
      const payload = await book.findAll();
      response({ message: "get all books!", data: payload })(res);
    } catch (error) {
      next(error);
    }
  }

  static async getId(req, res, next) {
    try {
      const payload = await book.findByPk(req.params.id);
      response({ message: "get spesific book!", data: payload })(res);
    } catch (error) {
      res.status(404);
      next(error);
    }
  }

  static async delBook(req, res, next) {
    try {
      const payload = await book.destroy({
        where: {
          id: req.params.id,
        },
      });
      response({ message: "book delete success" })(res, 200);
    } catch (error) {
      next(error);
    }
  }

  static async createBook(req, res, next) {
    try {
      const payload = await book.create({
        author_id: req.body.author_id,
        publisher_id: req.body.publisherid,
        title: req.body.title,
        price: req.body.price,
        year: req.body.year,
      });
      response({ message: "add book success", data: payload })(res, 200);
    } catch (error) {
      next(error);
    }
  }

  static async updateBook(req, res, next) {
    try {
      const payload = await book.update({
        where: {
          id: req.params.id,
        },
        authorId: req.body.authorId,
        publisherId: req.body.publisherId,
        title: req.body.title,
        price: req.body.price,
        year: req.body.year,
      });
      response({ message: "update book success", data: payload })(res, 200);
    } catch (error) {
      next(error);
    }
  }

  static async getBookAuthor(req, res, next) {
    try {
      const payload = await book.findAll({
        include: [
          {
            model: Author,
            where: {
              id: req.params.id,
            },
          },
        ],
      });
      response({ message: "get book with author success", data: payload })(
        res,
        200
      );
    } catch (error) {
      next(error);
    }
  }

  static async getAuthorPublisher(req, res, next) {
    try {
      const payload = await publisher.findAll({
        include: {
          model: Book,
          where: {
            id: req.params.id,
          },
          include: {
            model: Author,
          },
        },
      });
      response({ message: "get publisher with author success", data: payload })(
        res,
        200
      );
    } catch (error) {
      next(error);
    }
  }

  static async getBookSpesific(req, res, next) {
    try {
      const sort = req.query.sort_by;
      const order = req.query.order_by;

      if (sort === req.query.sort_by && order === req.query.order_by) {
        const payload = await book.findAll({
          order: [[sort, order]],
        });
        response({ message: "retrieved user", data: payload })(res, 200);
      }
    } catch (error) {
      next(error);
    }
  }

  static async getAuthorPublisher(req, res, next) {
    try {
      const payload = await author.findOne(
        {
          include: {
            model: Publisher,
            attributes: ["name", "address"],
            through: {
              attributes: [],
            },
          },
        },
        {
          where: {
            id: req.params.id,
          },
        }
      );
      response({ message: "retrieved author and publisher", data: payload })(
        res,
        200
      );
    } catch (error) {
      next(error);
    }
  }

  static async uploadCover(req, res, next) {
    try {
      return response({ message: "cover book upload success" })(res, 200);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = bookController;
