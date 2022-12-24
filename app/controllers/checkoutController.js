require("dotenv").config()
const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY)

const checkoutSession = async (req, res) => {
  stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "idr",
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        res.status(500).json(stripeErr)
      } else {
        res.status(200).json(stripeRes)
      }
    }
  )
}


module.exports = {
  checkoutSession,
}
