const express = require('express');
const app = express();
const nameRoute = require('./routes/nameRoute');

// Use the name route
app.use('/', nameRoute);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
