const { Booking, Passenger,} = require("../models")
const { addPassenger, } = require("../controllers/passengerController")
const { updatePassengerById, } = require("../controllers/passengerController")
// const booking = require("../models/booking")

const addBooking = async (req, res) => {
  // let bookingId = 1;
  try {
    const { name, age, NIK, phoneNumber, bookingId= 1,} = req.body
    // console.log(req)
    const newPassenger = addPassenger(
      name,
      age,
      NIK,
      phoneNumber,
      bookingId
    )
    

    const newBooking = await Booking.create({
      newPassenger,
    })

    const data = newPassenger
    data.then(function(result) {
      console.log(result) // "Some User token"
      console.log(result.id)
      var paId = result.id
      const booking_Id = newBooking.id
      // console.log(newPassenger.id)
      updatePassengerById(booking_Id, paId) 
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
        include: {
          model: Passenger,
        },
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


module.exports = {
  addBooking,
  findBooking,
}
