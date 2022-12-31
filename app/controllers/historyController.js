const { History, Booking, User, Flight, Passenger, Seat, Notification, } = require("../models")

async function getAllHistory(req, res) {
  try {
    const dataAirPorts = await History.findAll({
      include: [
        {
          model: Booking,
          include: [Passenger, Seat,],
        },
        {
          model: User,
        },
        {
          model: Flight,
        },
        {
          model: Notification,
        },
      ],
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
    const orderList = await History.findAll({
      where: {
        userId: id,
      },
      order: [["id", "DESC",],],
      include: [
        {
          model: Booking,
          include: [Passenger, Seat,],
        },
        {
          model: Flight,
        },
        {
          model: Notification,
        },
      ],
    })
    res.status(200).json({
      orderList,
    })
  } catch (error) {
    res.status(error.statusCode || 500).json({
      message: error.message,
    })
  }
}
const addHistory = async (userId, bookingId, flightId) => {
  try {
    const date = Date.now()
    const history = await History.create({
      userId,
      bookingId,
      flightId,
      historyDate: date,
    })
    return history
  } catch (error) {
    return error
  }
}

async function updateHistoriById(bookingId, historiId) {
  try {
    // const { name, age, NIK, phoneNumber, } = req.body
    // console.log(bookingId)
    await History.update(
      {
        bookingId: bookingId,
      },
      {
        where: { id: historiId,},
      }
    )
    // // res.status(200).json({
    // //   status: "success",
    // //   message: "passenger has been update sucessfully",
    // })
  } catch (error) {
    return error
  }
}

module.exports = {
  getHistory,
  addHistory,
  getAllHistory,
  updateHistoriById,
}

