import { Request, Response } from "express";

import { ProductService } from "../../services/products/ProductService";

class ProductController {
  productService: ProductService;
  constructor() {
    this.productService = new ProductService();
  }

  create = async (req: Request, res: Response) => {
    const { name, price, banner, description, category_id } = req.body;

    const createdProduct = await this.productService.create({
      name,
      price,
      banner,
      description,
      category_id,
    });

    return res.status(201).json(createdProduct);
  };
}

export { ProductController };
