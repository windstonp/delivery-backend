import { Router } from "express";
import { ensureIsAuthenticated } from "../../../middlewares/ensureIsAuthenticated";
import { CreateDeliverymanController } from "../usecases/createDeliveryman/createDeliverymanController";
import { GetDeliverymanDeliveriesController } from "../usecases/getDeliverymanDeliveries/getDeliverymanDeliveriesController";

export const deliverymanRoutes = Router();

const createDeliverymanController = new CreateDeliverymanController();
const getDeliverymanDeliveriesController = new GetDeliverymanDeliveriesController();

deliverymanRoutes.post("/", createDeliverymanController.handle);
deliverymanRoutes.get("/get-deliveries", ensureIsAuthenticated, getDeliverymanDeliveriesController.handle);