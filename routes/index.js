const router = require("express").Router();
const cors = require("cors");

const auth = require("../routes/auth");
const airports = require("../routes/airports");
const users = require("../routes/users");
const docs = require("../routes/docs");
const flights = require("../routes/flights")
const destination = require("../routes/destinations");
const passengers = require("../routes/passengers");
const Schedules = require("../routes/schedules")

router.use(cors());
router.use("/api/", auth);
router.use("/api/airports/", airports);
router.use("/api/users/", users);
router.use("/api/destinations/", destination);
router.use("/api/passenger/", passengers);
router.use("/api/flights/", flights);
router.use("/api/schedule/", Schedules);
router.use("/api-docs", docs);

module.exports = router;
