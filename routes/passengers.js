const router = require("express").Router()

const passengers = require("../app/controllers/passengerController")

router.post("/add", passengers.addPassenger)
router.get("/findAll", passengers.findPassengers)
router.get("/findById/:id", passengers.findPassengersById)
router.delete("/delete/:id", passengers.deletePasenger)
router.put("/update/:id", passengers.updatePassengerById)


module.exports = router
