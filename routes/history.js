const router = require("express").Router()

const histories = require("../app/controllers/historyController") 
const admin = require("../middleware/admin")
const { authAdmin, } = require("../middleware/authentication")

router.post("/histories", histories.getHistory)
router.put("/update/:id", histories.updateHistoriById)
router.get("/histories/all", authAdmin, admin, histories.getAllHistory )
router.delete("/histories/delete/:id", histories.deleteHistory)


module.exports = router