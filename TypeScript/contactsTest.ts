import { Person } from "./person";
import { Contacts } from "./contacts";

let persona1: Person= new Person ("Idrys", 24, "C/Bruma, 9");
let persona2: Person= new Person ("Manuela", 34, "C/Bar, 4");

let contacto1: Contacts= new Contacts()

contacto1.agregarContacto(persona1)
contacto1.agregarContacto(persona2)

console.log(contacto1);
