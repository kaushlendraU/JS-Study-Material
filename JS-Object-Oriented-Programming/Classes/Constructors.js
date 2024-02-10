//  A constructor is a special function that creates and initializes an object instance of a class. In JavaScript, a constructor gets called when an object is created using the new keyword. The purpose of a constructor is to create a new object and set values for any existing object properties

function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}

//   In a constructor function this does not have a value. It is a substitute for the new object. The value of this will become the new object when a new object is created.

const myFather = new Person("John", "Doe", 50, "blue");
const myMother = new Person("Sally", "Rally", 48, "green");

console.log(myMother); //  Person { firstName: 'Sally', lastName: 'Rally',age: 48, eyeColor: 'green'}
Pe
console.log(myFather); // Person { firstName: 'John', lastName: 'doe',age: 50, eyeColor: 'blue'}

// constructor  in class

class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }

    introduce() {
        console.log(`Hello, my name is ${this.name}`);
    }
}

const otto = new Person("Otto");

otto.introduce(); // Hello, my name is Otto