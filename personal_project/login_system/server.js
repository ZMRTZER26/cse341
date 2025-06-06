const express = require("express");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const swaggerFile = require("./swagger/swagger-output.json");
const routes = require("./routes/index");
const connectDb = require("./db/connect");
require("dotenv").config();
const session = require("express-session");
const passport = require("passport");
require("./config/passport");

const app = express();
const PORT = process.env.PORT || 8080;

const corsOptions = {
  origin: "*",
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
  })
);

app.use(passport.initialize());
app.use(passport.session());

const authRoutes = require("./routes/authRoutes");
app.use("/auth", authRoutes);

app.get("/dashboard", (req, res) => {
  if (req.isAuthenticated()) {
    res.send(`Welcome ${req.user.displayName}`);
  } else {
    res.redirect("/auth/google");
  }
});

app.get("/login-failure", (req, res) => {
  res.send("Failed to login.");
});

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
