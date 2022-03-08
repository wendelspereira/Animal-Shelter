"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shelter = void 0;
const uuidv4_1 = require("uuidv4");
class Shelter {
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
    constructor() {
        if (!this.id) {
            this.id = (0, uuidv4_1.uuid)();
        }
    }
}
exports.Shelter = Shelter;
