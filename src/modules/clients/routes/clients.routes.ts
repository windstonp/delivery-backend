import { Router } from "express";
import { CreateClientController } from "../usecases/CreateClients/createClientController";

const clientsRoutes = Router();

const createClientController = new CreateClientController();

clientsRoutes.post("/", createClientController.handle);

export {clientsRoutes};