import { Router } from "express";
import { userRoutes } from "./userRoutes";
import { authRoutes } from "./authRoutes";
import { categoryRoutes } from "./categoryRoutes";

const router = Router();

router.use("/user", userRoutes);
router.use("/auth", authRoutes);
router.use("/categories", categoryRoutes);

export { router };
