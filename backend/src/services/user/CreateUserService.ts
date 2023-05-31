import { CreateUserRequest } from "../../interfaces/UserInterfaces";


class CreateUserService {
  async execute({ name, email, password }: CreateUserRequest) {
    return { name, email, password };
  }
}

export { CreateUserService };
