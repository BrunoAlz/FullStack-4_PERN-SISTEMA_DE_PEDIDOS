import { Router } from "express";
import { CategoryController } from "../controllers/category/CategoryController";
import { isAuth } from "../middlewares/handleValidation";

const router = Router();

router.post("/create", isAuth, new CategoryController().create);

export { router as categoryRoutes };
