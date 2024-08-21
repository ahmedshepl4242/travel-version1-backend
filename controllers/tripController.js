// tripController.js
const Trip = require("../models/Trip");
const Destinations = require("../models/Dest");

const mongoose = require("mongoose");
async function searchDestinations(req, res) {
  try {
    console.log(
      "       i am her e ----------------------------------------------------------------"
    );
    /* For simplicity, let's assume we return a
         list of destinations from the database
         */
    const db = mongoose.connection.db;
    // how to get the destination document
    const collection = db.collection("destinations");
    const destinations = await Destinations.find().distinct("name");
  

    console.log("Destinations:", destinations);

    res.status(200).json({ destinations });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

// }

async function createItinerary(req, res) {
  try {
    /* Assuming request body contains necessary
         details for creating an itinerary
         */
    const { userId, destination, startDate, endDate } = req.body;

    // Create a new itinerary document in the database
    const itinerary = await Trip.create({
      userId,
      destination,
      startDate,
      endDate,
      createdAt: new Date(),
      // Record the time when the itinerary is created
    });

    res.status(201).json({ itinerary });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}
async function addDestinations(req, res) {
  try {
    console.log("Adding destinations");
    let destinations = [
      "New York",
      "New York",
      "New York",
      "New York",
      "Los Angeles",
      "Chicago",
      "Chicago",
      "Chicago",
    ];
    for (const dest of destinations) {
      await Destinations.create({ name: dest });
    }
    console.log("Destinations added successfully");
    res.status(201).json({ destinations });
  } catch (error) {
    console.error("Error adding destinations:", error);
    res.status(400).json({ errer: error.message });
  }
}

module.exports = { searchDestinations, createItinerary, addDestinations };
