// helper.js
// This file contains helper functions that can be used across the application

function formatDate(date) {
  // Implement date formatting logic here
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return date.toLocaleDateString("en-US", options);
}

function calculateTotalCost(items) {
  // Implement logic to calculate total cost based on items
  return items.reduce((total, item) => total + item.cost, 0);
}

module.exports = { formatDate, calculateTotalCost };
