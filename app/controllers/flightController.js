const { Flight } = require("../models");

const addFLight = async (req, res) => {
  try {
    const {
      airPortId,
      destinationId,
      flightNumber,
      airLine,
      from,
      to,
      depatureDate,
      depatureTime,
      arrivalDate,
      arrivalTime,
      capasity,
      economyClassPrice,
      businessClassPrice,
      firstClassPrice,
    } = req.body;

    const numberFlight = await Flight.findOne({
      where: {
        flightNumber: flightNumber,
      },
    });

    if (numberFlight) {
      return res
        .status(400)
        .json({
          status: "failed",
          message: "Flight Number is already exist, please create another one",
        });
    }

    const newFlight = await Flight.create({
      airPortId,
      destinationId,
      flightNumber,
      airLine,
      from,
      to,
      depatureDate,
      depatureTime,
      arrivalDate,
      arrivalTime,
      capasity,
      economyClassPrice,
      businessClassPrice,
      firstClassPrice,
    });

    res.status(201).json({
      status: "success",
      message: "success create new flight",
      data: {
        newFlight,
      },
    });
  } catch (error) {
    res.status(error.statusCode || 500).json({
      message: error.message,
    });
  }
};

async function findFlights(req, res) {
  try {
    const dataFlights = await Flight.findAll();
    res.status(200).json({
      status: "success",
      meesage: "success get all flights",
      data: dataFlights,
    });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
}

async function findFlightsById(req, res) {
  try {
    const dataFlights = await Flight.findByPk(req.params.id);
    res.status(200).json({
      status: "success",
      meesage: "success get flight by id",
      data: dataFlights,
    });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
}

async function updateFlightsById(req, res) {
  try {
    const {
      airPortId,
      destinationId,
      flightNumber,
      airLine,
      from,
      to,
      depatureDate,
      depatureTime,
      arrivalDate,
      arrivalTime,
      capasity,
      economyClassPrice,
      businessClassPrice,
      firstClassPrice,
    } = req.body;

    await Flight.update(
      {
        airPortId,
        destinationId,
        flightNumber,
        airLine,
        from,
        to,
        depatureDate,
        depatureTime,
        arrivalDate,
        arrivalTime,
        capasity,
        economyClassPrice,
        businessClassPrice,
        firstClassPrice,
      },
      {
        where: { id: req.params.id },
      }
    );
    res.status(200).json({
      status: "success",
      message: "Flight has been update sucessfully",
    });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
}

async function deleteFlight(req, res) {
  try {
    await Flight.destroy({ where: { id: req.params.id } });
    res.status(200).json({
      status: "success",
      message: "Flight has been deleted sucessfully",
    });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
}

module.exports = {
  addFLight,
  findFlights,
  findFlightsById,
  updateFlightsById,
  deleteFlight,
};
