const router = require("express").Router()

const whislist = require("../app/controllers/whislistController")

router.post("/add", whislist.addWhislist)
router.get("/whislistUser", whislist.getWhislistUser)
router.get("/dataWhislist", whislist.getWhislist)
router.post("/search", whislist.Search)


module.exports = router