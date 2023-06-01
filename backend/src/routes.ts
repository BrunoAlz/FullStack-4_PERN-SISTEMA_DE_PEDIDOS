import { Router } from "express";
import { UserController } from "./controllers/user/UserController";
import { userCreateValidation } from "./middlewares/UserValidations";
import { validate } from "./middlewares/handleValidation";

const router = Router();

router.post(
  "/user/create",
  userCreateValidation(),
  validate,
  new UserController().create
);

export { router };
