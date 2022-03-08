"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateShelterController = void 0;
class CreateShelterController {
    constructor(createShelterUseCase) {
        this.createShelterUseCase = createShelterUseCase;
    }
    handle(request, response) {
        const { name } = request.body;
        this.createShelterUseCase.execute({ name });
        return response.status(201).send();
    }
}
exports.CreateShelterController = CreateShelterController;
