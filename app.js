// app.js
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/authRoutes");
const tripRoutes = require("./routes/tripRoutes");
const bookingRoutes = require("./routes/bookingRoutes");
const reviewRoutes = require("./routes/reviewRoutes");
const notificationRoutes = require("./routes/notificationRoutes");
const socialRoutes = require("./routes/socialRoutes");
const paymentRoutes = require("./routes/paymentRoutes");
const { errorHandler } = require("./middleware/errorMiddleware");

// Initialize Express app
const app = express();

// Middleware
app.use(bodyParser.json());
const dbURL = "mongodb://127.0.0.1:27017/travelSport";
// Connect to MongoDB
mongoose
  .connect(dbURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("MongoDB connection error:", error));

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/trip", tripRoutes);
app.use("/api/booking", bookingRoutes);
app.use("/api/review", reviewRoutes);
app.use("/api/notification", notificationRoutes);
app.use("/api/social", socialRoutes);
app.use("/api/payment", paymentRoutes);

// Error handling middleware
app.use(errorHandler);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
