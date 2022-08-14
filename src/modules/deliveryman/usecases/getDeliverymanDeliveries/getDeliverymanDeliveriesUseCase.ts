import { prisma } from "../../../../database/prismaClient"

export class GetDeliverymanDeliveriesUseCase{
  async execute(id_deliveryman: string){
    const client = await prisma.deliveryMan.findUnique({
      where: {
        id: id_deliveryman
      },
      select: {
        id: true,
        username: true,
        deliveries: true
      },
    })

    return client
  }
}