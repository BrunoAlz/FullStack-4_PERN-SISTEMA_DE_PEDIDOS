import { PrismaClient } from "@prisma/client";
import prismaClient from "../prisma";
import { responseMessages } from "../constants/responseMessages";
import { OrderItemRepository } from "./OrderItemRepository";

class OrdersRepository {
  private prisma: PrismaClient;
  orderItemRepository: OrderItemRepository;

  constructor() {
    this.prisma = prismaClient;
    this.orderItemRepository = new OrderItemRepository();
  }

  async createOrder({ table, name }) {
    const order = await this.prisma.order.create({
      data: { table: table, name: name },
    });

    return order;
  }

  async listAll() {
    const orders = await this.prisma.order.findMany({
      where: { draft: false, closed: false },
      orderBy: {
        started_at: "desc",
      },
    });
    return orders;
  }

  async deleteOrder(id: string) {
    const order = await this.prisma.order.delete({
      where: { id: id },
    });

    return order;
  }

  async getDraftStatus(id: string) {
    const status = await this.prisma.order.findFirst({
      where: { id: id },
      select: { draft: true },
    });

    return status.draft;
  }

  async updateDraft(id: string) {
    try {
      const status = await this.getDraftStatus(id);

      const item = await this.prisma.order.update({
        where: { id: id },
        data: { draft: !status },
      });
      return item;
    } catch (error) {
      return responseMessages.notFound;
    }
  }

  async getOrderDetails(id: string) {
    const order = await this.prisma.order.findFirst({ where: { id: id } });

    const itens = await this.orderItemRepository.getItensByOrderId(id);

    return { order, itens };
  }

  async closeOrder(id: string) {
    const order = await this.prisma.order.findUnique({
      where: { id: id },
    });

    if (!order) {
      throw new Error("Pedido não encontrado.");
    }

    const startedAt = new Date(order.started_at);
    const finishedAt = new Date();

    const timeDiffMillis = finishedAt.getTime() - startedAt.getTime();
    const hours = Math.floor(timeDiffMillis / (1000 * 60 * 60));
    const minutes = Math.floor(
      (timeDiffMillis % (1000 * 60 * 60)) / (1000 * 60)
    );
    const totalTime = `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}`;

    const updatedOrder = await this.prisma.order.update({
      where: { id: id },
      data: {
        closed: true,
        finished_at: finishedAt.toISOString(),
        total_time: totalTime,
      },
    });

    return updatedOrder;
  }
}

export { OrdersRepository };
