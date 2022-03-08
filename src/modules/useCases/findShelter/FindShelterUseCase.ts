import { IShelterDTO, IShelterRepository } from "../../repository/IShelterRepository";

class FindShelterUseCase{
    constructor(private shelterRepository: IShelterRepository){}
    execute(id: string){
        const shelter = this.shelterRepository.findById(id)
        return shelter
    }
}

export {FindShelterUseCase}