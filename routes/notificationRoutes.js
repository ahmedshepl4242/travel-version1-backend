// notificationRoutes.js
const express = require("express");
const router = express.Router();
const { sendNotification } = require("../controllers/notificationController");
const { authenticate } = require("../middleware/authMiddleware");

router.post("/send-notification", authenticate, sendNotification);

module.exports = router;
