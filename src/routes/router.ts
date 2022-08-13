import { Router } from "express";
import { authRoutes } from "../modules/auth/routes/auth.routes";
import { clientsRoutes } from "../modules/clients/routes/clients.routes";
import { deliveriesRoutes } from "../modules/deliveries/routes/deliveries.routes";
import { deliverymanRoutes } from "../modules/deliveryman/routes/deliveryman.routes";


const router = Router();

router.use("/clients", clientsRoutes)

router.use("/auth", authRoutes)

router.use("/deliveryman", deliverymanRoutes);

router.use("/deliveries", deliveriesRoutes);

export {router}