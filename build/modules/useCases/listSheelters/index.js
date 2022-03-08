"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listShelterController = void 0;
const ListShelterController_1 = require("./ListShelterController");
const ListShelterUseCase_1 = require("./ListShelterUseCase");
const shelterRepository_1 = require("../../repository/implementarions/shelterRepository");
const shelterRepository = shelterRepository_1.ShelterRepository.getInstance();
const listShelterUseCase = new ListShelterUseCase_1.ListShelterUseCase(shelterRepository);
const listShelterController = new ListShelterController_1.ListShelterController(listShelterUseCase);
exports.listShelterController = listShelterController;