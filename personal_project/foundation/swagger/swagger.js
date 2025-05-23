const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Vtuber Wiki API',
    description: 'API for managing Vtuber info and images'
  },
  host: 'cse341-tpkb.onrender.com',
  schemes: ['https'],
};

const outputFile = './swagger/swagger-output.json';
const endpointsFiles = ['./server.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);
