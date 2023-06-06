import { Router } from "express";
import { isAuth } from "../middlewares/handleValidation";
import { ProductController } from "../controllers/product/ProductController";
import uploadConfig from "../config/multer";
import multer from "multer";

const router = Router();
const upload = multer(uploadConfig.upload("temp"));

const productController = new ProductController();

router.post("/create", isAuth, upload.single("file"), productController.create);
router.get(
  "/category/",
  isAuth,
  upload.single("file"),
  productController.getProductsByCategory
);

export { router as productRoutes };
