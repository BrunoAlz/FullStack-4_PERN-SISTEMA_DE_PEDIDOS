import { Request, Response } from "express";
import { CategoryService } from "../../services/category/CategoryService";

class CategoryController {
  categoryService: CategoryService;

  constructor() {
    this.categoryService = new CategoryService();
  }

  create = async (req: Request, res: Response) => {
    const { category } = req.body;

    const createdCategory = await this.categoryService.create({ category });
    return res.status(201).json(createdCategory);
  };
}

export { CategoryController };
