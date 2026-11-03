const Person = require("./class_classes");

let person =
{
    firstName: 'Avinash',
    lastName: 'Marri',
    age: 30,
    fullName: function()
    {
        console.log(this.firstName+this.lastName);
    }

}

console.log(person.fullName())

//accesing values in dot notation from object (Object.key)
console.log(person.firstName);

//accessing values in array notation from object (object['key'])
console.log(person['lastName']);

//we can assign and update the values of JS Object
person.firstName = "Amrutha";

console.log(person['firstName']+" "+person['lastName']);

person.gender = 'female';

console.log(person);

// delete person.gender;

// console.log(person)

//in operator checks the property exists in the object returns True if exists else false
console.log('gender' in person);

for(let key in person){
    console.log(person[key]);
}

let personC = new Person("Slack","Ben");
console.log(personC.fullName());
