import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { prisma } from "../../database/prismaClient"

interface IAuthRequest{
  username: string,
  password: string
}

export class AuthUseCase{
  async execute({password, username}: IAuthRequest){
    const client = await prisma.clients.findFirst({
      where: {
        username
      }
    });

    const deliveryman = await prisma.deliveryMan.findFirst({
      where: {
        username
      }
    });

    const user = client ?? deliveryman;

    const passwordMatch = await compare(password, user ? user.password : '');


    if(!user || !passwordMatch){
      throw new Error("username or password invalid!");
    }

    const token = sign({username}, process.env.AUTH_HASH_SECRET!, {
      subject: user.id,
      expiresIn: "1d"
    })

    return token
  }
}