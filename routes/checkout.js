const router = require("express").Router()

const checkOut = require("../app/controllers/checkoutController")


router.post("/create", checkOut.checkoutSession)


module.exports = router
