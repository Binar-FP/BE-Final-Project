const jwt = require("jsonwebtoken")
const { Admin, User, } = require("../app/models")
const { ACCESS_TOKEN_SECRET, } = process.env

const authAdmin = (req, res, next) => {
  try {
    const bearerToken = req.headers.authorization
    const token = bearerToken.split("Bearer ")[1]
    if (!token) {
      return res.status(401).json({
        status: "failed",
        message: "Required header authorization",
      })
    }

    const payload = jwt.verify(token, ACCESS_TOKEN_SECRET)
    Admin.findByPk(payload.id).then((instance) => {
      req.admin = instance
      next()
    })
  } catch {
    res.status(401).json({
      status: "failed",
      message: "Invalid Token",
    })
  }
}

const authUser = (req, res, next) => {
  try {
    const bearerToken = req.headers.authorization
    const token = bearerToken.split("Bearer ")[1]
    if (!token) {
      return res.status(401).json({
        status: "failed",
        message: "Required header authorization",
      })
    }

    const payload = jwt.verify(token, ACCESS_TOKEN_SECRET)
    User.findByPk(payload.id).then((instance) => {
      req.user = instance
      next()
    })
  } catch {
    res.status(401).json({
      status: "failed",
      message: "Invalid Token",
    })
  }
}

module.exports = { authAdmin, authUser, }
