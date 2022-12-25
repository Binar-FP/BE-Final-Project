function generateHeader(doc) {
  doc.fillColor("#000")
    .font("Courier-Bold")
    .fontSize(20)
    .text("Flywithme", 40, 40)
    .fontSize(10)
    .text("FSW-4", 200, 40, {align: "right",})
    .text("Team-C16", 200, 55, { align: "right",})
    .moveDown()
}

function generatePassagerInformation(doc, name, from, to, NIK) {
    
  doc.text("NAME:", 40, 100)
    .text(`${name}`, 40, 120)
    .text("FROM:", 40, 140)
    .text(`${from}`, 40, 160)
    .text("TO:", 40, 180)
    .text(`${to}`, 40, 200)
    .text("NIK:", 40, 220)
    .text(`${NIK}`, 40, 240)
    .moveDown()
}

function generateFlightInformation(doc, typeOfClass, 
  flightNumber, depatureDate, depatureTime, seatNumber) {
    
  doc.fontSize(15)
    .text(`${typeOfClass}`, 250, 100)
    .fontSize(10)
    .text("FLIGHT No:", 250, 120)
    .text(`${flightNumber}`, 250, 140)
    .text("DATE:", 250, 160)
    .text(`${depatureDate}`, 250, 180)
    .text("BOARDING TIME:", 250, 200)
    .text(`${depatureTime}`, 250, 220)
    .text("SEAT:", 400, 100)
    .text(`${seatNumber}`, 400, 120)
    .font(__dirname + "/LibreBarcode39-Regular.ttf").fontSize(28).text(`${flightNumber + seatNumber}`)
    .moveDown()
}

module.exports = {
  generateHeader,
  generatePassagerInformation,
  generateFlightInformation,
}