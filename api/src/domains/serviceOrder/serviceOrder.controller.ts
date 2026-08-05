import { Request, Response } from "express";
import { ServiceOrderService } from "./serviceOrder.service";

const serviceOrderService = new ServiceOrderService;

export class ServiceOrderController{
    async create(req:Request, res:Response){
        const{
            clienteId,
            dispositivo,
            problema,
            status
        } = req.body;

        const userId = req.user!.id;
        const serviceOrder = await serviceOrderService.createServiceOrder(
            clienteId,
            dispositivo,
            problema,
            status,
            userId,
        );
        return res.status(201).json(serviceOrder);
    }

    async getAll(req:Request, res:Response){
        const userId = req.user!.id;
        const serviceOrders = await serviceOrderService.getServiceOrders(userId);
        return res.json(serviceOrders);
    }
    
    async delete(req:Request, res:Response){
        const id = Number(req.params.id);
        const userId = req.user!.id;
        const serviceOrder = await serviceOrderService.deleteServiceOrder(id, userId);
        return res.json(serviceOrder);
    }
}