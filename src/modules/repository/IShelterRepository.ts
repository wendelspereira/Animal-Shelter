import {Shelter} from '../model/shelter'

interface IShelterDTO {
    name: string;
}

interface IShelterRepository{
    create: ({name}: IShelterDTO)=>void
    list: () => Shelter[]
    findById: (id: string) => Shelter | undefined
}

export {IShelterDTO, IShelterRepository}