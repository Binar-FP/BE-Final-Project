const router = require("express").Router();
const cors = require("cors");

const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("../docs/swagger.json");
const register = require("../app/controllers/registerController");
const login = require("../app/controllers/loginController");
const users = require("../app/controllers/userController");
const { runValidation, registerValidation } = require("../validation");
const uploader = require("../middleware/uploader");


router.use("/api-docs", swaggerUi.serve);
router.get("/api-docs", swaggerUi.setup(swaggerDocument));

router.use(cors());
router.post("/api/register", registerValidation, runValidation, uploader.single("image"), register.register);
router.post("/login", login.signin);
router.post("/login/admin", login.signinAdmin);

router.get("/api/users", users.findUsers);
router.get("/api/users/:id", users.findUsersById);
router.delete("/api/users/:id", users.deleteUsers);
router.put("/api/users/:id", users.updateUserById);

module.exports = router;
