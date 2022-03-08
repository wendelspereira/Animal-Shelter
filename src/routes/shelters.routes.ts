import { Router } from "express";
import { createShelterController } from "../modules/useCases/createShelter";
import { listShelterController } from "../modules/useCases/listSheelters";
import { findShelterController } from "../modules/useCases/findShelter";
import { updateShelterController } from "../modules/useCases/updateShelter";
import { deleteShelterController } from "../modules/useCases/deleteShelter";

const sheltersRoutes = Router();

sheltersRoutes.post("/", (request, response) => {
  createShelterController.handle(request, response);
});
sheltersRoutes.get("/", (request, response) => {
  listShelterController.handle(request, response);
});

sheltersRoutes.get("/:id", (request, response) => {
  findShelterController.handle(request, response);
});

sheltersRoutes.patch("/update", (request, response) => {
  updateShelterController.handle(request, response);
});

sheltersRoutes.delete("/delete/:id", (request, response) => {
  deleteShelterController.handle(request, response);
});

export { sheltersRoutes };
