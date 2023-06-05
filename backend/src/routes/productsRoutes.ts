import { Router } from "express";
import { isAuth } from "../middlewares/handleValidation";
import { ProductController } from "../controllers/product/ProductController";

const router = Router();
const productController = new ProductController();

router.post("/create", isAuth, productController.create);

export { router as productRoutes };
