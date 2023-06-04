import { LoginUserRequest } from "../../interfaces/UserInterfaces";
import prismaClient from "../../prisma";

class AuthUserService {
  async login({ email, password }: LoginUserRequest) {
    

    return { email };
  }
}

export { AuthUserService };
