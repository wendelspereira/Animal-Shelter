"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateShelterUseCase = void 0;
class CreateShelterUseCase {
    constructor(shelterRepository) {
        this.shelterRepository = shelterRepository;
    }
    execute({ id, name }) {
        const shelterAlreadyExistis = this.shelterRepository.findById(id);
        if (shelterAlreadyExistis) {
            throw new Error("Shelter already exists!");
        }
        this.shelterRepository.create({ id, name });
    }
}
exports.CreateShelterUseCase = CreateShelterUseCase;
