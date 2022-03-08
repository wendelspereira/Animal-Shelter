import express from "express";
const routes = express();
import { sheltersRoutes } from "./routes/shelters.routes";

routes.use("/shelters", sheltersRoutes);

export { routes };
