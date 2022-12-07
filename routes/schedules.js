const router = require("express").Router();

const schedules = require("../app/controllers/scheduleController");

const admin = require("../middleware/admin");
const { authAdmin } = require("../middleware/authentication");

router.post("/add", authAdmin, admin, schedules.addSchedule);
router.get("/findAll", schedules.findSchedules);
router.get("/findById/:id", schedules.findSchedulesById);
router.put("/update/:id", authAdmin, admin, schedules.updateSchedulesById);
router.delete("/delete/:id", authAdmin, admin, schedules.deleteSchedule);

module.exports = router;

