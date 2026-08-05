import { prisma } from "../../config/prismaClient";

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

    getClients(){

    }

    deleteClient(){

    }

}