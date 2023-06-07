import { OrderItemRepository } from "../../repository/OrderItemRepository";
import { OrdersRepository } from "../../repository/OrderRepository";

class OrderService {
  orderRepository: OrdersRepository;
  orderItemRepository: OrderItemRepository;

  constructor() {
    this.orderRepository = new OrdersRepository();
    this.orderItemRepository = new OrderItemRepository();
  }

  create = async ({ table, name }) => {
    const order = await this.orderRepository.createOrder({
      table,
      name,
    });

    return order;
  };

  list = async () => {
    const orders = await this.orderRepository.listAll();

    return orders;
  };

  delete = async (id: string) => {
    const order = await this.orderRepository.deleteOrder(id);
    return order;
  };

  addItemToOrder = async ({ amount, order_id, product_id }) => {
    const item = await this.orderItemRepository.addItem({
      amount,
      order_id,
      product_id,
    });

    return item;
  };
}

export { OrderService };
