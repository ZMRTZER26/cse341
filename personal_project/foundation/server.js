const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('./swagger/swagger-output.json');
const express = require('express');
const cors = require('cors');
const vtubersRouter = require('./routes/vtubers');
const imagesRouter = require('./routes/images');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8080;
const MONGODB_URI = process.env.MONGODB_URI;

const whitelist = [
  'https://cse341-tpkb.onrender.com',
  'http://localhost:8080',
];

const corsOptions = {
  origin: (origin, callback) => {
    if (!origin || whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('CORS not allowed'));
    }
  }
};

app.use(cors(corsOptions));
app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use('/vtubers', vtubersRouter);
app.use('/images', imagesRouter);

app.get('/', (req, res) => {
  res.send('API is running');
});

const db = require('./models');

db.mongoose.connect(db.url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB via Mongoose');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => {
    console.error('Connection error', err);
    process.exit();
  });
