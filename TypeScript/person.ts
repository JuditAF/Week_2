class Person {
    
    constructor(public name: string, public age: number, private address: string) {

        this.name = name
        this.age = age

        this.address = address
    }

    public getAddress (): string { return this.address }

    public setAddress (newAddress: string): void { this.address = newAddress }

    public printName (): void { console.log(this.name) }

    public yearOfBirth (currentYear: number): number {
        return currentYear - this.age
    }
    
}

//export class Person