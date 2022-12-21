require("dotenv").config()
const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY)


const checkoutSession = async (req, res) => {
  try {
    const {typeOfClass, totalPrice, quantity=1, } = req.body
  
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card",],
      mode: "payment",
      line_items: [{
        price_data: {
          currency: "idr",
          product_data: {
            name: typeOfClass,
          },
          unit_amount: totalPrice,
        },
        quantity: quantity,
      },],
      success_url: "http://flywithme-api.me/Project_Progate_1/",
      // cancel_url: "http://flywithme-api.me/Project_Progate_1/",
    })
    res.status(200).json({
      link: session.url,
    })
  } catch (e) {
    res.status(500).json({ error: e.message ,})
  }
}

module.exports = {
  checkoutSession,
}
