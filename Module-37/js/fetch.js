
const jobHolder = {
    id: "Q456",
    name: "Rajib",
    lanugae: ["JavaScript", "TypeScript", "Phyton"],
    contact: {
        homeNumber: ['01944586490', '01572849684', '01934875938'],
        officeNumber: ['984959239443', '90548098034']

    }
}
// console.log(jobHolder);

const jsonFormate = JSON.stringify(jobHolder);
// console.log(typeof jsonFormate);

const objectToJson = JSON.parse(jsonFormate);
// console.log(objectToJson);



// Array of Object

const allProduct = [
    { name: "laptop", price: 23000, brand: "HP", color: "gray" },
    { name: "Phone", price: 4500, brand: "walton", color: "deep blue" },
    { name: "watch", price: 3000, brand: "Casio", color: "balk" },
    { name: "laptop", price: 17000, brand: "Dell", color: "blue" },
    { name: "Phrame", price: 17000, brand: "wood", color: "red" }
];

const newProduct = { name: "camera", price: 30000, brand: "canon", color: "black" }

const thenProduct = [...allProduct, newProduct];

// Remove phone in allProduct array of object
const thenResult = thenProduct.filter(product => product.name !== "Phone")
// console.log(thenProduct);
// console.log(thenResult)