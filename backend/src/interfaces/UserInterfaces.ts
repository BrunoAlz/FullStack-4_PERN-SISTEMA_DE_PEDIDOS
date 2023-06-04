interface CreateUserRequest {
  name: String;
  email: String;
  password: String;
}

interface LoginUserRequest {
  email: String;
  password: string;
}


export { CreateUserRequest, LoginUserRequest };
