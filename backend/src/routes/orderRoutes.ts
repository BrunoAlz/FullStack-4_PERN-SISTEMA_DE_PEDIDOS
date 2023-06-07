import { Router } from "express";
import { isAuth } from "../middlewares/handleValidation";
import { OrderController } from "../controllers/orders/OrderControllers";

const router = Router();
const orderController = new OrderController();

router.post("/create", isAuth, orderController.create);
router.get("/list", isAuth, orderController.list);

export { router as orderRoutes };
