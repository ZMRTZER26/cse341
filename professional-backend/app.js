const express = require('express');
const app = express();
const professionalRoutes = require('./routes/professional');

app.use(express.json());

// Routes
app.use('/api', professionalRoutes);  // All routes in professional.js will start with /api

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
