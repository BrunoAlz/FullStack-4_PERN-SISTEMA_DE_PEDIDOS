import { Router } from "express";
import { isAuth } from "../middlewares/handleValidation";
import { OrderController } from "../controllers/orders/orderControllers";

const router = Router();
const orderController = new OrderController();

router.post("/create", isAuth, orderController.create);

export { router as orderRoutes };
