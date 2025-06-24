const express = require("express");
const cors = require("cors");
const session = require("express-session");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const swaggerUi = require("swagger-ui-express");
const swaggerFile = require("./swagger/swagger-output.json");
const routes = require("./routes/index");
const connectDb = require("./db/connect");

app.use("/", routes);
