const router = require("express").Router()

const notifications = require("../app/controllers/notificationController") 

router.post("/add", notifications.addNotification)
router.put("/update", notifications.updateNotification)
router.put("/updateAll", notifications.updateAllNotification)

module.exports = router