import { Router } from "express";
import { ensureIsAuthenticated } from "../../../middlewares/ensureIsAuthenticated";
import { CreateDeliveriesController } from "../usecases/createDeliveries/createDeliveriesController";

export const deliveriesRoutes = Router();

const createDeliveriesController = new CreateDeliveriesController();

deliveriesRoutes.post("/", ensureIsAuthenticated, createDeliveriesController.handle);