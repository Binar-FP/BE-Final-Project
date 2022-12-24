const router = require("express").Router()

const bookings = require("../app/controllers/bookingController")

// const admin = require("../middleware/admin")
// const { authAdmin, } = require("../middleware/authentication")

router.post("/add", bookings.addBooking)
router.get("/findAll", bookings.findBooking)
router.get("/findById/:id", bookings.findBookingsById)
router.delete("/delete/:id", bookings.deleteBooking)


module.exports = router
