// tripRoutes.js
const express = require("express");
const router = express.Router();
const {
  searchDestinations,
  createItinerary,
  addDestinations,
} = require("../controllers/tripController");
const { authenticate } = require("../middleware/authMiddleware");

router.get("/destinations", searchDestinations);
router.post("/put", addDestinations);
router.post("/itinerary", authenticate, createItinerary);

module.exports = router;
