import { prisma } from "../../../../database/prismaClient"

export class GetClientDeliveriesUseCase{
  async execute(id_client: string){
    const client = await prisma.clients.findFirst({
      where: {
        id: id_client
      },
      select: {
        id: true,
        username: true,
        deliveries: true,
      },
    })

    return client
  }
}