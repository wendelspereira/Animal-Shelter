"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sheltersRoutes = void 0;
const express_1 = require("express");
const createShelter_1 = require("../modules/useCases/createShelter");
const listSheelters_1 = require("../modules/useCases/listSheelters");
const sheltersRoutes = (0, express_1.Router)();
exports.sheltersRoutes = sheltersRoutes;
sheltersRoutes.get("/", (request, response) => {
    listSheelters_1.listShelterController.handle(request, response);
});
sheltersRoutes.post("/", (request, response) => {
    createShelter_1.createShelterController.handle(request, response);
});
