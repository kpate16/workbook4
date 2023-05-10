let products = [
  { product: "Gummy Worms", price: 5.79 },
  { product: "Plain M&Ms", price: 2.89 },
  { product: "Peanut M&Ms", price: 2.89 },
  { product: "Swedish Fish", price: 3.79 },
  // TODO: fill the array with 10 candies of various
  // price ranges
];

let resultarray1 = [];
let resultarray2 = [];
let resultarray3 = [];
for (let index = 0; index < products.length; index++) {
  const element = products[index];
  if (element.price < 4) {
    resultarray1.push(element);
  }
  if (element.product.includes("M&M")) {
    resultarray2.push(element);
  }
  if (element.product==="Swedish Fish") {
    resultarray3.push(element);
  }
}
console.log("######### Which candies costs less than $4.00");

for (let index = 0; index < resultarray1.length; index++) {
    const element = resultarray1[index];
    console.log("Product NAme:"+element.product+ " \t price: "+element.price);
    
}

console.log("\n\n######### Which candies has M&M its name?");

for (let index = 0; index < resultarray2.length; index++) {
    const element = resultarray2[index];
    console.log("Product NAme:"+element.product+ " \t price: "+element.price);
    
}

console.log("\n\n######### Do we carry Swedish Fish?");

for (let index = 0; index < resultarray3.length; index++) {
    const element = resultarray3[index];
    console.log("Yes we do carry Swedish Fish with Product Name:"+element.product+ " \t price: "+element.price);
    
}
 
