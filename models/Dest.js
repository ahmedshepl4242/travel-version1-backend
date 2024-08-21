const mongoose = require("mongoose");

const Destinations = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    // required: true
  },
  image: {
    type: String,
    // required: true
  },
  country: {
    type: String,
    // required: true
  },
  priceRange: {
    type: String,
    // required: true
  },
  // Add more fields as needed
});

module.exports = mongoose.model("Destinations", Destinations);
