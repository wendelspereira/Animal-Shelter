import {Shelter} from '../../model/shelter'
import { IShelterRepository, IShelterDTO } from '../IShelterRepository'

class ShelterRepository implements IShelterRepository {
    private shelters = []
    private static INSTANCE: ShelterRepository

    public static getInstance(): ShelterRepository {
        if(!ShelterRepository.INSTANCE){
            ShelterRepository.INSTANCE = new ShelterRepository()
        }
        return ShelterRepository.INSTANCE
    }

    create({name}: IShelterDTO):void {
        const shelter = new Shelter()

        Object.assign(shelter, {
            name
        })

        this.shelters.push(shelter)
    }

    list(): Shelter[] {
        return this.shelters
    }

    findById(id: string): Shelter | undefined {
        const shelter = this.shelters.find(
            (shelter) => shelter.id === id
        )
        return shelter
    }
}

export {ShelterRepository}