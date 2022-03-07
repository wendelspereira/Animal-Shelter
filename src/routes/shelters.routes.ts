import { Router } from "express";
import { createShelterController } from "../modules/useCases/createShelter";
import { listShelterController } from "../modules/useCases/listSheelters";

const sheltersRoutes = Router();

sheltersRoutes.get("/", (request, response) => {
  listShelterController.handle(request, response);
});

sheltersRoutes.post("/", (request, response) => {
    createShelterController.handle(request, response)
});


export {sheltersRoutes}