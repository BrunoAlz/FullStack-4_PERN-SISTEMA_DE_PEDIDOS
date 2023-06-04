import { Request, Response } from "express";
import { AuthUserService } from "../../services/auth/AuthUserService";

class AuthUserController {
  authUserService: AuthUserService;
  constructor() {
    this.authUserService = new AuthUserService();
  }

  login = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    const auth = await this.authUserService.login({ email, password });

    return res.json(auth);
  };
}

export { AuthUserController };
