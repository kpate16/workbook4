let courses = [
  {
    CourseId: "PROG100",
    Title: "Introduction to HTML/CSS/Git",
    Location: "Classroom 7",
    StartDate: "09/08/22",
    Fee: "100.00",
  },
  {
    CourseId: "PROG200",
    Title: "Introduction to JavaScript",
    Location: "Classroom 9",
    StartDate: "11/22/22",
    Fee: "350.00",
  },
  {
    CourseId: "PROG300",
    Title: "Introduction to Java",
    Location: "Classroom 1",
    StartDate: "01/09/23",
    Fee: "50.00",
  },
  {
    CourseId: "PROG400",
    Title: "Introduction to SQL and Databases",
    Location: "Classroom 7",
    StartDate: "03/16/23",
    Fee: "50.00",
  },
  {
    CourseId: "PROJ500",
    Title: "Introduction to Angular",
    Location: "Classroom 1",
    StartDate: "04/25/23",
    Fee: "50.00",
  },
];

function searchByCourseId(courseID) {
  for (let index = 0; index < courses.length; index++) {
    if (courses[index].CourseId === courseID) {
      return courses[index];
    }
  }
  return null;
}
let result;
// When does the PROG200 course start?

result = searchByCourseId("PROG200");
if (result !== null) {
  console.log(
    "  ##### When does the PROG200 course start:  " + result.StartDate
  );
} else {
  console.log("##### When does the PROG200 course start:  No data found ");
}

// What is the title of the PROJ500 course?
result = searchByCourseId("PROJ500");
if (result !== null) {
  console.log("##### What is the title of the PROJ500 course: " + result.Title);
} else {
  console.log("##### What is the title of the 123 course: No data found ");
}

// What are the titles of the courses that cost $50 or less?
let resultarray = [];
for (let index = 0; index < courses.length; index++) {
  if (courses[index].Fee <= 50) {
    resultarray.push(courses[index]);
  }
}
console.log(" ####What are the titles of the courses that cost $50 or less?####");
for (let index = 0; index < resultarray.length; index++) {
   console.log(resultarray[index].Title);
  }
  
// What classes meet in "Classroom 1"?

let resultarray1 = [];
for (let index = 0; index < courses.length; index++) {
  if (courses[index].Location==="Classroom 1") {
    resultarray1.push(courses[index]);
  }
}
console.log(" #### What classes meet in Classroom 1?####");
for (let index = 0; index < resultarray1.length; index++) {
   console.log(resultarray1[index].CourseId +" : " + resultarray1[index].Title);
  }