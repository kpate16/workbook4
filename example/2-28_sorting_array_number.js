function compareAscendingNumber(a, b) {
    if (a < b) return -1; // right order
    else if (a == b) return 0; // same values
    else return 1; // swap, wrong order
   }
   

let numbers = [3, 27, 400, 1, 111, 5];
compareAscendingNumber(27,400)
numbers.sort(compareAscendingNumber);
console.log(numbers);