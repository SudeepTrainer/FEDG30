// let fullName = 'Elon Musk';
// let age = 45;
// let country = "SA"
// let skills = ["Entreprenuer","Founder","Developer"];

let elonObject = {
    fullName: 'Elon Musk',
    age:45,
    country:"SA",
    skills:["Entreprenuer","Founder","Developer"]
}

console.log(elonObject.country);
console.log(elonObject.skills[1]);

// {products:[{},{},{}]}
let shoppingCart = {products:[{name:"iPhone",brand:"Apple",price:"$12345",
                    category:"Phones"},
                    {name:"iPad",brand:"Apple",price:"$34424",
                    category:"Phones"}]
                    }

let name1 = "Mark";
let name2 = name1;
let name3 = name2;
name3 = "Elon";
console.log(name3); 
console.log(name2);

// Object are reference types
let product1 = {
    name:"Laptop",
    price:325423
}

let product2 ={
    name:"Laptop",
    price:325423
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

let product4 = {...product2};
console.log(product4);
console.log(product2);

product4.price = 435;
console.log(product4);
console.log(product2);

let product ={
    brand:"Apple",
    price:355,
    // getDetails:function getDetails(){
    //     console.log(`Brand is ${this.brand}`);
    // }
    // getDetails:function (){
    //     console.log(`Brand is ${this.brand}`);
    // }
    getDetails(){
        console.log(`Brand is ${this.brand}`);
    }
}

product.getDetails();

let person = {
    firstName:"Mark",
    lastName:"Zuck",
    getFullName(){
        return `${this.firstName} ${this.lastName}`;
    },
    greet(){
        return `Hi, this is ${this.firstName}`;
    }
}
console.log(person.getFullName());
