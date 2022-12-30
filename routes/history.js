const router = require("express").Router()
const { getHistory, getAllHistory} = require("../app/controllers/historyController")

router.get("/histories", getHistory)
router.get("/histories/all", getAllHistory )

module.exports = router