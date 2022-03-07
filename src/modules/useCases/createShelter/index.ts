import { ShelterRepository } from "../../repository/implementarions/shelterRepository";
import { CreateShelterUseCase } from "./CreateShelterUseCase";
import { CreateShelterController } from "./CreateShelterController";

const shelterRepository = ShelterRepository.getInstance();
const createShelterUseCase = new CreateShelterUseCase(shelterRepository);
const createShelterController = new CreateShelterController(
  createShelterUseCase
);

export { createShelterController };
