const router = require("express").Router();

const register = require("../app/controllers/registerController");
const login = require("../app/controllers/loginController");
const { runValidation, registerValidation } = require("../validation");

router.post("/api/register", registerValidation, runValidation, register.register);
router.post("/login", login.signin);

module.exports = router;
