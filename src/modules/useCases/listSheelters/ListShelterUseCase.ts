
import {Shelter} from '../../model/shelter'
import { IShelterRepository } from '../../repository/IShelterRepository'

class ListShelterUseCase {
    constructor(private shelterRepository: IShelterRepository ){}
    execute(): Shelter[] {
       const shelters = this.shelterRepository.list()
       return shelters
    }
}

export { ListShelterUseCase }



