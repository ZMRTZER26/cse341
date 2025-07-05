const swaggerAutogen = require("swagger-autogen")();

//Dynamically choose host
const isRender = process.env.RENDER === "true";
const host = isRender ? "cse341-tpkb.onrender.com" : "localhost:3000";

const doc = {
  info: {
    title: "Buddy Reading Tracker API",
    description: "API for managing books, users, progress, and notes",
  },
  host: host,
  schemes: [isRender ? "https" : "http"],
  securityDefinitions: {
    bearerAuth: {
      type: "apiKey",
      name: "Authorization",
      in: "header",
      description: "Enter JWT as: Bearer <token>",
    },
  },
  security: [{ bearerAuth: [] }],
};

const outputFile = "./swagger/swagger-output.json";
const endpointsFiles = [
  "./server.js",
  "./routes/books.js",
  "./routes/users.js",
  "./routes/readingProgress.js",
  "./routes/highlightsNotes.js",
];

swaggerAutogen(outputFile, endpointsFiles, doc);
