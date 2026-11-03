//inheritence is the main pillar in object oriented programming 
//One class inherit/acquire the properties/methods of another class
//the class which inherit the another is called subclass (derived, child)
//the class whose properties are inherited is called as super class

const Person = require('./class_classes');
class Pet extends Person{
    constructor(firstName,lastName)
    {
        super(firstName,lastName);
    }
    get location()
    {
        return "BlueCross"
    }
}

let pet = new Pet("Sun", "Shine")
console.log(pet.fullName());
console.log(pet.location);