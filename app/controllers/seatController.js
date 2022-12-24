const { Seat, } = require("../models")

const addSeat = async (seatNumber, bookingId, flightId) => {
  try {
    // const { seatNumber, bookingId, } = req.body

    // const nameSeat = await Seat.findOne({
    //   where: {
    //     seatNumber: seatNumber,
    //   },
    // })

    // if (nameSeat) {
    //   return res
    //     .status(400)
    //     .json({
    //       status: "failed",
    //       message: "Seat is already exist, please choose another one",
    //     })
    // }

    // console.log(seatNumber)
    const newSeat = await Seat.create({
      seatNumber,
      bookingId,
      flightId,
    })
    return newSeat
    // res.status(201).json({
    //   status: "success",
    //   message: "success create new seat",
    //   data: {
    //     newSeat,
    //   },
    // })
  } catch (error) {
    return error
  }
}

async function findSeats(req, res) {
  try {
    const dataSeats = await Seat.findAll(
      // {
      //   include: {
      //     model: Flight,
      //   },
      // }
    )
    res.status(200).json({
      status: "success",
      meesage: "success get all Seats",
      data: dataSeats,
    })
  } catch (error) {
    return res.status(500).send({ message: error.message, })
  }
}

async function findSeatsById(req, res) {
  try {
    const dataSeat = await Seat.findByPk(req.params.id, {
      // include: {
      //   model: Flight,
      // },
    })
    res.status(200).json({
      status: "success",
      meesage: "success get Aiport by id",
      data: dataSeat,
    })
  } catch (error) {
    return res.status(500).send({ message: error.message, })
  }
}

async function deleteSeat(req, res) {
  try {
    await Seat.destroy({ where: { id: req.params.id, }, })
    res.status(200).json({
      status: "success",
      message: "Seat has been deleted sucessfully",
    })
  } catch (error) {
    return res.status(500).send({ message: error.message, })
  }
}

async function updateSeatById(bookingId, seatId) {
  try {
    // const { seatNumber, bookingId, } = req.body
    // console.log(seatId)
    // console.log(bookingId)
    await Seat.update(
      {
        bookingId: bookingId,
      },
      {
        where: { id: seatId, },
      }
    )
    // res.status(200).json({
    //   status: "success",
    //   message: "Seat has been update sucessfully",
    // })
  } catch (error) {
    return error
  }
}

module.exports = {
  addSeat,
  findSeats,
  findSeatsById,
  deleteSeat,
  updateSeatById,
}
