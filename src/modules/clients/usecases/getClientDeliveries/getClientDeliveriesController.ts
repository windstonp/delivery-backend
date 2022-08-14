
import { Request, Response } from "express";
import { GetClientDeliveriesUseCase } from "./getClientDeliveriesUseCase";


export class GetClientDeliveriesController{
  async handle(request: Request, response: Response): Promise<Response>{
    const {id_user} = request;
    const getClientDeliveriesUseCase = new GetClientDeliveriesUseCase();
    
    const result = await getClientDeliveriesUseCase.execute(id_user);

    return response.status(200).json(result);
  }
}