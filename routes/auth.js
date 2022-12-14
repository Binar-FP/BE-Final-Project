const router = require("express").Router();

const { runValidation, registerValidation } = require("../validation");
const  register = require("../app/controllers/registerController");
const login = require("../app/controllers/loginController");

router.post("/register", registerValidation, runValidation, register.register);
router.post("/login", login.signin);
router.post("/login/admin", login.signinAdmin);
router.get('/auth/send-email', register.verified);

module.exports = router;
