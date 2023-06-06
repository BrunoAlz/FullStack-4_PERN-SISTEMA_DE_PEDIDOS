import { responseMessages } from "../../constants/responseMessages";
import { ProductRepository } from "../../repository/ProductRepository";

class ProductService {
  productRepository: ProductRepository;

  constructor() {
    this.productRepository = new ProductRepository();
  }

  create = async ({ name, price, banner, description, category_id }) => {
    const checkProduct = await this.productRepository.checkIfProductExists(
      name
    );

    if (checkProduct) {
      return responseMessages.productExists;
    }

    const createdProduct = await this.productRepository.createProduct({
      name,
      price,
      banner,
      description,
      category_id,
    });

    return createdProduct;
  };
}

export { ProductService };
