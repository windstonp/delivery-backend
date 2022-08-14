import { Request, Response } from "express";
import { AttachDeliverymanUseCase } from "./attachDeliverymanUseCase";


export class AttachDeliverymanController{
  async handle(request: Request, response: Response): Promise<Response>{
    const {id_delivery} = request.body;
    const {id_user: id_deliveryman} = request;
    const attachDeliverymanUseCase = new AttachDeliverymanUseCase();
    
    const result = await attachDeliverymanUseCase.execute({id_deliveryman, id_delivery});

    return response.status(200).json(result);
  }
}