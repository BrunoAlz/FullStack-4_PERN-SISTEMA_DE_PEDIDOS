import { compare } from "bcryptjs";
import { responseMessages } from "../../constants/responseMessages";
import { LoginUserRequest } from "../../interfaces/UserInterfaces";
import { UserRepository } from "../../repository/UserRepository";
import { JWT } from "../../utils/GenerateJWT";

class AuthUserService {
  async login({ email, password }: LoginUserRequest) {
    const userRepository = new UserRepository();

    const user = await userRepository.getUserByEmail({ email });
    if (!user) {
      return responseMessages.credentialsError;
    }

    const matchPassword = await compare(password, user.password);
    if (!matchPassword) {
      return responseMessages.credentialsError;
    }

    const jwt = new JWT();
    const token = jwt.generateToken(user.id, user.email);

    return { token };
  }
}

export { AuthUserService };
