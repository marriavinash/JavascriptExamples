module.exports = class Person
{

    //constructor is method which executes by default when you create an object of the class
    //variables/properties declared in the constructor are instance variables
    //this keyword refers keyword in JavaScript is a fundamental concept that refers 
    //to the context in which a function is executed.
    constructor(firstName, lastName)
    {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    fullName()
    {
        console.log(this.firstName+this.lastName);
    }
    age = 25;
    name = 'Avinash Marri';
    get location()
    {
        return "India"
    }
}

// let person = new Person("Tim", "David");
// console.log(person.name);

// //since location is getter method not a function we can call it like below
// console.log(person.location);

// //fullname is a function we need to call it like as below
// console.log(person.fullName());

// let person1 = new Person("Eric", "Jen");
// console.log(person1.fullName());
