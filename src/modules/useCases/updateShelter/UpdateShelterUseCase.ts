import { IShelterDTO, IShelterRepository } from "../../repository/IShelterRepository";

class UpdateShelterUseCase{
    constructor(private shelterRepository: IShelterRepository){}
    execute({id, name}: IShelterDTO): void{
        this.shelterRepository.update({id, name})
    }
}

export {UpdateShelterUseCase}