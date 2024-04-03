
class Person { 

    constructor (name, surnames, address, phoneNumber, height, weight, yearOfBirth) {
        this.nombre = name;
        this.apellidos = surnames;
        this.nacionalidad = "española";
        this.direccionResidencia = address;
        this.telefono = phoneNumber;
        this.altura = height;
        this.peso = weight;
        this.anioNacimiento = yearOfBirth;

        this.hobbies = [];
      };

    calcularImc = function() {

      return `${this.nombre} tiene un índice de masa corporal de: ${(this.peso / Math.pow(this.altura, 2)).toFixed(2)} Kg/m²`
                         
      };
    
    calcularEdad (anyoActual) {

      return `La edad de ${this.nombre} es: ${anyoActual - this.anioNacimiento} años`;
                        
      };

    printAll () {
    
      return `De nuestra agenda de contactos, el segundo de la lista se le conoce por el nombre de-${this.nombre}, 
      los apellidos son-${this.apellidos}, la nacionalidad es-${this.nacionalidad}, con residencia en-${this.direccionResidencia}, 
      numero de teléfono-${this.telefono}, de una altura de-${this.altura} m, peso-${this.peso} Kg y su año de nacimiento es-${this.anioNacimiento}.`;
    
      };

    agregarHobbies = function (...hobbie) {

      return this.hobbies.push(hobbie);

    };

    printHobbies = function() {

      return `Los hobbies favoritos de ${this.nombre} son: ${this.hobbies}`;

      };
      
              }

// * const {Person} = require('./reto1_Persona.js');

  let persona1 = new Person();

  persona1.nombre = "Lidia";
  persona1.apellidos = "Ferrer Torres";
  persona1.altura = 1.73;
  persona1.peso = 62;

console.log(persona1.calcularImc());

  // * Fórmula: peso (kg) / [estatura (m)]2
//   Con el sistema métrico, la fórmula para el IMC es el peso en kilogramos dividido por la estatura en metros cuadrados. Debido a que la estatura 
//   por lo general se mide en centímetros, divida la estatura en centímetros por 100 para obtener la estatura en metros.

// * Fórmula: peso (lb) / [estatura (in)]2 x 703
// Calcule el IMC al dividir el peso en libras (lb) por la altura en pulgadas (in) cuadradas y multiplicar por un factor de conversión de 703.

persona1.anioNacimiento = 1978;

console.log(persona1.calcularEdad(2024));

let persona2 = new Person ("Leonardo", "Padilla-Paris Franco", "C/Sky, 7", 660547893, 1.78, 72, 2000);

console.log(persona2.printAll());

persona2.agregarHobbies("leer", " ir al cine", " jugar a videojuegos", " pintar miniaturas de warhammer");

console.log(persona2.printHobbies());

module.exports = {Person};