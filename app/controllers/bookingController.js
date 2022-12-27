const { Booking, Passenger, Seat, User, } = require("../models")
const { addPassenger,updatePassengerById,} = require("../controllers/passengerController")
const { addSeat, updateSeatById, } = require("../controllers/seatController")
const { addHistory, updateHistoriById, } = require("../controllers/historyController")
const { addNotification, } = require("./notificationController")


const addBooking = async (req, res) => {
  try {
    // const { status= false, price , userId,} = req.body

    if (req.body.length === 1) {
      const validationUserId = await User.findOne({
        where: {
          id: req.body[0].userId,
        },
      })

      if (!validationUserId) {
        return res
          .status(400)
          .json({ status: "failed", message: "User ID Not Already Exits", })
      }

      const newPassenger = addPassenger(
        req.body[0].name,
        req.body[0].age,
        req.body[0].NIK,
        req.body[0].phoneNumber,
        bookingId = 1 // eslint-disable-line
      )

      // console.log(req.body[0].seatNumber);
      const newSeat = addSeat(
        req.body[0].seatNumber,
        bookingId = 1, // eslint-disable-line
        req.body[0].flightId
      )

      // console.log(req.body[0].userId);

      const newHistory = addHistory(
        req.body[0].userId,
        bookingId = 1, // eslint-disable-line
        req.body[0].flightId
      )

      const newBooking = await Booking.bulkCreate(req.body)

      const data = newPassenger
      data.then(function (result) {
        // console.log(result) // "Some User token"
        // console.log(result.id)
        var paId = result.id
        const booking_Id = newBooking[0].id
        updatePassengerById(booking_Id, paId)
      })

      const dataSeat = newSeat
      dataSeat.then(function (result) {
        //  console.log(result) // "Some User token"
        //  console.log(result.id)
        var seatId = result.id
        const booking_Id = newBooking[0].id
        // console.log(newSeat.id)
        updateSeatById(booking_Id, seatId)
      })

      const dataHistory = newHistory
      dataHistory.then(function (result) {
        //  console.log(result) // "Some User token"
        //  console.log(result.id)
        var historiId = result.id
        const booking_Id = newBooking[0].id
        // console.log(booking_Id)
        updateHistoriById(booking_Id, historiId)
      })

      const dataNotification = newHistory
      dataNotification.then(function (result) {
        // console.log(result) // "Some User token"
        // console.log(result.id)
        var historyId = result.id
        // console.log(newPassenger.id)
        // console.log(req.body[0].userId);
        addNotification(false, historyId, req.body[0].userId)
      })

      res.status(201).json({
        status: "success",
        message: "success create new booking",
        data: {
          newBooking,
        },
      })
    }

    if (req.body.length === 2) {
      const firstValidationUserId = await User.findOne({
        where: {
          id: req.body[0].userId,
        },
      })

      if (!firstValidationUserId) {
        return res
          .status(400)
          .json({ status: "failed", message: "User ID Not Already Exits", })
      }

      const firstPassenger = addPassenger(
        req.body[0].name,
        req.body[0].age,
        req.body[0].NIK,
        req.body[0].phoneNumber,
        bookingId = 1 // eslint-disable-line
      )

      const secondPassenger = addPassenger(
        req.body[1].name,
        req.body[1].age,
        req.body[1].NIK,
        req.body[1].phoneNumber,
        bookingId = 1 // eslint-disable-line
      )

      const firsSeat = addSeat(
        req.body[0].seatNumber,
        bookingId = 1, // eslint-disable-line
        req.body[0].flightId
      )

      const secondSeat = addSeat(
        req.body[1].seatNumber,
        bookingId = 1, // eslint-disable-line
        req.body[1].flightId
      )

      const firstHistory = addHistory(
        req.body[0].userId,
        bookingId = 1 , // eslint-disable-line
        req.body[0].flightId
      )

      const secondHistory = addHistory(
        req.body[1].userId,
        bookingId = 1 , // eslint-disable-line
        req.body[1].flightId
      )

      const newBooking = await Booking.bulkCreate(req.body)

      const dataFirstPassengers = firstPassenger
      dataFirstPassengers.then(function (result) {
        // console.log(result); // "Some User token"
        // console.log(result.id)
        var paId = result.id
        const booking_Id = newBooking[0].id
        updatePassengerById(booking_Id, paId)
      })

      const dataSecondPassengers = secondPassenger
      dataSecondPassengers.then(function (result) {
        // console.log(result); // "Some User token"
        // console.log(result.id)
        var paId = result.id
        const booking_Id = newBooking[1].id
        updatePassengerById(booking_Id, paId)
      })

      const dataFirstSeat = firsSeat
      dataFirstSeat.then(function (result) {
        //  console.log(result) // "Some User token"
        //  console.log(result.id)
        var seatId = result.id
        const booking_Id = newBooking[0].id
        // console.log(newSeat.id)
        updateSeatById(booking_Id, seatId)
      })

      const dataSecondSeat = secondSeat
      dataSecondSeat.then(function (result) {
        //  console.log(result) // "Some User token"
        //  console.log(result.id)
        var seatId = result.id
        const booking_Id = newBooking[1].id
        // console.log(newSeat.id)
        updateSeatById(booking_Id, seatId)
      })

      const dataFirstHistori = firstHistory
      dataFirstHistori.then(function (result) {
        //  console.log(result) // "Some User token"
        //  console.log(result.id)
        var historiId = result.id
        const booking_Id = newBooking[0].id
        // console.log(booking_Id)
        updateHistoriById(booking_Id, historiId)
      })

      const dataSecondHistori = secondHistory
      dataSecondHistori.then(function (result) {
        //  console.log(result) // "Some User token"
        //  console.log(result.id)
        var historiId = result.id
        const booking_Id = newBooking[1].id
        // console.log(booking_Id)
        updateHistoriById(booking_Id, historiId)
      })

      const dataFirstNotification = firstHistory
      dataFirstNotification.then(function (result) {
        // console.log(result) // "Some User token"
        // console.log(result.id)
        var historyId = result.id
        // console.log(newPassenger.id)
        // console.log(req.body[0].userId);
        addNotification(false, historyId, req.body[0].userId)
      })

      const dataSecondNotification = secondHistory
      dataSecondNotification.then(function (result) {
        // console.log(result) // "Some User token"
        // console.log(result.id)
        var historyId = result.id
        // console.log(newPassenger.id)
        // console.log(req.body[0].userId);
        addNotification(false, historyId, req.body[1].userId)
      })

      res.status(201).json({
        status: "success",
        message: "success create new booking",
        data: {
          newBooking,
        },
      })
    }
    //  console.log(req.body[0].name)
    // console.log(req.body.length)
  } catch (error) {
    res.status(error.statusCode || 500).json({
      message: error.message,
    })
  }
}

async function findBooking(req, res) {
  try {
    const dataBooking = await Booking.findAll(
      {
        include: [
          {
            model: Passenger,
          },
          {
            model: Seat,
          },
        ],
      }
    )
    res.status(200).json({
      status: "success",
      meesage: "success get all Bookings",
      data: dataBooking,
    })
  } catch (error) {
    return res.status(500).send({ message: error.message, })
  }
}

async function findBookingsById(req, res) {
  try {
    const dataBooking = await Booking.findByPk(req.params.id, {
      include: [
        {
          model: Passenger,
        },
        {
          model: Seat,
        },
      ],
    })
    res.status(200).json({
      status: "success",
      meesage: "success get booking by id",
      data: dataBooking,
    })
  } catch (error) {
    return res.status(500).send({ message: error.message, })
  }
}

async function deleteBooking(req, res) {
  try {
    await Booking.destroy({ where: { id: req.params.id, }, })
    res.status(200).json({
      status: "success",
      message: "Booking has been deleted sucessfully",
    })
  } catch (error) {
    return res.status(500).send({ message: error.message, })
  }
}

async function updateBooking(req, res) {
  try {
    const { status, id, } = req.body
    await Booking.update(
      {
        status,
      },
      {
        where: { id: id, },
      }
    )
    res.status(200).json({
      status: "success",
      message: "Your status has been update sucessfully",
    })
  } catch (error) {
    return res.status(500).send({ message: error.message, })
  }
}


module.exports = {
  addBooking,
  findBooking,
  findBookingsById,
  deleteBooking,
  updateBooking,
}
