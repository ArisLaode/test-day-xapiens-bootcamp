const { check, validationResult } = require("express-validator");
const { publisher } = require("../db/models");

const publisherValidationRules = () => {
  return [
    check("name").isString(),
    check("address").isString(),
    check("email")
      .isEmail()
      .custom((email) => {
        return publisher
          .findOne({
            where: {
              email: email,
            },
          })
          .then((author) => {
            if (author) {
              return Promise.reject("E-mail already in use");
            }
          });
      }),
    check("phone").notEmpty(),
    check("website").optional({ nullable: true }),
  ];
};

const validatePublisher = (req, res, next) => {
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

module.exports = { publisherValidationRules, validatePublisher };
