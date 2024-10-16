const fruits = ["Apple", "mango", "Orange"];
// const [apple, mango, orange] = fruits;
const [apple, mango, orange] = ["Apple", "Mango", "Orange"];


const allNumber = [234, 235, 567, 789];
const [first, second, third] = allNumber;

// console.log(third);

// Object destructureing
const person = {
    id: "#234",
    age: 23,
    country: "USA",
    language: ["html", "css", "JavaScript", "TypeScript"],
    contact: {
        phone: "01298456456",
        temePhone: "989854764986"
    }
}

const { id, age, country } = person;
const [html, css, javascript, typescript] = person.language
const { phone, temePhone } = person.contact

// console.log(phone, temePhone);