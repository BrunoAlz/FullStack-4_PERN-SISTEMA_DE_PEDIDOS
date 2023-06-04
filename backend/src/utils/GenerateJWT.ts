import { sign } from "jsonwebtoken";

class JWT {
  generateToken = (id: string, email: string) => {
    const token = sign(
      {
        email: email,
      },
      process.env.JWT_SECRET,
      {
        subject: id,
        expiresIn: "7d",
      }
    );

    return token;
  };
}

export { JWT };
