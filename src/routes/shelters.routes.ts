import { Router } from "express";
import { createShelterController } from "../modules/useCases/createShelter";
import { listShelterController } from "../modules/useCases/listSheelters";
import {findShelterController} from '../modules/useCases/findShelter'
import {updateShelterController} from '../modules/useCases/updateShelter'

const sheltersRoutes = Router();

sheltersRoutes.get("/", (request, response) => {
  listShelterController.handle(request, response);
});

sheltersRoutes.get("/:id", (request, response) => {
    findShelterController.handle(request, response)
});

sheltersRoutes.patch("/update", (request, response) => {
    updateShelterController.handle(request, response)
});

sheltersRoutes.post("/", (request, response) => {
    createShelterController.handle(request, response)
});



export {sheltersRoutes}