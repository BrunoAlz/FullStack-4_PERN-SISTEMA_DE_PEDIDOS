import { CreateProductRequest } from "../../interfaces/ProductInterfaces";
import { ProductRepository } from "../../repository/ProductRepository";

class ProductService {
  productRepository: ProductRepository;

  constructor() {
    this.productRepository = new ProductRepository();
  }

  create = async ({
    name,
    price,
    banner,
    description,
    category_id,
  }: CreateProductRequest) => {
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
