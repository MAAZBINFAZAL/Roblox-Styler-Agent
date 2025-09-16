require("dotenv").config();
const express = require("express");
const app = express();
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("RoboStyler backend is running 🚀");
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
