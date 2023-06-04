import { LoginUserRequest } from "../../interfaces/UserInterfaces";
import { UserRepository } from "../../repository/UserRepository";

class AuthUserService {
  async login({ email, password }: LoginUserRequest) {
    const userRepository = new UserRepository();
    const emailExists = await userRepository.getUserByEmail({ email });

    return { emailExists };
  }
}

export { AuthUserService };
