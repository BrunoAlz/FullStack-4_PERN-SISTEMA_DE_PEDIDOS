import { Request, Response } from "express";

class CreateUserController {
  async handleCreation(req: Request, res: Response) {
    console.log(req.body);
    return res.json({ ok: true, data: req.body });
  }
}

export { CreateUserController };
