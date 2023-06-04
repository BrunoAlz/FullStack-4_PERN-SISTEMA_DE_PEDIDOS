import { responseMessages } from "../../constants/responseMessages";
import { LoginUserRequest } from "../../interfaces/UserInterfaces";
import { UserRepository } from "../../repository/UserRepository";

class AuthUserService {
  async login({ email, password }: LoginUserRequest) {
    const userRepository = new UserRepository();
    const emailExists = await userRepository.getUserByEmail({ email });

    if (!emailExists) {
      return responseMessages.credentialsError;
    }

    return emailExists;
  }
}

export { AuthUserService };
