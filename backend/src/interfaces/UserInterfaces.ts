interface CreateUserRequest {
  name: String;
  email: String;
  password: String;
}

interface LoginUserRequest {
  email: String;
  password: String;
}

export { CreateUserRequest, LoginUserRequest };
