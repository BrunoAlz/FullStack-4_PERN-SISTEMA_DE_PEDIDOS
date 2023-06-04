import { Router } from "express";
import { UserController } from "./controllers/user/UserController";
import { AuthUserController } from "./controllers/auth/AuthUserController";
import {
  userCreateValidation,
  userLoginValidation,
} from "./middlewares/userValidations";
import { isAuth, validate } from "./middlewares/handleValidation";

const router = Router();

router.post(
  "/user/create",
  userCreateValidation(),
  validate,
  new UserController().create
);

router.get(
  "/user/details",
  isAuth,
  new UserController().details
);

router.post(
  "/auth/login",
  userLoginValidation(),
  validate,
  new AuthUserController().login
);



export { router };
