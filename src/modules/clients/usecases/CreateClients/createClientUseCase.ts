import { Clients } from "@prisma/client";
import {hash} from "bcrypt";
import { prisma } from "../../../../database/prismaClient";

interface ICreateClient{
  username: string,
  password: string
}

export class CreateClientUseCase{
  async execute({password, username}:ICreateClient): Promise<Clients>{

    const userExists = await prisma.clients.findFirst({
      where: {
        username
      }
    });

    if(userExists){
      throw new Error("user already exists!");
    }

    const encryptedPassword = await hash(password, 10)

    const client = await prisma.clients.create({
      data: {
        username,
        password: encryptedPassword
      }
    });

    return client
  }
}