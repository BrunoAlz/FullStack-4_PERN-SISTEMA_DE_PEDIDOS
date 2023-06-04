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
        id: true,
        email: true,
        password: true,
      },
    });
    return user;
  }

  async getUserById({ id }: any) {
    const user = await prismaClient.user.findUnique({
      where: {
        id: id,
      },
      select: {
        password: false,
        id: true,
        name: true,
        email: true,
        created_at: true,
        updated_at: true,
      },
    });
    return user;
  }

  async verifyEmail({ email }: any) {
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
