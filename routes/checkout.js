const router = require("express").Router()

const checkOut = require("../app/controllers/checkoutController")


router.post("/checkout", checkOut.checkoutSession)

module.exports = router
