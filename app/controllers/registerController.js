const bcrypt = require("bcrypt");
const { User } = require("../models");
const saltRounds = 10;

const encryptPassword = (password) => {
  return new Promise((resolve, reject) => {
    bcrypt.hash(password, saltRounds, (err, encryptedPassword) => {
      if (err) {
        reject(err);
        return;
      }

      resolve(encryptedPassword);
    });
  });
};

const register = async (req, res) => {
  try {
    const { email, password, firstName, lastName, NIK, address, phoneNumber, image, dateOfBirth, gender } = req.body;

    const emailUser = await User.findOne({
      where: {
        email: email,
      },
    });

    if (emailUser) {
      return res.status(400).json({ status: "failed", message: "Email is already exist, please use another one" });
    }

    // const minimum = 8;

    const encryptedPassword = await encryptPassword(password);

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
      email,
      password: encryptedPassword,
    });

    res.status(201).json({
      status: "success",
      message: "Register success, enjoy your flight with us",
      data: {
        newUser,
      },
    });
  } catch (error) {
    res.status(error.statusCode || 500).json({
      message: error.message,
    });
  }
};

module.exports = {
  register,
};
