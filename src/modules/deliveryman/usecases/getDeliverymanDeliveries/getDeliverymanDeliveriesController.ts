
import { Request, Response } from "express";
import { GetDeliverymanDeliveriesUseCase } from "./getDeliverymanDeliveriesUseCase";


export class GetDeliverymanDeliveriesController{
  async handle(request: Request, response: Response): Promise<Response>{
    const {id_user} = request;
    const getDeliverymanDeliveriesUseCase = new GetDeliverymanDeliveriesUseCase();
    
    const result = await getDeliverymanDeliveriesUseCase.execute(id_user);

    return response.status(200).json(result);
  }
}