const router = require("express").Router();

const users = require("../app/controllers/userController");
const uploader = require("../middleware/uploader");

router.get("/findAll", users.findUsers);
router.get("/findById/:id", users.findUsersById);
router.delete("/delete/:id", users.deleteUsers);
router.put("/update/:id", uploader.single("image"), users.updateUserById);

module.exports = router;
