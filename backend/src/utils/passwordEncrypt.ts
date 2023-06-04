import { hash } from "bcryptjs";

const passwordEncrypt = (pass: string) => {
  const hashPassword = hash(pass, 10);
  return hashPassword;
};

export default passwordEncrypt;
