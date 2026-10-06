import "dotenv/config";
import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import authRoutes from "@/routes/auth.routes.js";
import friendsRoutes from "@/routes/friends.routes.js";
import { authProxy } from "./middleware/auth.proxy.js";

const app = express();
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/friends", authProxy, friendsRoutes);
export default app;
