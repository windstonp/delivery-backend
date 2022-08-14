import { Deliveries } from "@prisma/client";
import { prisma } from "../../../../database/prismaClient"

export class FindAllAvailableUseCase{
  async execute(): Promise<Deliveries[]>{
    const delivery = await prisma.deliveries.findMany({
      where: {
        delivered: null,
        id_deliveryman: null
      }
    })

    return delivery
  }
}