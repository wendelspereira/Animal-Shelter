"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShelterRepository = void 0;
const shelter_1 = require("../../model/shelter");
class ShelterRepository {
    constructor() {
        this.shelters = [];
    }
    static getInstance() {
        if (!ShelterRepository.INSTANCE) {
            ShelterRepository.INSTANCE = new ShelterRepository();
        }
        return ShelterRepository.INSTANCE;
    }
    create({ name }) {
        const shelter = new shelter_1.Shelter();
        Object.assign(shelter, {
            name
        });
        this.shelters.push(shelter);
    }
    list() {
        return this.shelters;
    }
    findById(id) {
        const shelter = this.shelters.find((shelter) => shelter.id === id);
        return shelter;
    }
}
exports.ShelterRepository = ShelterRepository;
