import { Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";
import { verify } from "jsonwebtoken";

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

const isAuth = (req: Request, res: Response, next: NextFunction) => {
  console.log("CHAMOU O MIDDLE");
  
  next();
};

export { validate, isAuth };
