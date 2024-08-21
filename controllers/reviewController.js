// reviewController.js
const Review = require("../models/Review");

async function submitReview(req, res) {
  try {
    /* Assuming request body contains necessary
     details for submitting a review
     */
    const { userId, destination, rating, comment } = req.body;

    // Create a new review document in the database
    const review = await Review.create({
      userId,
      destination,
      rating,
      comment,
      createdAt: new Date(),
      // Record the time when the review is submitted
    });

    res.status(201).json({ review });
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
}

module.exports = { submitReview };
