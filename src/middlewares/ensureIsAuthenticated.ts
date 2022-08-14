import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface IPayload{
  sub: string
}

export async function ensureIsAuthenticated(request: Request, response: Response, next: NextFunction){
  const authHeader = request.headers.authorization;

  if(!authHeader){
    return response.status(401).json({
      message: "token is missing!"
    })
  }

  const [,token] = authHeader.split(" ");

  try{
    const {sub} = verify(token, process.env.AUTH_HASH_SECRET!) as IPayload;
    request.id_user = sub;
    return next();
  }catch(error: any){
    return response.status(401).json({
      message: "invalid token!"
    })

  }
}