const router = require("express").Router()

const boardingPass = require("../app/controllers/boardingPassController")


router.post("/add", boardingPass.createBoardingPass)


module.exports = router
