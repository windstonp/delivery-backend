import { Router } from "express";
import { ensureIsAuthenticated } from "../../../middlewares/ensureIsAuthenticated";
import { CreateClientController } from "../usecases/CreateClients/createClientController";
import { GetClientDeliveriesController } from "../usecases/getClientDeliveries/getClientDeliveriesController";

const clientsRoutes = Router();

const createClientController = new CreateClientController();
const getClientDeliveriesController = new GetClientDeliveriesController();

clientsRoutes.post("/", createClientController.handle);
clientsRoutes.get("/get-client-deliveries", ensureIsAuthenticated, getClientDeliveriesController.handle);

export {clientsRoutes};