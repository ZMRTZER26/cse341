const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Contacts API',
    description: 'API for managing contacts'
  },
  host: 'https://cse341-tpkb.onrender.com',
  schemes: ['https']
};

const outputFile = './swagger-output.json';
const endpointsFiles = ['./app.js', './routes/contacts.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);
