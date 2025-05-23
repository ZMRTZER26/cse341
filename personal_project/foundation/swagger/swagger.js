const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Vtuber API',
    description: 'API for managing Vtuber profiles and image galleries'
  },
  host: isLocal ? `localhost:${process.env.PORT || 8080}` : 'cse341-tpkb.onrender.com',
  schemes: [isLocal ? 'http' : 'https'],
};

const outputFile = './swagger-output.json';
const endpointsFiles = ['./server.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);