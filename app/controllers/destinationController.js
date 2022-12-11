const { WhislistDestination, Flight, } = require("../models")
const imagekit = require("../../lib/imageKit")

const addDestination = async (req, res) => {
  try {
    const { userId, nameDestination, } = req.body

    // const nameWhislistDestination = await WhislistDestination.findOne({
    //   where: {
    //     nameDestination: nameDestination,
    //   },
    // });

    // if (nameWhislistDestination) {
    //   return res.status(400).json({
    //     status: "failed",
    //     message: "Destination is already exist, please create another one",
    //   });
    // }

    // const file = req.file;

    // const validFormat =
    //   file.mimetype == "image/png" ||
    //   file.mimetype == "image/jpg" ||
    //   file.mimetype == "image/jpeg" ||
    //   file.mimetype == "image/gif";
    // if (!validFormat) {
    //   return res.status(400).json({
    //     status: "failed",
    //     message: "Wrong Image Format",
    //   });
    // }

    // const split = file.originalname.split(".");
    // const ext = split[split.length - 1];

    // const img = await imagekit.upload({
    //   file: file.buffer,
    //   fileName: `IMG-${Date.now()}.${ext}`,
    // });

    const newDestination = await WhislistDestination.create({
      userId,
      nameDestination,
    })

    res.status(201).json({
      status: "success",
      message: "success create new whislist destination",
      data: {
        newDestination,
      },
    })
  } catch (error) {
    res.status(error.statusCode || 500).json({
      message: error.message,
    })
  }
}

async function findDestinations(req, res) {
  try {
    const dataDestinations = await WhislistDestination.findAll({
      include: [
        {
          model: Flight,
        },
      ],
    })
    res.status(200).json({
      status: "success",
      meesage: "success get all whislist destination",
      data: dataDestinations,
    })
  } catch (error) {
    return res.status(500).send({ message: error.message, })
  }
}

async function findDestinationsById(req, res) {
  try {
    const dataDestinations = await WhislistDestination.findByPk(req.params.id, {
      include: [
        {
          model: Flight,
        },
      ],
    })
    res.status(200).json({
      status: "success",
      meesage: "success get whislist destination by id",
      data: dataDestinations,
    })
  } catch (error) {
    return res.status(500).send({ message: error.message, })
  }
}

async function updateDestinationById(req, res) {
  try {
    const { userId, nameDestination, } = req.body

    const file = req.file

    const validFormat =
      file.mimetype == "image/png" ||
      file.mimetype == "image/jpg" ||
      file.mimetype == "image/jpeg" ||
      file.mimetype == "image/gif"
    if (!validFormat) {
      return res.status(400).json({
        status: "failed",
        message: "Wrong Image Format",
      })
    }

    const split = file.originalname.split(".")
    const ext = split[split.length - 1]

    const img = await imagekit.upload({
      file: file.buffer,
      fileName: `IMG-${Date.now()}.${ext}`,
    })

    await WhislistDestination.update(
      {
        userId,
        nameDestination,
        imageDestination: img.url,
      },
      {
        where: { id: req.params.id, },
      }
    )
    res.status(200).json({
      status: "success",
      message: "whislist destination has been update sucessfully",
    })
  } catch (error) {
    return res.status(500).send({ message: error.message, })
  }
}

async function deleteDestination(req, res) {
  try {
    await WhislistDestination.destroy({ where: { id: req.params.id, },})
    res.status(200).json({
      status: "success",
      message: "whislist destination has been deleted sucessfully",
    })
  } catch (error) {
    return res.status(500).send({ message: error.message, })
  }
}

module.exports = {
  addDestination,
  findDestinations,
  findDestinationsById,
  updateDestinationById,
  deleteDestination,
}
