const router = require("express").Router()
const destinations = require("../app/controllers/destinationController")
const admin = require("../middleware/admin")
const { authAdmin, } = require("../middleware/authentication")
const uploader = require("../middleware/uploader")

router.post("/add", authAdmin, admin, uploader.single("imageDestination"), destinations.addDestination)
router.get("/findAll",  destinations.findDestinations)
router.get("/findById/:id", destinations.findDestinationsById)
router.put("/update/:id", authAdmin, admin, uploader.single("imageDestination"), destinations.updateDestinationById)
router.delete("/delete/:id", authAdmin, admin, destinations.deleteDestination)

module.exports = router
