import { CreateCategory } from "../interfaces/CategoryInterfaces";
import prismaClient from "../prisma";

class CategoryRepository {
  async createCategory({ category }: CreateCategory) {
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

  async checkIfCategoryExists({ category }: CreateCategory) {
    const categoryExists = await prismaClient.category.findFirst({
      where: {
        name: category,
      },
    });
    return !!categoryExists;
  }
}

export { CategoryRepository };
