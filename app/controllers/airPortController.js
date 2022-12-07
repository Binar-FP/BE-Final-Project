const { AirPort, Flight } = require("../models");

const addAirPort = async (req, res) => {
  try {
    const { name, code, location } = req.body;

    const nameAirport = await AirPort.findOne({
      where: {
        name: name,
      },
    });

    if (nameAirport) {
      return res
        .status(400)
        .json({
          status: "failed",
          message: "Airport is already exist, please create another one",
        });
    }

    const newAirPort = await AirPort.create({
      name,
      code,
      location,
    });

    res.status(201).json({
      status: "success",
      message: "success create new airport",
      data: {
        newAirPort,
      },
    });
  } catch (error) {
    res.status(error.statusCode || 500).json({
      message: error.message,
    });
  }
};

async function findAirPorts(req, res) {
  try {
    const dataAirPorts = await AirPort.findAll(
      {
        include: {
          model: Flight,
        }
      }
    );
    res.status(200).json({
      status: "success",
      meesage: "success get all Airports",
      data: dataAirPorts,
    });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
}

async function findAirPortsById(req, res) {
  try {
    const dataAirPort = await AirPort.findByPk(req.params.id, {
      include: {
        model: Flight,
      }
    });
    res.status(200).json({
      status: "success",
      meesage: "success get Aiport by id",
      data: dataAirPort,
    });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
}

async function deleteAirPort(req, res) {
  try {
    await AirPort.destroy({ where: { id: req.params.id } });
    res.status(200).json({
      status: "success",
      message: "Airport has been deleted sucessfully",
    });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
}

async function updateAirPortById(req, res) {
  try {
    const { name, code, location } = req.body;

    await AirPort.update(
      {
        name,
        code,
        location,
      },
      {
        where: { id: req.params.id },
      }
    );
    res.status(200).json({
      status: "success",
      message: "Airport has been update sucessfully",
    });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
}

module.exports = {
  addAirPort,
  findAirPorts,
  findAirPortsById,
  deleteAirPort,
  updateAirPortById,
};
