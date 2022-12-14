const { User, Transaction, History, Verify,} = require("../models")
const imagekit = require("../../lib/imageKit")
const { v4: uuidv4, } = require("uuid")
const bcrypt = require("bcrypt")
const tokenVerify = uuidv4()
const { sendMail,}= require("../../lib/sendEmail")
const fs = require("fs")
const path = require("path")
const handlebars = require("handlebars")

async function findUsers(req, res) {
  try {
    const responseData = await User.findAll({
      include: [
        {
          model: Transaction,
        },
        {
          model: History,
        },
      ],
    })
    res.status(200).json({
      status: "success",
      meesage: "success get all users",
      data: responseData,
    })
  } catch (error) {
    return res.status(500).send({ message: error.message, })
  }
}

async function findUsersById(req, res) {
  try {
    const responseData = await User.findByPk(req.params.id, {
      include: [
        {
          model: Transaction,
        },
        {
          model: History,
        },
      ],
    })
    res.status(200).json({
      status: "success",
      meesage: "success get user by id",
      data: responseData,
    })
  } catch (error) {
    return res.status(500).send({ message: error.message, })
  }
}

async function deleteUsers(req, res) {
  try {
    await User.destroy({ where: { id: req.params.id, }, })
    res.status(200).json({
      status: "success",
      message: "User has been deleted sucessfully",
    })
  } catch (error) {
    return res.status(500).send({ message: error.message, })
  }
}

async function updateUserById(req, res) {
  try {
    const { firstName, lastName, NIK, address,
      phoneNumber, dateOfBirth, gender, } = req.body

    const file = req.file

    const validFormat = file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg" || file.mimetype == "image/gif"
    if (!validFormat) {
      return res.status(400).json({
        status: "failed",
        message: "Wrong Image Format",
      })
    }

    const split = file.originalname.split(".")
    const ext = split[split.length - 1]

    const img = await imagekit.upload({
      file: file.buffer,
      fileName: `IMG-${Date.now()}.${ext}`,
    })

  

    await User.update(
      {
        firstName,
        lastName,
        NIK,
        address,
        phoneNumber,
        image: img.url,
        dateOfBirth,
        gender,
      },
      {
        where: { id: req.params.id, },
      }
    )
    res.status(200).json({
      status: "success",
      message: "Your profile has been update sucessfully",
    })
  } catch (error) {
    return res.status(500).send({ message: error.message, })
  }
}

async function updatePassword(req, res) {
  try {
    const { password, } = req.body
    const hashedPassword = bcrypt.hashSync(password, 10)
    await User.update(
      {
        password: hashedPassword,
      },
      {
        where: { id: req.params.id, },
      }
    )
    res.status(200).json({
      status: "success",
      message: "Your profile has been update sucessfully",
    })
  } catch (error) {
    return res.status(500).send({ message: error.message, })
  }
}

async function forgotPassword(req, res) {
  const email = req.body.email.toLowerCase()
  try {
    const user = await User.findOne({ where: 
    { email: email,}, })
  
    if (!user) {
      return res.status(404).json({ status: "failed", message: "User Not found.", })
    }
    const token = `${tokenVerify}${Date.now()}`
    await Verify.update(
      { tokenVerify: token, },
      {
        where: {
          id: user.id,
        },
      }
    )
    const emailTemplateSource = fs.readFileSync(path.join(__dirname, "../views/resetPassword.hbs"), "utf8")
    const template = handlebars.compile(emailTemplateSource)
    const name = user.firstName + " " + user.lastName
    const action_url = `http://flywithme.my.id/reset?token=${token}&id=${user.id}` // eslint-disable-line
    const support_url = `https://wa.me/15551234567` // eslint-disable-line
    const htmlToSend = template({name, action_url, support_url,})
    const data = {
      EMAIL: email,
      subject: "Reset Password",
      text: "Reset Password",
      html: htmlToSend, // eslint-disable-line
    }
    sendMail(data)

    res.status(201).json({
      status: "success",
      message: "link succesful received ",
    })
  } catch (error) {
    return res.status(500).send({ message: error.message, })
  }
}

async function changePassword(req, res) {
  try {
    const {id, token,} = req.params
    const { password, } = req.body
    const user = await User.findOne({ where: 
      { id: id,}, })
    if (!user) {
      return res.status(404).json({ status: "failed", message: "User Not found.", })
    }
    const validToken = await Verify.findOne({
      where: { 
        tokenVerify: token,
      },
    })
    if (validToken) {
      const encryptedPassword = await bcrypt.hash(password, 10)
      await User.update(
        { password: encryptedPassword, },
        {
          where: {
            id: user.id,
          },
        }
      )
      res.status(201).json({
        status: "success",
        message: "change Password Success",
      })
    }
  } catch (error) {
    return res.status(500).send({ message: error.message, })
  }
}

module.exports = {
  findUsers,
  findUsersById,
  deleteUsers,
  updateUserById,
  forgotPassword,
  changePassword,
  updatePassword,
}
