const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Vtuber API',
    description: 'API for managing Vtuber profiles and image galleries'
  },
  host: process.env.NODE_ENV === 'production' ? 'cse341-tpkb.onrender.com' : `localhost:${process.env.PORT || 8080}`,
  schemes: [process.env.NODE_ENV === 'production' ? 'https' : 'http'],
};

const outputFile = './swagger-output.json';
const endpointsFiles = ['./server.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);