import { PrismaClient } from "@prisma/client";
import prismaClient from "../prisma";

class OrderItemRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = prismaClient;
  }

  async addItem({ amount, order_id, product_id }) {
    const order = await this.prisma.orderItem.create({
      data: {
        amount: amount,
        order_id: order_id,
        product_id: product_id,
      },
    });

    return order;
  }
}

export { OrderItemRepository };
