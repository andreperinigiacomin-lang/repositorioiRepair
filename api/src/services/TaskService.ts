import { prisma } from "../config/prismaClient";

class TaskService{
    async create(title: string) {
        const task = await prisma.task.create({
            data:{
                title,
                completed: false,
            },
        });
        return task;
    }

    async findAll(completed?:string){
        if(completed === undefined){
            return await prisma.task.findMany();
        }
        const isCompleted = completed === "true";
        return await prisma.task.findMany({
            where: {
                completed: isCompleted,
            },
        });
    }

    async findById(id: number) {
        return await prisma.task.findUnique({
            where: {
                id,
            },
        });
    }

     async update(id: number, title?: string, completed?: boolean){
        const task = await this.findById(id);
        if(!task){
            return null;
        }
        return await prisma.task.update({
            where: {
                id,
            },
            data: {
                ...(title !== undefined && {title}),
                ...(completed !== undefined && {completed}),
            },
        });
    }

    async delete(id: number): Promise<Boolean>{
        const task = await this.findById(id);
        if(!task){
            return false;
        }
        await prisma.task.delete({
            where: {
                id,
            },
        });
        return true;
    }
}

export default new TaskService();