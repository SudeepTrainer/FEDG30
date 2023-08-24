console.log("Testing");

// String Number Boolean Object Undefined Null Symbol
// SNOBNUS

//String
// var firstName = "Mark";
var $$$$$ = "Zuck";
console.log($$$$$);

// Javascript is an interpreted language
// ES6(2015) is the major release 
// let and const were introduced

let firstName = "Mark";
const PI = 3.14;

for(var i=0;i<10;i++){
    console.log(i)
}

for(let j=0;j<10;j++){
    console.log(j)
}

let lastName = "Zuckerberg";
lastName = "Musk";

let name = 'your\'s truly';
let address = "This is \"quote\"";

let name1 = `your's truly`;
let address1 = `This is "quote"`;

let fullName = firstName.toUpperCase() + " " + lastName.toLowerCase();
console.log(fullName);

let myName = `Firstname: ${firstName.toUpperCase()} Lastname: ${1 + 4}`;
console.log(myName);

//Number
let num = 1233;
let num1 = 12.34;
console.log(1/0);
console.log(-1/0);
console.log(200**2000);
console.log(Math.pow(200,2000));
console.log(0/0);
console.log(10/"Mark");
console.log(Math.max(10,209));
console.log(Math.floor(2.1455));
console.log(Math.ceil(2.1355));
console.log(Math.sqrt(4));
console.log(Date.now());
// https://www.epochconverter.com/

// Boolean
let flag = true;
// let isAdult = age > 17;

console.log(10==10);
console.log(10=="10");
console.log("10"=="10");
console.log(10===10);
console.log(10==="10");
console.log("10"==="10");

// undefined and null
let myVar;
console.log(myVar);
let anotherVar = null;
console.log(anotherVar);

let myFirstName = "Sudeep";
let myLastName = "Jha";
myLastName = null;
console.log(`${myFirstName} ${myLastName}`);


