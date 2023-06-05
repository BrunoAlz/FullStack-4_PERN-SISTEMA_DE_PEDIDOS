import { Router } from "express";
import { userRoutes } from "./userRoutes";
import { authRoutes } from "./authRoutes";
import { categoryRoutes } from "./categoryRoutes";
import { productRoutes } from "./productsRoutes";

const router = Router();

router.use("/user", userRoutes);
router.use("/auth", authRoutes);
router.use("/category", categoryRoutes);
router.use("/product", productRoutes);

export { router };
