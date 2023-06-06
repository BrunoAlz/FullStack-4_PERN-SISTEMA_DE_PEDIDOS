import { Request, Response } from "express";

import { ProductService } from "../../services/products/ProductService";
import { responseMessages } from "../../constants/responseMessages";

class ProductController {
  productService: ProductService;
  constructor() {
    this.productService = new ProductService();
  }

  create = async (req: Request, res: Response) => {
    const { name, price, description, category_id } = req.body;
    const { filename } = req.file;

    if (!req.file) {
      return res.status(401).json(responseMessages.fileNotSent);
    }

    const createdProduct = await this.productService.create({
      name,
      price,
      banner: filename,
      description,
      category_id,
    });

    return res.status(201).json(createdProduct);
  };
}

export { ProductController };
