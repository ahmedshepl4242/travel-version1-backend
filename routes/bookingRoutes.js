// bookingRoutes.js
const express = require("express");
const router = express.Router();
const { bookFlight, bookHotel } = require("../controllers/bookingController");
const { authenticate } = require("../middleware/authMiddleware");

router.post("/book-flight", authenticate, bookFlight);
router.post("/book-hotel", authenticate, bookHotel);

module.exports = router;
