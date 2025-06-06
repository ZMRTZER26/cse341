const { body, validationResult } = require('express-validator');

const contactValidationRules = [
  body('firstName').notEmpty().withMessage('First name is required'),
  body('lastName').notEmpty().withMessage('Last name is required'),
  body('email').isEmail().withMessage('Valid email is required'),
  body('favoriteColor').notEmpty().withMessage('Favorite color is required'),
  body('birthday').isDate().withMessage('Valid birthday date is required')
];

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const messages = errors.array().map(err => err.msg);
    return res.status(400).json({ errors: messages });
  }
  next();
};

module.exports = { contactValidationRules, validate };
