import { Request, Response } from "express";
import { ClientService } from "./client.service";

const clientService = new ClientService();

export class ClientController {

    async create(req: Request, res: Response){
        const {name, email, phone} = req.body;
        const userId = req.user!.id;
        const client =  await clientService.createClient(
            name,
            email,
            phone,
            userId,
        );
        return res.status(201).json(client);
    }

    async getAll(req: Request, res: Response){
        const userId = req.user!.id;
        const clients =
            await clientService.getClients(userId);
        return res.json(clients);
    }

    async delete(req:Request,res: Response){
        const id = Number(req.params.id);
        const userId = req.user!.id;
        const client = await clientService.deleteClient(id, userId);
        return res.json(client);
    }

}