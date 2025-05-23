const express = require('express');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('./swagger/swagger-output.json');
const routes = require('./routes/index');
const mongodb = require('./db/connect');
require('dotenv').config();


const app = express();
const PORT = process.env.PORT || 8080;

const corsOptions = {
  origin: '*',
};

app.use(cors(corsOptions));
app.use(express.json());

const path = require('path');

// Serve swagger JSON
app.get('/swagger-output.json', (req, res) => {
  res.sendFile(path.join(__dirname, 'swagger', 'swagger-output.json'));
});

// Serve Swagger UI and point to the above swagger JSON URL
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(null, {
  swaggerUrl: '/swagger-output.json'
}));


app.get('/', (req, res) => {
  res.send('API is running');
});

mongodb.initDb((err) => {
  if (err) {
    console.error('Failed to connect to database', err);
  } else {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  }
});
