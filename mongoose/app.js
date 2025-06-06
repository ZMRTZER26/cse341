const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('./swagger-output.json');

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const contactsRouter = require('./routes/contacts');
const connectDb = require('./db/connect');
require('dotenv').config();



const app = express();
const PORT = process.env.PORT || 8080;

const corsOptions = {
    origin: 'https://cse341-contacts-frontend.netlify.app',
    methods: 'GET, POST, PUT, DELETE, OPTIONS',
    allowedHeaders: 'Content-Type'
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.get('/', (req, res) => {
    res.send('API is running');
});

app.use('/contacts', contactsRouter);

connectDb().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});

const errorHandler = require('./middleware/errorHandler');

// All other app.use(...) and app.listen(...) above this
app.use(errorHandler);
