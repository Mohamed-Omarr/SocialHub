import { Router } from "express";
import { signup, signin } from "@/controllers/auth.controller.js";
const router = Router();

// auth routes
router.post("/signup", signup);
router.post("/signin", signin);

export default router;
