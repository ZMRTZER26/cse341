const routes = require("express").Router();
const bookRouter = require("./books");
const highlightsNotesRouter = require("./highlightsNotes");
const readingProgressRouter = require("./readingProgress");
const userRouter = require("./users");
const swaggerRouter = require("./swagger");
const authRouter = require("./auth");
const fakeAuthRouter = require("./fakeAuth");

routes.get("/", (req, res) => {
  res.send("Welcome to the Buddy Reading Tracker API!");
});

routes.use("/auth", authRouter);

routes.use("/api-docs", swaggerRouter);

routes.use("/books", bookRouter);

routes.use("/users", userRouter);

routes.use("/highlightnotes", highlightsNotesRouter);

routes.use("/readingprogress", readingProgressRouter);

routes.use("/fakeAuth", fakeAuthRouter);

module.exports = routes;
