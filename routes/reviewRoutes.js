// reviewRoutes.js
const express = require("express");
const router = express.Router();
const { submitReview } = require("../controllers/reviewController");
const { authenticate } = require("../middleware/authMiddleware");

router.post("/submit-review", authenticate, submitReview);

module.exports = router;
