import { Router } from "express";
import { CreateDeliveriesController } from "../usecases/createDeliveries/createDeliveriesController";

export const deliveriesRoutes = Router();

const createDeliveriesController = new CreateDeliveriesController();

deliveriesRoutes.post("/", createDeliveriesController.handle);