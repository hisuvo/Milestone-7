// Truthy Value : "javascript" (string), {} (object), [](array), 56(number), ture(Boolean)

// Falsy Value : ""(emty string), flase(boolean), 0, null, undefined

const x1 = 345; // truthy value is 345
if (x1) {
    // console.log("it a number")
} else {
    // console.log("it not a number")
}

// shortCut is :
const x11 = x1 ? "it's a number" : "it's not a number";
// console.log(x11)

const x2 = "JavaScript";
if (x2 === "JavaScript") {
    // console.log("It's a Programming Language")
} else {
    // console.log("It is not a Programming Language")
}

// shortCut is :
const x22 = (x2 === "JavaScript" && typeof x2 === "string") ? "It's a Programming Language" : "It's not a Programming Language";
// console.log(x22)





// number to string convert
let isNumber = 345;
// console.log(isNumber)

let isNumberToString = isNumber + "";
// console.log(isNumberToString)

let isString = "345";
// console.log(isString)

let isStringToNumber = +isString
// console.log(isStringToNumber)



let isActive = true;
const func1 = () => console.log("display user");
const func2 = () => console.log("not display user");

// isActive ? func1() : func2()


// Use && if left side is ture then right side will be executed
// isActive && func1()

// Use || if left side is false then right side will be executed
// !isActive || func2()