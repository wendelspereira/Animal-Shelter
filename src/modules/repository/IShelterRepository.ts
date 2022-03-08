import { Shelter } from "../model/shelter";

interface IShelterDTO {
  id?: string;
  name: string;
}

interface IShelterRepository {
  create: ({ name }: IShelterDTO) => void;
  list: () => Shelter[];
  findByName: (name: string) => Shelter | undefined;
  findById: (id: string) => Shelter | undefined;
  update: ({ id, name }: IShelterDTO) => void;
  delete: (id: string) => void;
}

export { IShelterDTO, IShelterRepository };
