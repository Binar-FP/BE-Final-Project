const { whislist, Flight, WhislistDestination,} = require("../models")

const addWhislist = async (req, res) => {
  try {
    const { userId, destinationId,} = req.body

    const namewhislist = await whislist.findOne({
      where: {
        destinationId: destinationId,
        userId: userId,
      },
    })

    if (namewhislist) {
      return res
        .status(400)
        .json({
          status: "failed",
          message: "destination is already exist",
        })
    }

    const newWhislist = await whislist.create({
      userId,
      destinationId,
    })

    res.status(201).json({
      status: "success",
      message: "success create new whislist",
      data: {
        newWhislist,
      },
    })
  } catch (error) {
    res.status(error.statusCode || 500).json({
      message: error.message,
    })
  }
}

const getWhislistUser = async (req, res) => {
  const { userId, } = req.body
  try {
    const dataWhislist = await whislist.findAll({
      where: {
        userId: userId,
      },
      order: [["id", "DESC",],],
      include: [
        {
          model: WhislistDestination,
        },
      ],
    })
    res.status(200).json({
      dataWhislist,
    })
  } catch (error) {
    res.status(error.statusCode || 500).json({
      message: error.message,
    })
  }
}


const getWhislist = async (req, res) => {
  const { id, } = req.body
  try {
    const dataWhislist = await whislist.findAll({
      where: {
        id: id,
      },
      order: [["id", "DESC",],],
      include: [
        {
          model: WhislistDestination,
          include: [Flight,],
        },
      ],
    })
    res.status(200).json({
      dataWhislist,
    })
  } catch (error) {
    res.status(error.statusCode || 500).json({
      message: error.message,
    })
  }
}

async function SearchFlight(req, res) {
  try {
 
    const {
      depatureDate,
      destinationId,
    } = req.body
    
    const responseData = await Flight.findAll(
      {
        where: {
          depatureDate: depatureDate,
          destinationId: destinationId,
        },
      }
    )

    res.status(200).json({
      status: "success",
      data: responseData,
    })
    
  } catch (error) {
    return res.status(500).send({ message: error.message, })
  }
}

async function SearchWhislist(req, res) {
  try {
 
    const {
      userId,
      destinationId,
    } = req.body
    
    const responseData = await whislist.findAll(
      {
        where: {
          userId: userId,
          destinationId: destinationId,
        },
        include: [
          {
            model: WhislistDestination,
          },
        ],
      }
    )

    res.status(200).json({
      status: "success",
      data: responseData,
    })
    
  } catch (error) {
    return res.status(500).send({ message: error.message, })
  }
}

async function deleteWhislist(req, res) {
  try {
    await whislist.destroy({ where: { id: req.params.id, }, })
    res.status(200).json({
      status: "success",
      message: "whislist has been deleted sucessfully",
    })
  } catch (error) {
    return res.status(500).send({ message: error.message, })
  }
}

module.exports = {
  addWhislist,
  getWhislistUser,
  getWhislist,
  SearchFlight,
  SearchWhislist,
  deleteWhislist,
}