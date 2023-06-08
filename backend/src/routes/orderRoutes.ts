import { Router } from "express";
import { isAuth } from "../middlewares/handleValidation";
import { OrderController } from "../controllers/orders/OrderControllers";

const router = Router();
const orderController = new OrderController();

router.post("/create", isAuth, orderController.create);
router.get("/list", isAuth, orderController.list);
router.post("/delete", isAuth, orderController.delete);
router.post("/updatedraft", isAuth, orderController.updateDraft);
router.post("/details", isAuth, orderController.getDetails);
router.post("/close", isAuth, orderController.closeOrder);

router.post("/additem", isAuth, orderController.addItem);
router.delete("/removeitem", isAuth, orderController.removeItem);

export { router as orderRoutes };
