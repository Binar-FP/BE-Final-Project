/* eslint-disable global-require */
/* eslint-disable */
const {check, validationResult} = require('express-validator')
// const { register } = require('../app/controllers/registerController')


// running validator
runValidation = (req, res, next) => {
  const errors = validationResult(req)
  if(!errors.isEmpty()){
    return res.status(404).json({
      message: errors.array()[0].msg
    })
  }
  next()
}

registerValidation = [
  check('username', 'username not Empty').notEmpty(),
  check('email', 'email not Empty').notEmpty().matches(/.+\@.+\..+/).withMessage('email required use @'),
  check('password', 'password not Empty').notEmpty().isLength({min: 8 }).withMessage('password minimum 8 character'),
]




module.exports = {
  runValidation,
  registerValidation
}