const { History, Booking, User, } = require("../models")

async function getAllHistory(req, res) {
  try {
    const dataAirPorts = await History.findAll({
      include: [
        {
          model: Booking,
        },
        {
          model: User,
        },
      ]
    })
    res.status(200).json({
      status: "success",
      meesage: "success get all Airports",
      data: dataAirPorts,
    })
  } catch (error) {
    return res.status(500).send({ message: error.message, })
  }
}

const getHistory = async (req, res) => {
  const { id, } = req.body
  try {
    const orderList = await History.findAll(
      {
        include: [
          {
            model: Booking,
          },
        ],
      },
      {
        where: { id: id,},
      }
    )
    res.status(200).json({
      orderList,
    })
  } catch (error) {
    res.status(error.statusCode || 500).json({
      message: error.message,
    })
  }
}
const addHistory = async (userId, bookingId) => {
  try {
    const date = Date.now()
    const history = await History.create({
      userId,
      bookingId,
      historyDate: date,
    })
    return history
  } catch (error) {
    return error
  }
}

module.exports = {
  getHistory,
  addHistory,
  getAllHistory,
}