const { Passenger, } = require("../models")

const addPassenger = async (name, age, NIK, phoneNumber, bookingId) => {
  try {
    // const { name, age, NIK, phoneNumber, } = req.body
    console.log(name)
    const newPassenger = await Passenger.create({
      name,
      age,
      NIK,
      phoneNumber,
      bookingId
    })

    return newPassenger
    // res.status(201).json({
    //   status: "success",
    //   message: "success create new passenger",
    //   data: {
    //     newPassenger,
    //   },
    // })
  } catch (error) {
    return error
  }
}
async function findPassengers(req, res) {
  try {
    const dataPassengers = await Passenger.findAll()
    res.status(200).json({
      status: "success",
      meesage: "success get all passengers",
      data: dataPassengers,
    })
  } catch (error) {
    return res.status(500).send({ message: error.message, })
  }
}
async function findPassengersById(req, res) {
  try {
    const dataPassengers = await Passenger.findByPk(req.params.id)
    res.status(200).json({
      status: "success",
      meesage: "success get passenger by id",
      data: dataPassengers,
    })
  } catch (error) {
    return res.status(500).send({ message: error.message, })
  }
}

async function deletePasenger(req, res) {
  try {
    await Passenger.destroy({ where: { id: req.params.id, }, })
    res.status(200).json({
      status: "success",
      message: "Passenger has been deleted sucessfully",
    })
  } catch (error) {
    return res.status(500).send({ message: error.message, })
  }
}

async function updatePassengerById(bookingId, paId) {
  try {
    // const { name, age, NIK, phoneNumber, } = req.body
    console.log(bookingId)
    await Passenger.update(
      {
        bookingId: bookingId
      },
      {
        where: { id: paId, },
      }
    )
    res.status(200).json({
      status: "success",
      message: "passenger has been update sucessfully",
    })
  } catch (error) {
    return error
  }
}

module.exports = {
  addPassenger,
  findPassengers,
  findPassengersById,
  deletePasenger,
  updatePassengerById,
}
