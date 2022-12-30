const PDFDocument = require("pdfkit")
const {generateHeader, generatePassagerInformation, generateFlightInformation, } = require("../../lib/layoutPdfkit")

const createBoardingPass = async (req, res) => {
  try {
    const {name, from, to, NIK, typeOfClass, 
      flightNumber, depatureDate, depatureTime,seatNumber, } = req.body
    const doc = new PDFDocument({size: "A5", layout: "landscape",})
    
    generateHeader(doc)
    generatePassagerInformation(doc, name, from, to, NIK)
    generateFlightInformation(doc, typeOfClass, 
      flightNumber, depatureDate, depatureTime, seatNumber)

    doc.pipe(res)
    doc.end()
  } catch (error) {
    return res.status(500).send({ message: error.message, })
  }
}

module.exports = {
  createBoardingPass,
}