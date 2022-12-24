const router = require("express").Router()
const { getHistory, } = require("../app/controllers/historyController")

router.get("/histories", getHistory)

module.exports = router