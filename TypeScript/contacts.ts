import { Person } from "./person";

export class Contacts {

    public people : Person[];

    constructor(){

        this.people = [];

    }

    agregarContacto (persona: Person): Person 
    { this.people.push(persona)
        return persona
    };

    printCalendar(): void {

        console.log(this.people);
       
    };
}