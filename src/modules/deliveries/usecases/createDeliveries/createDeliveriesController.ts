import { Request, Response } from "express";
import { CreateDeliveriesUseCase } from "./createDeliveriesUseCase";


export class CreateDeliveriesController{
  async handle(request: Request, response: Response): Promise<Response>{
    const {item_name} = request.body;
    const {id_client} = request;
    const createDeliveriesUseCase = new CreateDeliveriesUseCase();
    
    const result = await createDeliveriesUseCase.execute({id_client, item_name});

    return response.status(201).json(result);
  }
}