let numbers = [12,20,4,50]
let reverseNumbers = numbers.reverse();
console.log(numbers);
console.log(reverseNumbers);

let reversedNumbers = numbers.toReversed();
console.log(numbers);
console.log(reversedNumbers);

let revArray = [...numbers].reverse();
console.log(numbers);
console.log(revArray);

let arraySize = numbers.push(10);
console.log(numbers);
console.log(arraySize);

let pushNewElemArray = [...numbers,15];
console.log(numbers);
console.log(pushNewElemArray);

// map

// let tenMultiples = numbers.map(function(item){
//     return item * 10;
// })

// let tenMultiples = numbers.map(item => item * 10)
// console.log(numbers);
// console.log(tenMultiples);

const tenMultiply = (item) =>{
    return item * 10;
}

let tenMultiples = numbers.map(tenMultiply)
console.log(numbers);
console.log(tenMultiples);

let data = [
    {name:"Sachin",sports:"Cricket"},
    {name:"Ronaldo",sports:"Football"},
    {name:"Virat",sports:"cricket"},
]

let mappedArray = data.map(obj=>`${obj.name} plays ${obj.sports}`)
console.log(mappedArray);

let filteredArray = numbers.filter(item => item > 20);
console.log(filteredArray);
console.log(numbers);

let cricketData = data.filter(obj => obj.sports.toLowerCase() === "Cricket".toLowerCase());
console.log(cricketData);

// reduce

let sum = numbers.reduce((acc,num)=> acc + num);
console.log(sum);