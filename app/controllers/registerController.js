const bcrypt = require('bcrypt');
const  {User} = require('../models')
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
  const { username, email, password, countryCode, NIK, addres, phoneNumber, imageUrl, dateOfBirth, gender , roleId } = req.body;

    // Validate user input
  if (!(email && password && username )) {
    res.status(400).send("All input is required");
  }

  const emailUser = await User.findOne({
    where: {
      email: email,
    },
  })

  if (emailUser){
    res.status(400).send("email is Already")
  }

  // const minimum = 8;

  const encryptedPassword = await encryptPassword(password);


  const newUser = await User.create({
    roleId,
    gender,
    imageUrl,
    countryCode,
    NIK,
    addres,
    phoneNumber,
    dateOfBirth,
    username,
    email: email.toLowerCase(),
    password: encryptedPassword,
})

res.status(201).json({
  status: 'success',
  data: {
    newUser
  }
})
 } catch (error) {
  res.status(error.statusCode || 500).json({
    message: error.message,
  });
 }
};

module.exports = {
  register,
}