const { body, validationResult } = require("express-validator");

const validateVtuber = [
  body("name").notEmpty(),
  body("debut").notEmpty(),
  body("agency").notEmpty(),
  body("bio").notEmpty(),
  body("language").notEmpty(),
  body("status").notEmpty(),
  body("channel").notEmpty(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

const validateImage = [
  body("url").isURL(),
  body("artist").notEmpty(),
  body("vtuberId").notEmpty(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

module.exports = { validateVtuber, validateImage };
