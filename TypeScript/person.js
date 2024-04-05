"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
var Person = /** @class */ (function () {
    function Person(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
        this.name = name;
        this.age = age;
        this.address = address;
    }
    Person.prototype.getAddress = function () { return this.address; };
    Person.prototype.setAddress = function (newAddress) { this.address = newAddress; };
    Person.prototype.printName = function () { console.log(this.name); };
    Person.prototype.yearOfBirth = function (currentYear) {
        return currentYear - this.age;
    };
    return Person;
}());
exports.Person = Person;
