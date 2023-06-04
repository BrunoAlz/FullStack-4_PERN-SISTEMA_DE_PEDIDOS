import { Router } from "express";
import { AuthUserController } from "../controllers/auth/AuthUserController";
import { userLoginValidation } from "../middlewares/userValidations";
import { validate } from "../middlewares/handleValidation";

const router = Router();
const authController = new AuthUserController();

router.post("/login", userLoginValidation(), validate, authController.login);

export { router as authRoutes };
