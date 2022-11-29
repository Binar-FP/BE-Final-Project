const router = require("express").Router();

// import package swagger 
const swaggerUi = require('swagger-ui-express');
// import file json
const swaggerDocument = require('../docs/swagger.json');
// api docs
router.use('/api-docs', swaggerUi.serve);
router.get('/api-docs', swaggerUi.setup(swaggerDocument));


const register = require("../app/controllers/registerController");
const login = require("../app/controllers/loginController");
const { runValidation, registerValidation } = require("../validation");

router.post("/api/register", registerValidation, runValidation, register.register);
router.post("/login", login.signin);

module.exports = router;
