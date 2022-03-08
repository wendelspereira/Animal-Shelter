import { IShelterRepository } from "../../repository/IShelterRepository";

class DeleteShelterUseCase {
  constructor(private shelterRepository: IShelterRepository) {}

  execute(id: string): void {
    this.shelterRepository.delete(id);
  }
}

export { DeleteShelterUseCase };
