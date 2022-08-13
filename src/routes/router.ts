import { Router } from "express";
import { clientsRoutes } from "../modules/clients/routes/clients.routes";


const router = Router();

router.use("/clients", clientsRoutes)

export {router}