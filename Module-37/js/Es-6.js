
const number = [1, 2, 3, 4, 5, 6, 7];

const actres = {
    name: "X",
    age: 56,
    movies: ["puspa", "RRR", "Kalki"]
}

// 1. Template string
const about = `My faverite actress name is ${actres.name}. he is ${actres.age} years old and her movies name ${actres.movies.map((item) => item)}`


// 2. Arrow function 
const getFityFive = () => 55;
const addSixtyFive = num => num + 65;
const isEven = x => x % 2 === 0 ? `${x} is even number` : `${x} isn't even number`;

const addThree = (x, y, z) => x + y + z;

const doMath = (num1, num2) => {
    const sum = num1 + num2;
    return sum
}

const result = doMath(23, 23);


// 3.sprea Operator

const newNumber = function () {
    const x = [...number] // don't copy
    return x;
}

const x = [...number]

number.push(23, 24)
// console.log(number)
// console.log(x)
// console.log(newNumber())

// Create a new array from an older array and add new element
const newArray = [...x, 34];
// console.log(newArray)