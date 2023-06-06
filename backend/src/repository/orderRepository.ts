import { PrismaClient } from "@prisma/client";
import prismaClient from "../prisma";

class OrdersRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = prismaClient;
  }

  async createOrder({ table, draft, name }) {
    const order = await this.prisma.order.create({
      data: {
        table: table,
        draft: draft,
        name: name,
      },
    });

    return order;
  }
}

export { OrdersRepository };
