const bcrypt = require("bcrypt")
const { User, Verify,} = require("../models")
const { sendMail,}= require("../../lib/sendEmail")
const { v4: uuidv4, } = require("uuid")
const tokenVerify = uuidv4()



const saltRounds = 10

const encryptPassword = (password) => {
  return new Promise((resolve, reject) => {
    bcrypt.hash(password, saltRounds, (err, encryptedPassword) => {
      if (err) {
        reject(err)
        return
      }

      resolve(encryptedPassword)
    })
  })
}

const register = async (req, res) => {
  try {
    const { email, password, firstName, lastName,
      NIK, address, phoneNumber, image, dateOfBirth, gender, } = req.body

    const emailUser = await User.findOne({
      where: {
        email: email,
      },
    })

    if (emailUser) {
      return res.status(400).json({ status: "failed", message: "Email is already exist, please use another one", })
    }

    // const minimum = 8

    const encryptedPassword = await encryptPassword(password)

    const newUser = await User.create({
      roleId: "buyer",
      gender,
      image,
      NIK,
      address,
      phoneNumber,
      dateOfBirth,
      lastName,
      firstName,
      email: email.toLowerCase(),
      password: encryptedPassword,
      verified: false,
    })
    const date = Date.now() + 1000 * 60 * 60 * 24
    const token = `${tokenVerify}${Date.now()}`
    await Verify.create({
      userId: newUser.id,
      tokenVerify: token,
      expiredAt: date,
    })
    const data = {
      EMAIL: email,
      subject: "Email Verification",
      text: "hello word",
      html: '<p>You requested for email verification, kindly use this <a href="https://flywithmee.netlify.app/login?token='+token+'">link</a> to verify your email address</p>', // eslint-disable-line
    }
    sendMail(data)

    res.status(201).json({
      status: "success",
      message: "Register success, enjoy your flight with us",
      data: {
        newUser,
      },
    })
  } catch (error) {
    res.status(error.statusCode || 500).json({
      message: error.message,
    })
  }
}

const verified = async (req, res) => {
  try {
    const { urlToken, } = req.body
    const cekToken = await Verify.findOne({
      where: { tokenVerify: urlToken, },
    })
    const ExpiredDate = cekToken.expiredAt
    const dateNow = Date.now()
    if (dateNow >= ExpiredDate) {
      return res.status(400).json({ status: "failed", message: "expired token", })
    }
    const userVerify = await User.update(
      { verified: true, },
      {
        where: {
          id: cekToken.userId,
        },
      }
    )
    res.status(200).json({
      message: "Your account has been successfully verified.",
      userVerify: userVerify.verified,
    })
  } catch (error) {
    res.status(error.statusCode || 500).json({
      message: error.message,
    })
  }
}

module.exports = {
  register,
  verified,
}
