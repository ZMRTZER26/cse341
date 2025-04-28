const express = require('express');
const cors = require('cors');
const professionalRoutes = require('./routes/professional');

const app = express();
const PORT = 8080;

// Middleware
app.use(cors()); // Allow requests from your frontend
app.use(express.json()); // Parse incoming JSON

// Routes
app.use('/', professionalRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
