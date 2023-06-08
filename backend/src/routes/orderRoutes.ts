import { Router } from "express";
import { isAuth } from "../middlewares/handleValidation";
import { OrderController } from "../controllers/orders/OrderControllers";

const router = Router();
const orderController = new OrderController();

router.post("/create", isAuth, orderController.create);
router.get("/list", isAuth, orderController.list);
router.post("/delete", isAuth, orderController.delete);

router.post("/additem", isAuth, orderController.addItem);
router.delete("/removeitem", isAuth, orderController.removeItem);
router.post("/updatedraft", isAuth, orderController.updateDraft);

export { router as orderRoutes };
