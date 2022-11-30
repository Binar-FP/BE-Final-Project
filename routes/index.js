const router = require("express").Router();

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../docs/swagger.json');
const register = require("../app/controllers/registerController");
const login = require("../app/controllers/loginController");
const { runValidation, registerValidation } = require("../validation");

router.use('/api-docs', swaggerUi.serve);
router.get('/api-docs', swaggerUi.setup(swaggerDocument));

router.post("/api/register", registerValidation, runValidation, register.register);
router.post("/login", login.signin);
router.post("/login/admin", login.signinAdmin);

module.exports = router;
