import { Router } from "express";
import { ServiceOrderController} from "./serviceOrder.controller";
import { authMiddleware } from "../../middlewares/authMiddleware";

const router = Router();

const serviceOrderController = new ServiceOrderController();
router.use(authMiddleware);

router.post("/",serviceOrderController.create);

export default router;