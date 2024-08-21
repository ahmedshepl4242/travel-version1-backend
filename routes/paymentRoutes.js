// paymentRoutes.js
const express = require("express");
const router = express.Router();
const { processPayment } = require("../controllers/paymentController");
const { authenticate } = require("../middleware/authMiddleware");

router.post("/process-payment", authenticate, processPayment);

module.exports = router;
