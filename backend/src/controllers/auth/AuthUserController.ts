import { Request, Response } from "express";
import { AuthUserService } from "../../services/auth/AuthUserService";

class AuthUserController {
  async login(req: Request, res: Response) {
    const { email, password } = req.body;
    const authUserService = new AuthUserService();

    const auth = await authUserService.login({ email, password });

    return res.json(auth);
  }
}

export { AuthUserController };
