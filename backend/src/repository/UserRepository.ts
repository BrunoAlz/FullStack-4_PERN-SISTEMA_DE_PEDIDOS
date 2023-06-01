import prismaClient from "../prisma";

class UserRepository {
  async createUser({ name, email, password }: any) {
    const user = await prismaClient.user.create({
      data: {
        name: name,
        email: email,
        password: password,
      },
      select: {
        id: true,
        name: true,
        email: true,
      },
    });

    return user;
  }

  async getUserByEmail({ email }: any) {
    const user = await prismaClient.user.findFirst({
      where: {
        email: email,
      },
      select: {
        email: true,
      },
    });
    return !!user;
  }
}

export { UserRepository };
