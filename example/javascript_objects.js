let message = "This is my message"; //string
let amount = 29.99; //number
let isApproved = false; //boolean

// <input type="text" id="first-name" />
// let htmlElement = document.getElementById("first-name"); //object (generic) HTMLElement (specific)

// let employeeId = 1;
// let employeeName = "Ethan";
//let employeeJobTitle = "Theatre Teacher"

let employee = {
  employeeId: 1,
  name: "Kanchan",
  jobTitle: "High School Teacher",
  payRate: 55,
};

console.log(employee);
console.log(employee.payRate); //dot-notation PREFERRED
console.log(employee["payRate"]); //bracket notation NOT COMMON




