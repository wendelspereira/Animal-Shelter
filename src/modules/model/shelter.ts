import { v4 as uuidv4 } from 'uuid';

class Shelter {
    id?: string;
    name!: string;
    // address: {
    //     street: string;
    //     number: string;
    //     district: string;
    //     city: string;
    //     uf: string;
    // }
    // telephone: string;
    // email: string;
    // description: string;
    // opening_Hours: string;
    // created_at: Date;

    constructor(){
        if(!this.id){
            this.id = uuidv4()
        }
    } 
}

export {Shelter}