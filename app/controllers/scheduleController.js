const { Schedule, } = require("../models")

const addSchedule = async (req, res) => {
  try {
    const { dateFlight, timeDepart, timeLand, currentPrice, } = req.body

    const newSchedule = await Schedule.create({
      dateFlight,
      timeDepart,
      timeLand,
      currentPrice,
    })

    res.status(201).json({
      status: "success",
      message: "success create new schedule",
      data: {
        newSchedule,
      },
    })
  } catch (error) {
    res.status(error.statusCode || 500).json({
      message: error.message,
    })
  }
}

async function findSchedules(req, res) {
  try {
    const dataSchedules = await Schedule.findAll()
    res.status(200).json({
      status: "success",
      meesage: "success get all schedule",
      data: dataSchedules,
    })
  } catch (error) {
    return res.status(500).send({ message: error.message, })
  }
}
async function findSchedulesById(req, res) {
  try {
    const dataScedules = await Schedule.findByPk(req.params.id)
    res.status(200).json({
      status: "success",
      meesage: "success get schedule by id",
      data: dataScedules,
    })
  } catch (error) {
    return res.status(500).send({ message: error.message, })
  }
}

async function deleteSchedule(req, res) {
  try {
    await Passenger.destroy({ where: { id: req.params.id, }, })
    res.status(200).json({
      status: "success",
      message: "Schedule has been deleted sucessfully",
    })
  } catch (error) {
    return res.status(500).send({ message: error.message, })
  }
}

async function updateSchedulesById(req, res) {
  try {
    const { dateFlight, timeDepart, timeLand, currentPrice, } = req.body

    await Schedule.update(
      {
        dateFlight,
        timeDepart,
        timeLand,
        currentPrice,
      },
      {
        where: { id: req.params.id, },
      }
    )
    res.status(200).json({
      status: "success",
      message: "Schedule has been update sucessfully",
    })
  } catch (error) {
    return res.status(500).send({ message: error.message, })
  }
}

module.exports = {
  addSchedule,
  findSchedules,
  findSchedulesById,
  deleteSchedule,
  updateSchedulesById,
}
