const { Passenger, } = require("../models")

const addPassenger = async (req, res) => {
  try {
    const { name, age, NIK, phoneNumber, } = req.body

    const newPassenger = await Passenger.create({
      name,
      age,
      NIK,
      phoneNumber,
    })

    res.status(201).json({
      status: "success",
      message: "success create new passenger",
      data: {
        newPassenger,
      },
    })
  } catch (error) {
    res.status(error.statusCode || 500).json({
      message: error.message,
    })
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

async function updatePassengerById(req, res) {
  try {
    const { name, age, NIK, phoneNumber, } = req.body

    await Passenger.update(
      {
        name,
        age,
        NIK,
        phoneNumber,
      },
      {
        where: { id: req.params.id, },
      }
    )
    res.status(200).json({
      status: "success",
      message: "passenger has been update sucessfully",
    })
  } catch (error) {
    return res.status(500).send({ message: error.message, })
  }
}

module.exports = {
  addPassenger,
  findPassengers,
  findPassengersById,
  deletePasenger,
  updatePassengerById,
}
