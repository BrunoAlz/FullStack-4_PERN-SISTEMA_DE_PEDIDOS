import { Request, Response, response } from "express";
import { OrderService } from "../../services/orders/orderService";

class OrderController {
  orderService: OrderService;

  constructor() {
    this.orderService = new OrderService();
  }

  create = async (req: Request, res: Response) => {
    const { table, draft, name } = req.body;

    return res.json({ table, draft, name });
  };
}

export { OrderController };
