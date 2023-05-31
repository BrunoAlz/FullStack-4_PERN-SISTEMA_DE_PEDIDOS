import { Request, Response } from "express";
import { CreateUserService } from "../../services/user/CreateUserService";

class CreateUserController {
  async handleCreation(req: Request, res: Response) {
    const { name, email, password } = req.body;

    const createUserService = new CreateUserService();

    const user = await createUserService.execute();

    return res.json({ ok: true, service_response: user });
  }
}

export { CreateUserController };
