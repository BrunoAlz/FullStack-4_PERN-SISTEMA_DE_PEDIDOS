import { Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";

const validate = (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req);

  if (errors.isEmpty()) {
    return next();
  }

  const extractedErros: Error[] = [];

  errors.array().map((err) => extractedErros.push(err.msg));

  return res.status(401).json({
    error: extractedErros,
  });
};

export { validate };
