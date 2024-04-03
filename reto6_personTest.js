
const {Person} = require('./reto1_Persona.js');

let persona1 = new Person ("Ricardo","León Montes", "Avda.Jerusalem, 2", 673986324, 1.84, 90, 1995);

persona1.nacionalidad ="irlandés";

persona1.agregarHobbies("jugar a rugby", "tomar cerveza", "escuchar música Rock", "las motos harley", "jugar al ajedrez");

console.log(persona1);

console.log(persona1.calcularImc());

console.log(persona1.calcularEdad(2024)); 

console.log(persona1.printAll());

console.log(persona1.printHobbies());

