function add(a,b){
    // let a = 12;
    // let b = 10;
    // console.log(arguments);
    return (a+b);
}
console.log(add(12,10));

// functions are first class citizens

//function expression
let sum = function add(a,b){ 
    return a + b ;
}

console.log(sum(4,5));

//anonymous function
let square = function (num){
    return num * num;
}

console.log(square(5));

// let product = function multiply(a,b){
//     let result = a * b;
//     return result;
// }

// console.log(product(12,4));

// arrow functions
//Step 1: Remove the function name if it exist
// let product = function (a,b){
//     let result = a * b;
//     return result;
// }

// console.log(product(12,4));
//Step 2: remove the function keyword and add =>(fat arrow)
// let product = (a,b) => {
//     let result = a * b;
//     return result;
// }
// console.log(product(12,4));
//Step 3:  put everything in 1 line if possible
// let product = (a,b) => { return a * b};
// console.log(product(12,4));
// Step 4: remove the curly braces and return keyword
let product = (a,b) => a * b;
console.log(product(12,4));

// let cube = function (a){
//     return a*a*a;
// }
// console.log(cube(3));

// let cube = (a) => {
//     return a*a*a;
// }
// console.log(cube(3));

//if there is only 1 parameter, then we can remove paranthesis as well
let cube = a =>  a*a*a;
console.log(cube(3));

let makePerson = (name,age,gender) => ({
        name:name,
        age:age,
        gender:gender
    })


