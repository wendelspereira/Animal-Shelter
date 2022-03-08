import {
  IShelterDTO,
  IShelterRepository,
} from "../../repository/IShelterRepository";

class CreateShelterUseCase {
  constructor(private shelterRepository: IShelterRepository) {}
  execute(name: string): void {
    const shelterAlreadyExistis = this.shelterRepository.findByName(name);

    if (shelterAlreadyExistis) {
      throw new Error("Shelter already exists!");
    }
    this.shelterRepository.create({ name });
  }
}

export { CreateShelterUseCase };
