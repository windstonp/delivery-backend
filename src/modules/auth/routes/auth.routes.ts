import { Router } from "express";
import { AuthController } from "../authController";

export const authRoutes = Router();

const authController = new AuthController();

authRoutes.post("/", authController.handle);