const { book, author, publisher } = require("../db/models");
const baseResponse = require("../helper/BaseResponse");

class BookController {
  static async get(req, res) {
    try {
      const payload = await book.findAll();
      baseResponse({ message: "books retrieved", data: payload })(res);

      // const payload = await book.findAll({
      //   include: "authors",
      // });
      // baseResponse({ message: "books retrieved", data: payload })(res);
    } catch (error) {
      console.log(error);
    }
  }

  static async getById(req, res) {
    try {
      const payload = await book.findByPk(req.params.id);
      baseResponse({ message: "books retrieved", data: payload })(res);
    } catch (error) {
      console.log(error);
    }
  }

  static async createBook(req, res) {
    try {
      const payload = await book.create({
        author_id: req.body.first_name,
        publisher_id: req.body.last_name,
        title: req.body.title,
        price: req.body.price,
        year: req.body.year,
      });
      baseResponse({ message: "books created", data: payload })(res);
    } catch (error) {
      console.log(error);
    }
  }

  static async updateBook(req, res) {
    const bookDetails = await book.update(
      {
        author_id: req.body.first_name,
        publisher_id: req.body.last_name,
        title: req.body.title,
        price: req.body.price,
        year: req.body.year,
      },
      { where: { id: req.body.id } }
    );
    if (!bookDetails) {
      baseResponse({ message: "book not found", data: bookDetails })(res, 404);
    }
    baseResponse({ message: "book updated", data: bookDetails })(res, 200);
  }
  catch(error) {
    console.log(error);
  }

  static async deleteBook(req, res) {
    try {
      const bookDetails = await book.destroy({
        where: {
          id: req.params.id,
        },
      });
      if (!bookDetails) {
        baseResponse({ message: "book not found", data: bookDetails })(
          res,
          404
        );
      }
      baseResponse({ message: "book delete", data: bookDetails })(res, 200);
    } catch (error) {
      console.log(error);
    }
  }

  static async getBookAuthor(req, res) {
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
    const payload = await publisher.findAll({
      include: [
        {
          model: book,
          where: {
            id: req.params.id,
          },
        },
      ],
      include: [
        {
          model: author,
        },
      ],
    });
    baseResponse({
      message: "get publisher with author success",
      data: payload,
    })(res, 200);
  }

  static async getBookSpesific(req, res) {
    const sort = req.query.sort_by;
    const order = req.query.order_by;

    if (sort === req.query.sort_by && order === req.query.order_by) {
      const payload = await book.findAll({
        order: [[sort, order]],
      });
      baseResponse({
        message: "get publisher with author success",
        data: payload,
      })(res, 200);
    }
  }
}

module.exports = BookController;
