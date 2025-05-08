const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const contactsRouter = require('./routes/contacts');
const mongodb = require('./db/connect');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8080;

const corsOptions = {
    origin: '*',
    methods: 'GET, POST, PUT, DELETE',
    allowedHeaders: 'Content-Type'
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('API is running');
});

app.use('/contacts', contactsRouter);

mongodb.initDb((err) => {
    if (err) {
        console.error('Failed to connect to database', err);
    } else {
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    }
});