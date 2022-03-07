
import {IShelterDTO, IShelterRepository } from "../../repository/IShelterRepository"

class CreateShelterUseCase {
    constructor(private shelterRepository: IShelterRepository ){}
    execute({id, name}: IShelterDTO){
        const shelterAlreadyExistis = this.shelterRepository.findById(id)
        if(shelterAlreadyExistis){
            throw new Error("Shelter already exists!")
        }

        this.shelterRepository.create({id, name})
    }
}

export { CreateShelterUseCase }



