"use strict";

let myScores = [92, 98, 84, 76, 89, 99, 100];
let yourScores = [82, 98, 94, 88, 92, 100, 100];

function getAverage(scores) {
  let averageScore = 0;
  let totalOfAllScores = 0;
  for (let index = 0; index < scores.length; index++) {
    let score = scores[index];
    totalOfAllScores = totalOfAllScores + score;
  }

  let numberOfScores = myScores.length;
  averageScore = totalOfAllScores / numberOfScores;
  return averageScore;
}

let averageScoreForMyScores = getAverage(myScores);
console.log("My Scores:" + averageScoreForMyScores.toFixed(2));
let averageScoreForYourScores = getAverage(yourScores);
console.log("Your Scores" + averageScoreForYourScores.toFixed(2));
