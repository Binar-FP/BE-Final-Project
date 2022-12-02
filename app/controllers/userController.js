const { User } = require("../models");

async function findUsers(req, res) {
  try {
    const responseData = await User.findAll();
    res.status(200).json({
      status: "success",
      meesage: "success get all users",
      data: responseData,
    });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
}

async function findUsersById(req, res) {
  try {
    const responseData = await User.findByPk(req.params.id);
    res.status(200).json({
      status: "success",
      meesage: "success get user by id",
      data: responseData,
    });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
}

async function deleteUsers(req, res) {
  try {
    await User.destroy({ where: { id: req.params.id } });
    res.status(200).json({
      status: "success",
      message: "User has been deleted sucessfully",
    });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
}

async function updateUserById(req, res) {
  try {
    const {
      password,
      firstName,
      lastName,
      NIK,
      address,
      phoneNumber,
      image,
      dateOfBirth,
      gender,
    } = req.body;

    await User.update(
      {
        password,
        firstName,
        lastName,
        NIK,
        address,
        phoneNumber,
        image,
        dateOfBirth,
        gender,
      },
      {
        where: { id: req.params.id },
      }
    );
    res.status(200).json({
      status: "success",
      message: "Your profile has been update sucessfully",
    });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
}

module.exports = {
  findUsers,
  findUsersById,
  deleteUsers,
  updateUserById,
};
