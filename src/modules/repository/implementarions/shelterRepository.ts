import { Shelter } from "../../model/shelter";
import { IShelterRepository, IShelterDTO } from "../IShelterRepository";

class ShelterRepository implements IShelterRepository {
  private shelters: Shelter[] = [];
  private static INSTANCE: ShelterRepository;

  public static getInstance(): ShelterRepository {
    if (!ShelterRepository.INSTANCE) {
      ShelterRepository.INSTANCE = new ShelterRepository();
    }
    return ShelterRepository.INSTANCE;
  }

  create({ name }: IShelterDTO): void {
    const shelter = new Shelter();
    Object.assign(shelter, {
      name,
    });

    this.shelters.push(shelter);
  }

  list(): Shelter[] {
    return this.shelters;
    
  }

  findByName(name: string): Shelter | undefined {
    const shelter = this.shelters.find((shelter) => shelter.name === name);
    return shelter;
  }

  findById(id: string): Shelter | undefined {
    const shelter = this.shelters.find((shelter) => shelter.id === id);
    return shelter;
  }

  update({ id, name }: IShelterDTO): void {
    this.shelters.forEach((shelter) => {

      if (shelter.id === id) {
        Object.assign(shelter, { name });
        return;
      }
    });
  }
  delete(id: string): void {
    const index = this.shelters.findIndex((shelter) => {
      return shelter.id === id;
    });
    if (index !== -1) this.shelters.splice(index, 1);
  }
}

// delete: (id: string) => void
export { ShelterRepository };
