const router = require("express").Router();
const cors = require("cors");

const auth = require("../routes/auth");
const airports = require("../routes/airports");
const users = require("../routes/users");
const docs = require("../routes/docs");
const destination = require("../routes/destinations");

router.use(cors());
router.use("/api/", auth);
router.use("/api/airports/", airports);
router.use("/api/users/", users);
router.use("/api/destinations/", destination);
router.use("/api-docs", docs);

module.exports = router;
