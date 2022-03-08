"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListShelterUseCase = void 0;
class ListShelterUseCase {
    constructor(shelterRepository) {
        this.shelterRepository = shelterRepository;
    }
    execute() {
        const shelters = this.shelterRepository.list();
        return shelters;
    }
}
exports.ListShelterUseCase = ListShelterUseCase;
