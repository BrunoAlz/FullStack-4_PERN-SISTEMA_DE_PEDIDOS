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

  async listAll() {
    const orders = await this.prisma.order.findMany();
    return orders;
  }

  async deleteOrder(id: string) {
    const order = await this.prisma.order.delete({
      where: {
        id: id,
      },
    });

    return order;
  }
}

export { OrdersRepository };
