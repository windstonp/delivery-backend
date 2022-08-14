import { Router } from "express";
import { ensureIsAuthenticated } from "../../../middlewares/ensureIsAuthenticated";
import { AttachDeliverymanController } from "../usecases/attachDeliveryman/attachDeliverymanController";
import { CreateDeliveriesController } from "../usecases/createDeliveries/createDeliveriesController";
import { FindAllAvailableController } from "../usecases/findAllAvailable/findAllAvailableController";

export const deliveriesRoutes = Router();

const createDeliveriesController = new CreateDeliveriesController();
const findAllAvailableController = new FindAllAvailableController();
const attachDeliverymanUseCase = new AttachDeliverymanController();
deliveriesRoutes.post("/", ensureIsAuthenticated, createDeliveriesController.handle);
deliveriesRoutes.get("/available", ensureIsAuthenticated, findAllAvailableController.handle);
deliveriesRoutes.put("/attach-deliveryman", ensureIsAuthenticated, attachDeliverymanUseCase.handle);