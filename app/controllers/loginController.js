const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const { User, Admin, } = require("../models")
const secretKey = process.env.ACCESS_TOKEN_SECRET || "This is a secret key"

const createToken = (payload) => jwt.sign(payload, secretKey, { expiresIn: "24h",})
const signin = async (req, res) => {
  try {
    const user = await User.findOne({ where: 
      { email: req.body.email.toLowerCase(),}, })

    if (!user) {
      return res.status(404).json({ status: "failed", message: "User Not found.", })
    }
    const passwordIsValid = bcrypt.compareSync(
      req.body.password,
      user.password)

    if (!passwordIsValid) {
      res.status(401).json({ status: "failed", message: "Invalid Password", })
      return
    }

    const verifikasi = user.verified
    if (!verifikasi) {
      return res.status(404).json({ status: "failed", message: "Account Not Verified", })
    }

    const { id, firstName, lastName, email, password,
      NIK, address, phoneNumber, image, roleId, gender, dateOfBirth, } = user

    const token = createToken({
      id,
      firstName,
      lastName,
      email,
      password,
      address,
      phoneNumber,
      image,
      roleId,
      gender,
      dateOfBirth,
      NIK,
    })
    res.json({ status: "success", message: "Login successfully", data: user, token, })
  } catch (error) {
    return res.status(500).send({ message: error.message, })
  }
}

const signinAdmin = async (req, res) => {
  try {
    const admin = await Admin.findOne({ where: { email: req.body.email, }, })

    if (!admin) {
      return res.status(404).json({ status: "failed", message: "Admin Not found.", })
    }
    const passwordIsValid = bcrypt.compareSync(
      req.body.password,
      admin.password)

    if (!passwordIsValid) {
      res.status(401).json({ status: "failed", message: "Invalid Password", })
      return
    }

    const { id, firstName, lastName, email, password, roleId, } = admin

    const token = createToken({
      id,
      firstName,
      lastName,
      email,
      password,
      roleId,
    })

    res.json({ status: "success", message: `Welcome ${admin.firstName} enjoy your work and have a nice day`, data: admin, token, })
  } catch (error) {
    return res.status(500).send({ message: error.message, })
  }
}

module.exports = { signin, signinAdmin, }
