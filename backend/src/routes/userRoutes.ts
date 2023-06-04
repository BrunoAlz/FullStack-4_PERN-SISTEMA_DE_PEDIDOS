import { Router } from "express";
import { UserController } from "../controllers/user/UserController";
import {
  userCreateValidation,
  userLoginValidation,
} from "../middlewares/userValidations";
import { isAuth, validate } from "../middlewares/handleValidation";

const router = Router();

router.post(
  "/create",
  userCreateValidation(),
  validate,
  new UserController().create
);

router.get("/details", isAuth, new UserController().details);

export { router as userRoutes };
