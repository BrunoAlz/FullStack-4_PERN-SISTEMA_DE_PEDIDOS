import { PrismaClient } from "@prisma/client";
import { CreateProductRequest } from "../interfaces/ProductInterfaces";
import prismaClient from "../prisma";

class ProductRepository {
  prisma: PrismaClient;

  constructor() {
    this.prisma = prismaClient;
  }

  async createProduct({
    name,
    price,
    banner,
    description,
    category_id,
  }: CreateProductRequest) {
    const product = await this.prisma.product.create({
      data: {
        name: name,
        price: price,
        banner: banner,
        description: description,
        category_id: category_id,
      },
      select: {
        id: true,
        name: true,
        price: true,
        banner: true,
        description: true,
        category_id: true,
      },
    });

    return product;
  }

  async getProductsByCategory(id: string) {
    const products = await this.prisma.product.findMany({
      where: {
        category_id: id,
      },
    });

    return products;
  }

  async checkIfProductExists(name: string) {
    const product = await this.prisma.product.findFirst({
      where: {
        name: name,
      },
      select: {
        id: true,
      },
    });

    return !!product;
  }
}

export { ProductRepository };
