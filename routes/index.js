const router = require("express").Router();
const cors = require("cors");

const auth = require("../routes/auth");
const airports = require("../routes/airports");
const users = require("../routes/users");
const docs = require("../routes/docs");
const flights = require("../routes/flights")
const destination = require("../routes/destinations");
const passengers = require("../routes/passengers");

router.use(cors());
router.use("/api/", auth);
router.use("/api/airports/", airports);
router.use("/api/users/", users);
router.use("/api/destinations/", destination);
<<<<<<< HEAD
router.use("/api/passenger/", passengers);
=======
router.use("/api/flights/", flights);
>>>>>>> 61a4607c4c87ec22b6c6f14894b19f6fbcbe50f4
router.use("/api-docs", docs);

module.exports = router;
