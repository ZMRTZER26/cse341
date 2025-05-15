const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Contacts API',
    description: 'API for managing contacts'
  },
  host: 'https://cse341-tpkb.onrender.com/', // later change this to your Render URL
  schemes: ['https']
};

const outputFile = './swagger-output.json';
const endpointsFiles = ['./app.js']; // or wherever your routes are defined

swaggerAutogen(outputFile, endpointsFiles, doc);
