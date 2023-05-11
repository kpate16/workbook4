let products = [
  { prodId: 2, item: "Notepads (12 pk)", price: 12.29 },
  { prodId: 22, item: "Stapler", price: 12.79 },
  { prodId: 12, item: "Black Pens (12 pk)", price: 5.7 },
];

products.sort(function (a, b) {
  if (a.item < b.item) return -1;
  else if (a.item == b.item) return 0;
  else return 1;
});

console.log("-------------------------------");
console.log("Products by name(item property)");
console.log(products);

products.sort(function (a, b) {
  return b.price - a.price;
});

console.log("Products by price(desc)");
console.log(products);
