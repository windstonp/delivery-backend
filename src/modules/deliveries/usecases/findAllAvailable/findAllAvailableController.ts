
import { Request, Response } from "express";
import { FindAllAvailableUseCase } from "./findAllAvailableUseCase";


export class FindAllAvailableController{
  async handle(request: Request, response: Response): Promise<Response>{
    const findAllAvailableUseCase = new FindAllAvailableUseCase();
    
    const result = await findAllAvailableUseCase.execute();

    return response.status(200).json(result);
  }
}