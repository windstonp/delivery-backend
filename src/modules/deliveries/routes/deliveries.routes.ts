import { Router } from "express";
import { ensureIsAuthenticated } from "../../../middlewares/ensureIsAuthenticated";
import { CreateDeliveriesController } from "../usecases/createDeliveries/createDeliveriesController";
import { FindAllAvailableController } from "../usecases/findAllAvailable/findAllAvailableController";

export const deliveriesRoutes = Router();

const createDeliveriesController = new CreateDeliveriesController();
const findAllAvailableController = new FindAllAvailableController();

deliveriesRoutes.post("/", ensureIsAuthenticated, createDeliveriesController.handle);
deliveriesRoutes.get("/available", ensureIsAuthenticated, findAllAvailableController.handle);