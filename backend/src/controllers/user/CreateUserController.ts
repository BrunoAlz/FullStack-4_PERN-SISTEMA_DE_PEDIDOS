import { Request, Response } from "express";

class CreateUserController {
  async handleCreation(req: Request, res: Response) {
    const { name, email, password } = req.body;
    
    return res.json({ ok: true, data: req.body });
  }
}

export { CreateUserController };
