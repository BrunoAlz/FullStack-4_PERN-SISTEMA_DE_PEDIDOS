import { PrismaClient } from "@prisma/client";
import prismaClient from "../prisma";
import { responseMessages } from "../constants/responseMessages";

class OrderItemRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = prismaClient;
  }

  async addItem({ amount, order_id, product_id }) {
    const item = await this.prisma.orderItem.create({
      data: {
        amount: amount,
        order_id: order_id,
        product_id: product_id,
      },
    });

    return item;
  }

  async removeItem(id: string) {
    try {
      const item = await this.prisma.orderItem.delete({
        where: { id: id },
      });
      return item;
    } catch (error) {
      return responseMessages.notFound;
    }
  }

  async getItensByOrderId(id: string) {
    const itens = await this.prisma.orderItem.findMany({
      where: { order_id: id },
      select: {
        amount: true,
        Product: {
          select: {
            name: true,
            price: true,
            banner: true,
            description: true,
          },
        },
      },
    });
    return itens;
  }
}

export { OrderItemRepository };
