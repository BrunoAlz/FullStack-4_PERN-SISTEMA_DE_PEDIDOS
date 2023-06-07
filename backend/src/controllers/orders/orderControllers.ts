import { Request, Response, response } from "express";
import { OrderService } from "../../services/orders/orderService";

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
}

export { OrderController };
