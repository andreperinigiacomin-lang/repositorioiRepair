import { prisma } from "../../config/prismaClient";

export class ServiceOrderService {
    async createServiceOrder(
        clienteId:number,
        dispositivo:string,
        problema:string,
        status:string,
        userId:number
    ){
         const cliente =
         await prisma.cliente.findFirst({
            where:{
                id:clienteId,
                usuarioId:userId,
            }
         });
         if(!cliente){
            throw new Error('Cliente não encontrado');
         }
         return await prisma.ordemServico.create({
            data: {
                clienteId,
                dispositivo,
                problema,
                status
            }
         });
    }
}