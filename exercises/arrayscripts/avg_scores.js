function getAverage(scores) {
    let sum = 0;
    let numscores = scores.length;
    for (let i = 0; i < numscores; i++) {
      sum += scores[i].price;
    }
    return sum;
  }
  
  let myScores = [92, 98, 84, 76, 89, 99, 100];
  let yourScores = [82, 98, 94, 88, 92, 100, 100]; 

  

  
  let scores = getAverage(myScores);
  let total = 92+98+84+76+89+99+100;
  total/6;
  console.log("My score " + total.toFixed(2));

  scores = getAverage(myScores);
   total = 82+98+94+88+92+100+100;
  total/6;
  console.log("Your score " + total.toFixed(2));