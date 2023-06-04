interface CreateUserRequest {
  name: String;
  email: String;
  password: String;
}

interface LoginUserRequest {
  email: String;
  password: string;
}

interface AuthPayload {
  sub: string;
}

export { CreateUserRequest, LoginUserRequest, AuthPayload };
