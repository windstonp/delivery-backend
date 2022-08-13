import { DeliveryMan } from "@prisma/client";
import {hash} from "bcrypt";
import { prisma } from "../../../../database/prismaClient";

interface ICreateDeliveryman{
  username: string,
  password: string
}

export class CreateDeliverymanUseCase{
  async execute({password, username}:ICreateDeliveryman): Promise<DeliveryMan>{

    const userExists = await prisma.deliveryMan.findFirst({
      where: {
        username
      }
    });

    if(userExists){
      throw new Error("user already exists!");
    }

    const encryptedPassword = await hash(password, 10)

    const deliveryMan = await prisma.deliveryMan.create({
      data: {
        username,
        password: encryptedPassword
      }
    });

    return deliveryMan
  }
}