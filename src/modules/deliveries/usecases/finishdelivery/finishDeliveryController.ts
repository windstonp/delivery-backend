import { Request, Response } from "express";
import { FinishDeliveryUseCase } from "./finishDeliveryUseCase";


export class FinishDeliveryController{
  async handle(request: Request, response: Response): Promise<Response>{
    const {id_delivery} = request.body;
    const {id_user: id_deliveryman} = request;
    const finishDeliveryUseCase = new FinishDeliveryUseCase();
    
    const result = await finishDeliveryUseCase.execute({id_deliveryman, id_delivery});

    return response.status(201).json(result);
  }
}