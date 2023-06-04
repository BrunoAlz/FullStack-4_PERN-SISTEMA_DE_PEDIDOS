import { compare } from "bcryptjs";
import { responseMessages } from "../../constants/responseMessages";
import { LoginUserRequest } from "../../interfaces/UserInterfaces";
import { UserRepository } from "../../repository/UserRepository";
import { JWT } from "../../utils/GenerateJWT";

class AuthUserService {
  userRepository: UserRepository;

  constructor() {
    this.userRepository = new UserRepository();
  }

  login = async ({ email, password }: LoginUserRequest) => {
    const user = await this.userRepository.getUserByEmail({ email });
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
  };
}

export { AuthUserService };
