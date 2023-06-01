import { CreateUserRequest } from "../../interfaces/UserInterfaces";
import { UserRepository } from "../../repository/UserRepository";

class CreateUserService {
  async execute({ name, email, password }: CreateUserRequest) {
    const userRepository = new UserRepository();
    const checkEmail = await userRepository.getUserByEmail({ email });
    
    if (checkEmail) {
      throw new Error("Já existe um usuário com este Email.");
    }

    const user = await userRepository.createUser({ name, email, password });
    return user;
  }
}

export { CreateUserService };
