const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { User } = require("../models");
const secretKey = process.env.ACCES_TOKEN_SECRET || "This is a secret key";
const refreshKey = process.env.REFRESH_TOKEN_TICKET || "This is a secret key";

const createToken = (payload) => jwt.sign(payload, secretKey, { expiresIn: "24h" });
const refreshToken = (payload) => jwt.sign(payload, refreshKey, { expiresIn: "24h" });
const signin = async (req, res) => {
  try {
    const user = await User.findOne({ where: { email: req.body.email } });

    if (!user) {
      return res.status(404).json({ message: "User Not found." });
    }
    const passwordIsValid = bcrypt.compareSync(req.body.password, user.password);

    if (!passwordIsValid) {
      res.status(401).json({ message: "Invalid Password" });
      return;
    }

    const { id, firstName, lastName, email, password, NIK, address, phoneNumber, imageUrl, roleId, gender, dateOfBirth } = user;

    const token = createToken({
      id,
      firstName,
      lastName,
      email,
      password,
      address,
      phoneNumber,
      imageUrl,
      roleId,
      gender,
      dateOfBirth,
      NIK,
    });

    const refresh = await User.update(
      { refresh_token: refreshToken },
      {
        where: { id: id },
      }
    );

    res.cookie("refreshToken", refresh, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000,
    });

    res.json({ token });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

module.exports = { signin };
