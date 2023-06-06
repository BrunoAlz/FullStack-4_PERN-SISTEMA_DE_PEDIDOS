import { PrismaClient } from "@prisma/client";
import prismaClient from "../prisma";

class OrdersRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = prismaClient;
  }

  async createOrder({ table, name }) {
    const order = await this.prisma.order.create({
      data: {
        table: table,
        name: name,
      },
    });

    return order;
  }
}

export { OrdersRepository };
