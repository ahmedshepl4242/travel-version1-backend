// socialRoutes.js
const express = require("express");
const router = express.Router();
const { shareTrip } = require("../controllers/socialController");
const { authenticate } = require("../middleware/authMiddleware");

router.post("/share-trip", authenticate, shareTrip);

module.exports = router;
