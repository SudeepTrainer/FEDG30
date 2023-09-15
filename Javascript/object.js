// let fullName = 'Elon Musk';
// let age = 45;
// let country = "SA"
// let skills = ["Entreprenuer","Founder","Developer"];

let elonObject = {
    fullName: 'Elon Musk',
    age: 45,
    country: "SA",
    skills: ["Entreprenuer", "Founder", "Developer"]
}

console.log(elonObject.country);
console.log(elonObject.skills[1]);

// {products:[{},{},{}]}
let shoppingCart = {
    products: [{
        name: "iPhone", brand: "Apple", price: "$12345",
        category: "Phones"
    },
    {
        name: "iPad", brand: "Apple", price: "$34424",
        category: "Phones"
    }]
}

let name1 = "Mark";
let name2 = name1;
let name3 = name2;
name3 = "Elon";
console.log(name3);
console.log(name2);

// Object are reference types
let product1 = {
    name: "Laptop",
    price: 325423
}

let product2 = {
    name: "Laptop",
    price: 325423
}

console.log(product1 === product2);

let product3 = product2;
product3.name = "Keyboard";
console.log(product2.name);
console.log(product3);
console.log(product2);

// let product4 = Object.assign({},product2);
// console.log(product4);
// console.log(product2);

// product4.price = 435;
// console.log(product4);
// console.log(product2);

let product4 = { ...product2 };
console.log(product4);
console.log(product2);

product4.price = 435;
console.log(product4);
console.log(product2);

let product = {
    brand: "Apple",
    price: 355,
    // getDetails:function getDetails(){
    //     console.log(`Brand is ${this.brand}`);
    // }
    // getDetails:function (){
    //     console.log(`Brand is ${this.brand}`);
    // }
    getDetails() {
        console.log(`Brand is ${this.brand}`);
    }
}

product.getDetails();

let person = {
    firstName: "Mark",
    lastName: "Zuck",
    age: 23,
    greet() {
        console.log(`Hi, this is ${this.firstName}`);
    }
}

let personMethods = {
    greet: function () {
        console.log(`Hi, this is ${this.firstName}`);
    },
    getFullName: function () {
        console.log(`FirstName: ${this.firstName} Lastname: ${this.lastName}`);
    }
}

// function instantiation
// function Person(fname, lname, age) {
//     let person = {};
//     person["firstName"] = fname;
//     person.lastName = lname;
//     person.age = age;
//     // person.greet = function () {
//     //     console.log(`Hi, this is ${this.firstName}`);
//     // }
//     person.greet = personMethods.greet;
//     // person.getFullName = function () {
//     //     console.log(`FirstName: ${this.firstName} Lastname: ${this.lastName}`);
//     // }
//     person.getFullName = personMethods.getFullName;
//     return person;
// }

// let elon = Person("Elon", "Musk", 24);
// console.log(elon.firstName);
// elon.greet();

// let bill = Person("Bill", "Gates", 32);
// bill.getFullName();

// Object.create
let parent = {}
parent.country = "India";

let child = Object.create(parent);
child.name = "Mark";

console.log(child.name);
console.log(child.country);
console.log(parent.name);

let animalPrototype = {
    makeNoise: function () {
        console.log(`${this.name} making noise`);
    }
}

let animal = Object.create(animalPrototype);
animal.name = "Lion";

animal.makeNoise();

let anArray = [];
let anotherArray = new Array();

let aStr = "";
let anotherString = new String("");

function Person(fname, lname, age) {
    // let person = Object.create(Person.prototype);
    this.firstName = fname;
    this.lastName = lname;
    this.age = age;
    // return person;
}
Person.prototype.greet = function () {
    console.log(`Hi, this is ${this.firstName}`);
}
Person.prototype.getFullName = function () {
    console.log(`FirstName: ${this.firstName} Lastname: ${this.lastName}`);
}
let elon = new Person("Elon", "Musk", 24);
console.log(elon.firstName);
elon.greet();
let bill = new Person("Bill", "Gates", 32);
bill.getFullName();

class Person1 {
    constructor(fname, lname, age) {
        this.firstName = fname;
        this.lastName = lname;
        this.age = age;
    }
    greet() {
        console.log(`Hi, this is ${this.firstName}`);
    }
    getFullName() {
        console.log(`FirstName: ${this.firstName} Lastname: ${this.lastName}`);
    }
}
let person1 = new Person1("Mark", "Zuck", 31);
console.log(person1);
person1.greet();

// create a type Account with properties like balance, accountHolderName, 
// accountNumber. Add methods like withdraw, deposit,etc.