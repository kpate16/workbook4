let names = ["zeph", "anderson", "Zachary", "Adam"];
names.sort(function (a,b) {
 let aUpper = a.toUpperCase();
 let bUpper = b.toUpperCase();
 if (aUpper < bUpper) return -1;
 else if (aUpper == bUpper) return 0;
 else return 1;
}); // Sorts the array in a case-insensitive way
let numNames = names.length;
for(let i = 0; i < numNames; i++) {
 console.log(names[i]);
}