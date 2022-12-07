const router = require("express").Router();

const airports = require("../app/controllers/airPortController");

const admin = require("../middleware/admin");
const { authAdmin } = require("../middleware/authentication");

router.post("/add", authAdmin, admin, airports.addAirPort);
router.get("/findAll", airports.findAirPorts);
router.get("/findById/:id", airports.findAirPortsById);
router.delete("/delete/:id", authAdmin, admin, airports.deleteAirPort);
router.put("/update/:id", authAdmin, admin, airports.updateAirPortById);

module.exports = router;
