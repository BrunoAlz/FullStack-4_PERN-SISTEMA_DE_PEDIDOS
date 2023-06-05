import { CreateProductRequest } from "../interfaces/ProductInterfaces";
import prismaClient from "../prisma";

class ProductRepository {
  async createProduct({
    name,
    price,
    banner,
    description,
    category_id,
  }: CreateProductRequest) {
    const product = await prismaClient.product.create({
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
}

export { ProductRepository };
