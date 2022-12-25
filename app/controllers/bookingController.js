const { Booking, Passenger, Seat, User, } = require("../models")
const { addPassenger, } = require("../controllers/passengerController")
const { addSeat, } = require("../controllers/seatController")
const { updatePassengerById, } = require("../controllers/passengerController")
const { updateSeatById, } = require("../controllers/seatController")
const { addHistory, updateHistoriById, } =  require("../controllers/historyController")

// const booking = require("../models/booking")

const addBooking = async (req, res) => {
  // let bookingId = 1;
  try {
    const { name, age, NIK, 
      phoneNumber, bookingId= 1, status= false,
      seatNumber, price, flightId, userId,} = req.body
    // console.log(req)
    const validationUserId = await User.findOne({
      where: {
        id: userId,
      },
    })
     
    if (!validationUserId) {
      return res.status(400).json({ status: "failed", message: "User ID Not Already Exits", })
    }

    const newPassenger = addPassenger(
      name,
      age,
      NIK,
      phoneNumber,
      bookingId
    )
    
    // console.log(bookingId)
    const newSeat = addSeat(
      seatNumber,
      bookingId,
      flightId
    )
  
    const newHistory = addHistory(
      userId,
      bookingId,
      flightId,
    )
    

    const newBooking = await Booking.create({
      newPassenger,
      newSeat,
      newHistory,
      userId,
      price,
      status,
    })

    const data = newPassenger
    data.then(function(result) {
      // console.log(result) // "Some User token"
      // console.log(result.id)
      var paId = result.id
      const booking_Id = newBooking.id
      // console.log(newPassenger.id)
      updatePassengerById(booking_Id, paId) 
    }
    )

    const dataSeat = newSeat
    dataSeat.then(function(result) {
    //  console.log(result) // "Some User token"
    //  console.log(result.id)
      var seatId = result.id
      const booking_Id = newBooking.id
      // console.log(newSeat.id)
      updateSeatById(booking_Id, seatId) 
    })

    const dataHistori = newHistory
    dataHistori.then(function(result) {
    //  console.log(result) // "Some User token"
    //  console.log(result.id)
      var historiId = result.id
      const booking_Id = newBooking.id
      // console.log(booking_Id)
      updateHistoriById(booking_Id, historiId) 
    })
    

    // console.log(newBooking.id)
    // bookingId = newBooking.id
    res.status(201).json({
      status: "success",
      message: "success create new booking",
      data: {
        newBooking,
      },
    }
    )
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
