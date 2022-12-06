const router = require("express").Router();

const passengers = require("../app/controllers/passengerController");

const admin = require("../middleware/admin");
const { authAdmin } = require("../middleware/authentication");

router.post("/add", authAdmin, admin, passengers.addPassenger);
router.get("/findAll", passengers.findPassengers);
router.get("/findById/:id", passengers.findPassengersById);
router.delete("/delete/:id", authAdmin, admin, passengers.deletePasenger);
router.put("/update/:id", authAdmin, admin, passengers.updatePassengerById);


module.exports = router;
