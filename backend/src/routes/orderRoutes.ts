import { Router } from "express";
import { isAuth } from "../middlewares/handleValidation";
import { OrderController } from "../controllers/orders/OrderControllers";

const router = Router();
const orderController = new OrderController();

router.post("/create", isAuth, orderController.create);
router.get("/list", isAuth, orderController.list);
router.post("/delete", isAuth, orderController.delete);

router.post("/additem", isAuth, orderController.addItem);
router.post("/removeitem", isAuth, orderController.removeItem);

export { router as orderRoutes };
