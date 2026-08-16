import { prisma } from "../../config/prismaClient";
import { AppError } from "../../utils/AppError";

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
         return await prisma.ordemservico.create({
            data: {
                clienteId,
                dispositivo,
                problema,
                status
            }
         });
    }

    async getServiceOrders(userId:number){
        return await prisma.ordemservico.findMany({
            where:{
                cliente:{
                    usuarioId:userId,
                }
            },
            include:{
                cliente:true,
            }
        });
    }

    async deleteServiceOrder(orderId: number, userId: number){
        const serviceOrder = await prisma.ordemservico.findFirst({
            where:{
                id:orderId,
                cliente:{
                    usuarioId: userId
                }
            }
        });
        if(!serviceOrder){
            throw new AppError("Ordem de serviço não encontrada", 404);
        }
        return await prisma.ordemservico.delete({
            where:{
                id:orderId,
            }
        }); 
    }
}