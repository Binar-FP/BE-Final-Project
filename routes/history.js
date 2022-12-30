const router = require("express").Router()

const histories = require("../app/controllers/historyController") 

router.post("/histories", histories.getHistory)
router.put("/update/:id", histories.updateHistoriById)
router.get("/histories/all", histories.getAllHistory )


module.exports = router