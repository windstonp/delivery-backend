import { prisma } from "../../../../database/prismaClient"

interface IFinishDelivery{
  id_deliveryman: string,
  id_delivery: string
}

export class FinishDeliveryUseCase{
  async execute({id_deliveryman, id_delivery}: IFinishDelivery){
    const delivery = await prisma.deliveries.updateMany({
      where: {
        id_deliveryman,
        id: id_delivery
      },
      data: {
        delivered: new Date()
      }
    });

    return delivery
  }
}