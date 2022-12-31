const router = require("express").Router()

const whislist = require("../app/controllers/whislistController")

router.post("/add", whislist.addWhislist)
router.get("/whislistUser", whislist.getWhislistUser)
router.get("/dataWhislist", whislist.getWhislist)
router.post("/searchFlight", whislist.SearchFlight)
router.post("/searchWhislist", whislist.SearchWhislist)
router.delete("/delete/:id", whislist.deleteWhislist)


module.exports = router