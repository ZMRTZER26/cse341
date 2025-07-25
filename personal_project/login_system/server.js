const express = require("express");
const cors = require("cors");
const session = require("express-session");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const swaggerUi = require("swagger-ui-express");
const swaggerFile = require("./swagger/swagger-output.json");
const routes = require("./routes/index");
const connectDb = require("./db/connect");

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8080;

app.set("trust proxy", 1);

app.use(
  cors({
    origin: ["http://localhost:8080", "https://cse341-tpkb.onrender.com"],
    credentials: true,
  })
);

app.use(express.json());

app.use(
  session({
    secret: process.env.SESSION_SECRET || "secret",
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: process.env.NODE_ENV === "production",
      httpOnly: true,
      sameSite: "lax",
    },
  })
);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use("/", routes);

app.get("/", (req, res) => {
  res.send("API is running");
});

const errorHandler = require("./middleware/errorHandler");

app.use(errorHandler);

connectDb().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
