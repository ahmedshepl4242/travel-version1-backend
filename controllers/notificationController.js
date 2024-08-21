// notificationController.js
const Notification = require("../models/Notification");

async function sendNotification(req, res) {
  try {
    /* Assuming request body contains 
        necessary details for sending notification
        */
    const { userId, message } = req.body;

    // Create a new notification document in the database
    const notification = await Notification.create({
      userId,
      message,
      sentAt: new Date(),
      // Record the time when the notification is sent
    });

    res.status(201).json({ notification });
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
}

module.exports = { sendNotification };
