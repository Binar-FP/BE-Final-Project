/* eslint-disable global-require */
/* eslint-disable */
const { check, validationResult } = require("express-validator");
const { User } = require("../app/models");
// const { register } = require('../app/controllers/registerController')

// running validator

runValidation = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      message: errors.array()[0].msg,
    });
  }
  next();
};

registerValidation = [
  check("firstName", "Name is required").notEmpty(),
  check("email", "email is required")
    .notEmpty()
    .matches(/.+\@.+\..+/)
    .withMessage("This email is invalid. Make sure it's written like  example@email.com"),
  check("password", "password is required").notEmpty().isLength({ min: 8 }).withMessage("Your password is too short"),
];

module.exports = {
  runValidation,
  registerValidation,
};
