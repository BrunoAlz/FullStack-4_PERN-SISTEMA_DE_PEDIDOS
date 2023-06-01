import { Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";

const validate = (req: Request, res: Response, next: NextFunction) => {
  //  recupera o erros que vierem na requisição
  const errors = validationResult(req);

  if (errors.isEmpty()) {
    return next();
  }

  // Cria um array vazio para guardar os erros extraidos da requisição
  const extractedErros: any[] = [];

  // Se forem recuperados erros da requisição faz o push para o Array
  errors.array().map((err) => extractedErros.push(err.msg));

  return res.status(401).json({
    error: extractedErros,
  });
};

export { validate };
