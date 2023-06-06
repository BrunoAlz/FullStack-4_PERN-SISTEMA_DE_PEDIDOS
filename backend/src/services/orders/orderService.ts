import { OrdersRepository } from "../../repository/orderRepository";

class OrderService {
  orderRepository: OrdersRepository;

  constructor() {
    this.orderRepository = new OrdersRepository();
  }

  create = async ({ table, draft, name }) => {
    const order = await this.orderRepository.createOrder({
      table,
      draft,
      name,
    });

    return order;
  };
}

export { OrderService };
