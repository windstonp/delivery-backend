import { Router } from "express";
import { CreateDeliverymanController } from "../usecases/createDeliveryman/createDeliverymanController";

export const deliverymanRoutes = Router();

const createDeliverymanController = new CreateDeliverymanController();

deliverymanRoutes.post("/", createDeliverymanController.handle);