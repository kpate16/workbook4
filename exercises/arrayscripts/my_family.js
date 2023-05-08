// returns an array of names
function getFamily() {
  let family = ["Kanchan", "Pate", "Zachary", "ABCD"];
  return family;
}

// displays data in an array of names
function displayfamily(family) {
  let numfamily = family.length;
  for (let i = 0; i < numfamily; i++) {
    console.log(family[i]);
  }
}
let ourfamily = getFamily();
displayfamily(ourfamily);
