import { Request, Response } from "express";
import { CreateDeliverymanUseCase } from "./createDeliverymanUseCase";


export class CreateDeliverymanController{
  async handle(request: Request, response: Response): Promise<Response>{
    const {username, password} = request.body;

    const createDeliverymanUseCase = new CreateDeliverymanUseCase();
    
    const result = await createDeliverymanUseCase.execute({username, password});

    return response.status(201).json(result);
  }
}