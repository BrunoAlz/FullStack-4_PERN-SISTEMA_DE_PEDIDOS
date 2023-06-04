import { Request, Response } from "express";
import { UserService } from "../../services/user/UserService";
import { hash } from "bcryptjs";

class UserController {
  async create(req: Request, res: Response) {
    const { name, email, password } = req.body;
    const userService = new UserService();

    const passwordHash = await hash(password, 10);

    const user = await userService.create({
      name,
      email,
      password: passwordHash,
    });

    return res.json(user);
  }
}

export { UserController };
