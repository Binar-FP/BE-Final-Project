const axios = require("axios")
const jwt = require("jsonwebtoken")
const { User, } = require("../models")
const secretKey = process.env.ACCESS_TOKEN_SECRET || "This is a secret key"

function createToken(user) {
  const payload = {
    id: user.id,
    firstName: user.name,
    email: user.email,
  }

  return jwt.sign(payload, secretKey)
}

const handleGoogleLoginOrRegister = async (req, res) => {
  const { accessToken, } = req.body
  const options = { headers: { Authorization: `Bearer ${accessToken}` ,}, }

  try {
    const response = await axios.get("https://www.googleapis.com/oauth2/v2/userinfo", options)
    const { id, email, name, } = response.data

    let user = await User.findOne({ where: { googleId: id, }, })
    if (!user) user = await User.create({ email, firstName: name, googleId: id, roleId: "buyer",})

    const token = createToken(user)

    res.status(201).json({ status: "success", message: "Login successfully", data: user, token, })
  } catch (err) {
    res.status(401).json({ error: { name: err.name, message: err.message, }, })
  }
}

module.exports = { handleGoogleLoginOrRegister, } 
