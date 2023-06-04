import { CreateUserRequest } from "../../interfaces/UserInterfaces";
import { UserRepository } from "../../repository/UserRepository";
import { responseMessages } from "../../constants/responseMessages";

class UserService {
  userRepository: UserRepository;
  constructor() {
    this.userRepository = new UserRepository();
  }

  create = async ({ name, email, password }: CreateUserRequest) => {
    const emailExists = await this.userRepository.verifyEmail({ email });

    if (emailExists) {
      return responseMessages.emailInUse;
    }

    const user = await this.userRepository.createUser({
      name,
      email,
      password,
    });
    return user;
  };
}

export { UserService };
