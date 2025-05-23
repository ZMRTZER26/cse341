const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('./swagger-output.json');
const express = require('express');
const cors = require('cors');
const vtubersRouter = require('./routes/vtubers');
const imagesRouter = require('./routes/images')
const mongodb = require('./db/connect');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors(corsOptions));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use('/vtubers', vtubersRouter);
app.use('/images', imagesRouter);

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