"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListShelterController = void 0;
class ListShelterController {
    constructor(listShelterUseCase) {
        this.listShelterUseCase = listShelterUseCase;
    }
    handle(request, response) {
        return response.send(this.listShelterUseCase.execute());
    }
}
exports.ListShelterController = ListShelterController;
