"use strict";

function numericSortAsc(a, b) {
  return a - b;
}

function hasOddNumberOfElements(array) {
  // this is modules not remainder and 0 is falsy and > 0 is truthy
  return array.length % 2;
}

function getIndexOfMiddleElement(array) {
  return Math.floor(array.length / 2);
}

function getMedian(numbers) {
  if (!numbers || numbers.length === 0) throw new Error("No Inputs");

  numbers.sort(numericSortAsc);
  let indexOfMiddleElement = getIndexOfMiddleElement(numbers);
  let middleElement = numbers[indexOfMiddleElement];
  let elementBeforeMiddleElement = numbers[indexOfMiddleElement - 1];

  if (hasOddNumberOfElements(numbers)) {
    return middleElement;
  } else {
    return (elementBeforeMiddleElement + middleElement) / 2;
  }
}

let numbers1 = [83, 80, 92, 86, 100];
let numbers2 = [80, 83, 86, 87, 92, 100];
let numbers3 = [0.33955843791573237, 1.073205764212215, -0.51182868190794402];
let numbers4 = [];

console.log(getMedian(numbers1));
console.log(getMedian(numbers2));
console.log(getMedian(numbers3));

try {
  console.log(getMedian(numbers4));
} catch (error) {
  console.log(error.message);
}

try {
  console.log(getMedian(null));
} catch (error) {
  console.log(error.message);
}