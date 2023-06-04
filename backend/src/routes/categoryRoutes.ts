import { Router } from "express";
import { CategoryController } from "../controllers/category/CategoryController";
import { isAuth } from "../middlewares/handleValidation";

const router = Router();
const categoryController = new CategoryController();

router.post("/create", isAuth, categoryController.create);

export { router as categoryRoutes };
