import { Router } from "express";
import { ClientController } from "./client.controller";
import { authMiddleware } from "../../middlewares/authMiddleware";

const router = Router();

const clientController = new ClientController();
router.use(authMiddleware);

router.post("/",clientController.create);

export default router;