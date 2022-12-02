const { User } = require("../models");
const imagekit = require('../../lib/imageKit')


async function findUsers(req, res) {
  try {
    const responseData = await User.findAll();
    res.status(200).json({
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
      data: responseData,
    });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
}

async function deleteUsers(req, res) {
  try {
    await User.destroy({ where: { id: req.params.id } });
    res.status(200).json({ message: "User has been deleted sucessfully" });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
}

async function updateUserById(req, res) {
  try {
    const { password, firstName, lastName, NIK, address, phoneNumber, image, dateOfBirth, gender } = req.body;

    const file = req.file

    const validFormat = file.mimetype == 'image/png' || file.mimetype == 'image/jpg' || file.mimetype == 'image/jpeg' || file.mimetype == 'image/gif';
    if (!validFormat) {
        return res.status(400).json({
            status: 'failed',
            message: 'Wrong Image Format'
        })
    }

    const split = file.originalname.split('.')
        const ext = split[split.length - 1]

    const img = await imagekit.upload({
        file: file.buffer, 
        fileName: `IMG-${Date.now()}.${ext}`, 
      })
  
    await User.update(
      { password, firstName, lastName, NIK, address, phoneNumber, image: img.url, dateOfBirth, gender },
      {
        where: { id: req.params.id },
      }
    );
    res.status(200).json({ message: "Your profile has been update sucessfully" });
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
