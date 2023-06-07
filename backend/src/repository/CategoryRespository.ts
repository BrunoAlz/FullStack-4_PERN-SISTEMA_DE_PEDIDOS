import { PrismaClient } from "@prisma/client";
import { CreateCategory } from "../interfaces/CategoryInterfaces";
import prismaClient from "../prisma";

class CategoryRepository {
  prisma: PrismaClient;

  constructor() {
    this.prisma = prismaClient;
  }

  async createCategory({ category }: CreateCategory) {
    const user = await this.prisma.category.create({
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
    const getAll = await this.prisma.category.findMany();
    return getAll;
  }

  async checkIfCategoryExists({ category }: CreateCategory) {
    const categoryExists = await this.prisma.category.findFirst({
      where: {
        name: category,
      },
    });
    return !!categoryExists;
  }
}

export { CategoryRepository };
