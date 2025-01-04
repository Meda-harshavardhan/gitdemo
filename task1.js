class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }

    incrementAge = () => {
        this.age++;
        console.log(`Next year, I will be ${this.age} years old.`);
    }
}

const person1 = new Person('Harsha', 30);
person1.greet();
person1.incrementAge();

const person2 = new Person('Charan', 25);
person2.greet();
person2.incrementAge();
