import { Router } from "express";
import { UserController } from "../controllers/user/UserController";
import { userCreateValidation } from "../middlewares/userValidations";
import { isAuth, validate } from "../middlewares/handleValidation";

const router = Router();
const userController = new UserController();

router.post("/create", userCreateValidation(), validate, userController.create);

router.get("/details", isAuth, userController.details);

export { router as userRoutes };
