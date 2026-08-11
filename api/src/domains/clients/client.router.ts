import { Router } from "express";
import { ClientController } from "./client.controller";
import { authMiddleware } from "../../middlewares/authMiddleware";

const router = Router();

const clientController = new ClientController();
router.use(authMiddleware);

router.post("/",clientController.create);
router.get('/', clientController.getAll);
router.delete('/:id', clientController.delete);

export default router;