import { Response, Request } from 'express';
import TaskService from '../services/TaskService';

class TaskController{
    async create(req: Request, res:Response): Promise<void>{
        const {title} = req.body;
        const task = await TaskService.create(title);
        res.status(201).json(task);
    }

    async findAll(req: Request, res: Response): Promise<void>{
        const completed = req.query.completed as string | undefined;
        const tasks = await TaskService.findAll(completed);
        res.status(200).json(tasks);
    }

    async findById(req: Request, res: Response): Promise<void>{
        const id = Number(req.params.id);
        const task = await TaskService.findById(id);
        if(!task){
            res.status(404).json({
                message: "Task não encontrada"});
            return;
        }
        res.status(200).json(task);
    }

    async update(req: Request, res: Response): Promise<void>{
        const id = Number(req.params.id);
        const {title, completed} = req.body;
        const updatedTask = await TaskService.update(id, title, completed);
        if(!updatedTask){
            res.status(404).json({
                message: "Task não encontrada"});
                return;
        }
        res.status(200).json(updatedTask);
    }

    async delete(req: Request,res: Response, ): Promise<void>{
        const id = Number(req.params.id);
        const deleted = await TaskService.delete(id);
        if(!deleted){
            res.status(404).json({
                message: "Task não encontrada"
            });
            return
        }
        res.sendStatus(204);
    }

}

export default new TaskController();