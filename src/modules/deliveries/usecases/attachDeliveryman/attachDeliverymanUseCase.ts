import { Deliveries } from "@prisma/client";
import { prisma } from "../../../../database/prismaClient"

interface IAttachDeliveryman{
  id_delivery: string,
  id_deliveryman: string
}

export class AttachDeliverymanUseCase{
  async execute({id_delivery, id_deliveryman}: IAttachDeliveryman): Promise<Deliveries>{
    const delivery = await prisma.deliveries.update({
      where: {
        id: id_delivery
      },
      data: {
        deliveryman: {
          connect: {
            id: id_deliveryman
          }
        }
      }
    })

    return delivery
  }
}