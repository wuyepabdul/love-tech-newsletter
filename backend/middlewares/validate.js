import { check, validationResult } from "express-validator";

export const subscribeValidator = [
  check("name").not().isEmpty().trim().withMessage("Please provide your name"),
  check("email")
    .isEmail()
    .normalizeEmail()
    .withMessage("Please provide a valid Email"),
];

export const validatorResult = (req, res, next) => {
  const result = validationResult(req);
  const hasErrors = !result.isEmpty();
  if (hasErrors) {
    const errorMessage = result.array()[0].msg;
    return res.status(400).json({
      errorMessage,
    });
  }
  next();
};
