const router = require("express").Router()

const { runValidation, registerValidation, } = require("../validation")
const register = require("../app/controllers/registerController")
const login = require("../app/controllers/loginController")
const googleLogin = require("../app/controllers/handleGoogleLoginOrRegister")

router.post("/register", registerValidation, runValidation, register.register)
router.post("/login", login.signin)
router.post("/login/admin", login.signinAdmin)
router.post("/google", googleLogin.handleGoogleLoginOrRegister)
router.post("/auth/send-email", register.verified)


module.exports = router
