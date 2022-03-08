import { ShelterRepository } from "../../repository/implementarions/shelterRepository";
import { DeleteShelterController } from "./deleteShelterController";
import { DeleteShelterUseCase } from "./deleteShelterUseCase";

const shelterRepository = ShelterRepository.getInstance();
const deleteShelterUseCase = new DeleteShelterUseCase(shelterRepository);
const deleteShelterController = new DeleteShelterController(
  deleteShelterUseCase
);

export { deleteShelterController };
