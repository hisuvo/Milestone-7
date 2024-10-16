
const products = [
    { name: "laptop", price: 23000, brand: "HP", color: "gray" },
    { name: "Phone", price: 4500, brand: "walton", color: "deep blue" },
    { name: "watch", price: 3000, brand: "Casio", color: "balk" },
    { name: "laptop", price: 17000, brand: "Dell", color: "blue" },
    { name: "Phrame", price: 17000, brand: "wood", color: "red" },
];

// Array.map() 
const productsName = products.map(products => products["name"]);
const productsPrice = products.map(products => products.price);

// Array.forEach();
let pdarray = [];
products.forEach(products => {
    pdarray.push(products.color)
    // console.log(products.color)
})
// console.log(productsName)
// console.log(productsPrice)
// console.log(pdarray)


// Array.filter();
const productPrice = products.filter(products => products.price <= 20000);
const productsFilter = products.filter(products => products.name.includes("Ph"))


// console.log(productPrice)
// console.log(productsFilter)


// Array.find() is give only first match product
const productsFind = products.find(products => products.name.includes("Phr"))
// console.log(productsFind);




