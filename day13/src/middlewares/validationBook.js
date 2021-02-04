const { check, validationResult } = require("express-validator");
const { book } = require("../db/models");

const bookValidationRules = () => {
  return [
    check("authorId").isNumeric(),
    check("publisherId").isNumeric(),
    check("title").isString(),
    check("price").isDecimal(),
    check("year")
      .toDate()
      .custom(async (year, { req }) => {
        const expireDate = new Date("2021-01-03");
        if (expireDate <= req.body.year) {
          throw new Error("Year must be valid before 2022");
        }
      }),
  ];
};

const validateBook = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  const extractedErrors = [];
  errors.array().map((err) => extractedErrors.push({ [err.param]: err.msg }));
  return res.status(422).json({
    errors: extractedErrors,
  });
};

module.exports = { bookValidationRules, validateBook };
