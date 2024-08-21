// bookingController.js
const Booking = require("../models/Booking");

async function bookFlight(req, res) {
  try {
    /* Assuming request body contains
         necessary details for flight booking
         */
    const { userId, tripId, flightDetails } = req.body;

    // Create a new flight booking document in the database
    const booking = await Booking.create({
      userId,
      tripId,
      type: "Flight",
      details: flightDetails,
      // Store flight details in the database
    });

    res.status(201).json({ booking });
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
}

async function bookHotel(req, res) {
  try {
    /* Assuming request body contains
        necessary details for hotel booking
        */
    const { userId, tripId, hotelDetails } = req.body;

    // Create a new hotel booking document in the database
    const booking = await Booking.create({
      userId,
      tripId,
      type: "Hotel",
      details: hotelDetails,
      // Store hotel details in the database
    });

    res.status(201).json({ booking });
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
}

module.exports = { bookFlight, bookHotel };
