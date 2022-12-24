const { History, Booking, } = require("../models")

const getHistory = async (req, res) => {
  const { id, } = req.body
  try {
    const orderList = await History.findAll(
      {
        where: {
          userId : id,
        },
        include: [
          {
            model: Booking,
          },
        ],
      },
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

async function updateHistoriById(bookingId, historiId) {
  try {
    // const { name, age, NIK, phoneNumber, } = req.body
    // console.log(bookingId)
    await History.update(
      {
        bookingId: bookingId,
      },
      {
        where: { id: historiId, },
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
  updateHistoriById,
}