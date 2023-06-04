import prismaClient from "../prisma";

class CategoryRepository {
  async createCategory({ category }: any) {
    const user = await prismaClient.category.create({
      data: {
        name: category,
      },
      select: {
        id: true,
        name: true,
      },
    });

    return user;
  }

  async getAllCategories() {
    const getAll = await prismaClient.category.findMany();
    return getAll;
  }
}

export { CategoryRepository };
