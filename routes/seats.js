const router = require("express").Router()

const seats = require("../app/controllers/seatController")

// const admin = require("../middleware/admin")
// const { authAdmin, } = require("../middleware/authentication")

router.post("/add", seats.addSeat)
router.get("/findAll", seats.findSeats)
router.get("/findById/:id", seats.findSeatsById)
router.delete("/delete/:id", seats.deleteSeat)
router.put("/update/:id", seats.updateSeatById)

module.exports = router
