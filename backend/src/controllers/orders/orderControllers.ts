import { Request, Response } from "express";
import { OrderService } from "../../services/orders/OrderService";

class OrderController {
  orderService: OrderService;

  constructor() {
    this.orderService = new OrderService();
  }

  create = async (req: Request, res: Response) => {
    const { table, name } = req.body;

    const order = await this.orderService.create({ table, name });

    return res.json(order);
  };

  list = async (req: Request, res: Response) => {
    const orders = await this.orderService.list();

    return res.json(orders);
  };

  delete = async (req: Request, res: Response) => {
    const id = req.query.id as string;
    const order = await this.orderService.delete(id);

    return res.json(order);
  };
}

export { OrderController };
