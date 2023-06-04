import { CreateCategory } from "../../interfaces/CategoryInterfaces";
import { CategoryRepository } from "../../repository/CategoryRespository";

class CategoryService {
  categoryRepository: CategoryRepository;

  constructor() {
    this.categoryRepository = new CategoryRepository();
  }

  create = async ({ category }: CreateCategory) => {
    const createdCategory = await this.categoryRepository.createCategory({
      category,
    });
    return createdCategory;
  };

  list = async () => {
    const getAllCategories = await this.categoryRepository.getAllCategories();
    return getAllCategories;
  };
}

export { CategoryService };
