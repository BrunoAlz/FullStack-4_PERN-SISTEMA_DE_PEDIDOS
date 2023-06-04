import { Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";
import { verify } from "jsonwebtoken";
import { AuthPayload } from "../interfaces/UserInterfaces";
import { responseMessages } from "../constants/responseMessages";

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
  const authToken = req.headers.authorization;

  if (!authToken) {
    return res.status(401).json(responseMessages.nonExistentToken);
  }

  const [, token] = authToken.split(" ");

  try {
    const { sub: userId } = verify(
      token,
      process.env.JWT_SECRET
    ) as AuthPayload;

    // Injetando o usuário do Token na Requisição
    req.userId = userId;

  } catch (error) {
    return res.status(401).json(responseMessages.invalidToken);
  }

  next();
};

export { validate, isAuth };
