import { CreateUserRequest } from "../../interfaces/UserInterfaces";
import { UserRepository } from "../../repository/UserRepository";
import { responseMessages } from "../../constants/responseMessages";

class UserService {
  async create({ name, email, password }: CreateUserRequest) {
    const userRepository = new UserRepository();
    const checkEmail = await userRepository.getUserByEmail({ email });

    if (checkEmail) {
      return responseMessages.emailInUse;
    }

    const user = await userRepository.createUser({ name, email, password });
    return user;
  }
}

export { UserService };
