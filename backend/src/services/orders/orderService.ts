import { OrdersRepository } from "../../repository/orderRepository";

class OrderService {
  orderRepository: OrdersRepository;

  constructor() {
    this.orderRepository = new OrdersRepository();
  }

  create = async ({ table, name }) => {
    const order = await this.orderRepository.createOrder({
      table,
      name,
    });

    return order;
  };
}

export { OrderService };
