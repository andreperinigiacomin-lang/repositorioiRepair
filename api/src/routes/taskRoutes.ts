import { Router } from "express";
import TaskController from "../controllers/TaskController";
import { authMiddleware } from "../middlewares/authMiddleware";

const router = Router();
router.use(authMiddleware);

router.post("/tasks", (req, res) => TaskController.create(req, res));

router.get('/tasks', (req, res) => TaskController.findAll(req, res));

router.get('/tasks/:id', (req, res) => TaskController.findById(req, res));

router.put('/tasks/:id', (req, res) => TaskController.update(req, res));

router.delete('/tasks/:id', (req, res) => TaskController.delete(req, res));

export default router;