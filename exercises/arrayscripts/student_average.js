let students = [
    { name: "Zephaniah", scores: [100, 96, 99, 92] }, //an array of test scores for a particular student
    { name: "Pursalane", scores: [92, 89, 96, 100, 94] },
    { name: "Siddalee", scores: [86, 72, 92] },
    { name: "Ian", scores: [98, 84, 89, 100, 100, 76] },
    { name: "Elisha", scores: [89, 100] },
    { name: "Ezra", scores: [100, 99, 100, 87] },
  ]; //array of objects representing students
  
  logStudents(students);
  
  function logStudents(students) {
    for (let index = 0; index < students.length; index++) {
      const student = students[index];
      console.log(student.name);
  
      let averageScore = getAverageScore(student.scores);
      console.log(averageScore);
    }
  }
  
  function getAverageScore(scores) {
    let totalOfAllScores = getTotalOfAllScores(scores);
    let numberOfScores = scores.length;
    let averageScore = totalOfAllScores / numberOfScores;
    return averageScore;
  }
  
  function getTotalOfAllScores(scores) {
    let totalOfAllScores = 0;
    for (let index = 0; index < scores.length; index++) {
      const score = scores[index];
      totalOfAllScores = totalOfAllScores + score;
    }
    return totalOfAllScores;
  }
  