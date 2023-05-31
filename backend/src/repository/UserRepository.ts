import prismaClient from "../prisma";

class UserRepository {
  async createUser({ name, email, password }: any) {
    const user = await prismaClient.user.create({
      data: {
        name: name,
        email: email,
        password: password,
      },
    });

    return user
  }
}

export { UserRepository };
