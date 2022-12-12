const router = require("express").Router()

const flights = require("../app/controllers/flightController")

const admin = require("../middleware/admin")
const { authAdmin, } = require("../middleware/authentication")

router.post("/add", authAdmin, admin, flights.addFLight)
router.get("/findAll", flights.findFlights)
router.get("/findById/:id", flights.findFlightsById)
router.put("/update/:id", authAdmin, admin, flights.updateFlightsById)
router.delete("/delete/:id", authAdmin, admin, flights.deleteFlight)

module.exports = router
