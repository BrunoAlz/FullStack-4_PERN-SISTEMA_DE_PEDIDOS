import { Router } from "express";
import { AuthUserController } from "../controllers/auth/AuthUserController";
import { userLoginValidation } from "../middlewares/userValidations";
import { validate } from "../middlewares/handleValidation";

const router = Router();

router.post(
  "/login",
  userLoginValidation(),
  validate,
  new AuthUserController().login
);

export { router as authRoutes };
