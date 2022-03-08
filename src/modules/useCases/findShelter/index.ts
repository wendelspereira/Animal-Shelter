import { ShelterRepository } from "../../repository/implementarions/shelterRepository";
import { FindShelterController } from "./FindShelterController";
import { FindShelterUseCase } from "./FindShelterUseCase";

const shelterRepository = ShelterRepository.getInstance();
const findShelterUseCase = new FindShelterUseCase(shelterRepository);
const findShelterController = new FindShelterController(findShelterUseCase);

export { findShelterController };
