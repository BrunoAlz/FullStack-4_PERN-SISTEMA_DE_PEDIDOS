import { CreateUserRequest } from "../../interfaces/UserInterfaces";
import { UserRepository } from "../../repository/UserRepository";


class CreateUserService {
  async execute({ name, email, password }: CreateUserRequest) {    
    const userRepository = new UserRepository();
    return userRepository.createUser({ name, email, password });    
  }
}

export { CreateUserService };
