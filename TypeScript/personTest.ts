import { Person } from "./person”

let persona1: Person= new Person ("Idrys", 24, "C/Bruma, 9");

persona1.printName();

console.log(persona1.yearOfBirth(2024));

persona1.setAddress("C/Bruma, 7");

console.log(persona1.getAddress());