import { prisma } from "../../config/prismaClient";
import { AppError } from "../../utils/AppError";

export class ClientService {
    async createClient(
        name: string,
        email: string,
        phone: string,
        userId: number
    ){
        return await prisma.cliente.create({
        data: {
            nome: name,
            email: email,
            telefone: phone,
            usuarioId: userId
        }
    });
    }

    async getClients(userId:number){
        return await prisma.cliente.findMany({
            where:{
                usuarioId:userId
            }
        });
    }

    async deleteClient(clienteId: number, userId: number){
        const client = await prisma.cliente.findFirst({
            where:{
                id:clienteId,
                usuarioId:userId,
            }
        });
        if(!client){
            throw new AppError("Cliente não encontrado", 404);
        }
        return await prisma.cliente.delete({
            where:{
                id:clienteId,
            }
        });
    }
}