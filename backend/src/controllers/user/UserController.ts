import { Request, Response } from "express";
import { UserService } from "../../services/user/UserService";
import bcrypt from "bcrypt";

class UserController {
  async create(req: Request, res: Response) {
    const { name, email, password } = req.body;
    const userService = new UserService();
    const hashPassword = await bcrypt.hash(password, 10);

    const user = await userService.create({
      name,
      email,
      password: hashPassword,
    });

    return res.json(user);
  }
}

export { UserController };
