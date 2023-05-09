function getMealCost(orders) {
  let sum = 0;
  let numOrders = orders.length;
  for (let i = 0; i < numOrders; i++) {
    sum += orders[i].price;
  }
  return sum;
}

let myOrder = [
  { item: "Steak Fajitas", price: 9.95 },
  { item: "Chips and Guacamole", price: 5.25 },
  { item: "Sweet Tea", price: 2.79 },
];

let mealCost = getMealCost(myOrder);
let totalWithTipTax = mealCost;
console.log("My meal costs " + totalWithTipTax.toFixed(2));

let tax = 0.08;
let tip = 0.18;
console.log("Tax is 8%");
console.log("Tip is 18%");
let total = totalWithTipTax + 4.68;
console.log("My total bill with including taxes " + total.toFixed(2));
