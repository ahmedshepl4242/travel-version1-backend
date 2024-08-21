// Booking.js
const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  tripId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Trip",
    required: true,
  },
  type: {
    type: String,
    required: true,
  }, // Flight, Hotel, Car, etc.
  // Add more fields as needed
});

const Booking = mongoose.model("Booking", bookingSchema);

module.exports = Booking;
