import { Request, Response } from "express";
import { UserService } from "../../services/user/UserService";
import { hash } from "bcryptjs";

class UserController {
  userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

  create = async (req: Request, res: Response) => {
    const { name, email, password } = req.body;
    const passwordHash = await hash(password, 10);

    const user = await this.userService.create({
      name,
      email,
      password: passwordHash,
    });

    return res.json(user);
  };

  details = async (req: Request, res: Response) => {
    const user = await this.userService.details(req.userId);
    return res.json(user);
  };
}

export { UserController };
