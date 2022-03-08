import { ShelterRepository } from "../../repository/implementarions/shelterRepository";
import { UpdateShelterController } from "./UpdateShelterController";
import { UpdateShelterUseCase } from "./UpdateShelterUseCase";

const shelterRepository = ShelterRepository.getInstance();
const updateShelterUseCase = new UpdateShelterUseCase(shelterRepository);
const updateShelterController = new UpdateShelterController(updateShelterUseCase);

export { updateShelterController };
