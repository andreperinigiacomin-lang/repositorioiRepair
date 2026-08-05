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

    async getServiceOrders(userId:number){
        return await prisma.ordemServico.findMany({
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
        const serviceOrder = await prisma.ordemServico.findFirst({
            where:{
                id:orderId,
                cliente:{
                    usuarioId: userId
                }
            }
        });
        if(!serviceOrder){
            throw new Error("Ordem de serviço não encontrada");
        }
        return await prisma.ordemServico.delete({
            where:{
                id:orderId,
            }
        }); 
    }
}