// paymentController.js
const Payment = require("../models/Payment");

async function processPayment(req, res) {
  try {
    /*
         Assuming request body contains 
         necessary details for processing payment
         */
    const { userId, amount, paymentDetails } = req.body;

    // Create a new payment document in the database
    const payment = await Payment.create({
      userId,
      amount,
      paymentDetails, // Store payment details in the database
      status: "Success", // Assuming payment is successful
      createdAt: new Date(),
      // Record the time when the payment is processed
    });
    res.status(201).json({ payment });
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
}

module.exports = { processPayment };
