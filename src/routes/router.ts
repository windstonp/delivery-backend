import { Router } from "express";
import { authRoutes } from "../modules/auth/routes/auth.routes";
import { clientsRoutes } from "../modules/clients/routes/clients.routes";


const router = Router();

router.use("/clients", clientsRoutes)

router.use("/auth", authRoutes)

export {router}