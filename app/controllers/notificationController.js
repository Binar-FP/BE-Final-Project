const { Notification, } = require("../models")

const addNotification = async (status, historyId, userId) => {
  try {

    const newNotification = await Notification.create({
      status,
      historyId,
      userId,
    })

    return newNotification
  } catch (error) {
    return error
  }
}



async function updateNotification(req, res) {
  try {
    const { status, historyId, } = req.body
    await Notification.update(
      {
        status,
      },
      {
        where: { historyId: historyId, },
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

async function updateAllNotification(req, res) {
  try {
    const { status, userId,} = req.body
    await Notification.update(
      {
        status,
      },
      {
        where: { status: false, userId: userId,},
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
  addNotification,
  updateNotification,
  updateAllNotification,
}