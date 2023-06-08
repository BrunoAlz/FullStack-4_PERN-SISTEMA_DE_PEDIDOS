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

  deleteItemFromOrder = async (id: string) => {
    const item = await this.orderItemRepository.removeItem(id);
    return item;
  };

  updateDraftStatus = async (id: string) => {
    const order = await this.orderRepository.updateDraft(id);
    return order;
  };

  getTotalPrice = (data) => {
    let total = 0;

    for (const item of data) {
      const price = parseFloat(item.Product.price as any);
      const quantity = item.amount;
      total += price * quantity;
    }

    return total;
  };

  getOrderDetails = async (id: string) => {
    const details = await this.orderRepository.getOrderDetails(id);
    const total = this.getTotalPrice(details.itens);

    details['total'] = total

    return { ...details };
  };
}

export { OrderService };
