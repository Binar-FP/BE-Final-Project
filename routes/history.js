const router = require("express").Router()

const histories = require("../app/controllers/historyController") 

router.post("/add", histories.addHistory)
router.get("/histories", histories.getHistory)
router.put("//update/:id", histories.updateHistoriById)

module.exports = router