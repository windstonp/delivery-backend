import { Request, Response } from "express";
import { AuthUseCase } from "./AuthUseCase";

export class AuthController{
  async handle(request: Request, response: Response): Promise<Response>{
    const {username, password} = request.body;

    const authUseCase = new AuthUseCase();
    
    const result = await authUseCase.execute({username, password});

    return response.status(200).json(result)
  }
}