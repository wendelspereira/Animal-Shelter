import { ListShelterController } from "./ListShelterController";
import { ListShelterUseCase } from "./ListShelterUseCase";
import { ShelterRepository } from "../../repository/implementarions/shelterRepository";

const shelterRepository = ShelterRepository.getInstance();
const listShelterUseCase = new ListShelterUseCase(shelterRepository);
const listShelterController = new ListShelterController(listShelterUseCase);

export { listShelterController };
