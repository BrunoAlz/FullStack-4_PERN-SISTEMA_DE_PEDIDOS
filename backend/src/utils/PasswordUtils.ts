import { hash, compare } from "bcryptjs";

class PasswordHandle {
  passwordEncrypt = (pass: string) => {
    const hashPassword = hash(pass, 10);
    return hashPassword;
  };

  passwordCompare = (requestPassword: string, userPassword: string) => {
    const matchPassword = compare(requestPassword, userPassword);
    return matchPassword;
  };
}

export { PasswordHandle };
