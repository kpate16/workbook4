let employee = {
    employeeId: 1,
    name: "Kanchan",
    jobTitle: "High SchoolTeacher",
    payRate: 55,
  };
  
  //passing an object to a function
  function printEmployee(employee) {
    console.log("-------------passing an object to a function");
    console.log(employee.employeeId);
    console.log(employee.name);
    console.log(employee.jobTitle);
    console.log(employee.payRate);
  }
  
  printEmployee(employee);
  
  function createPayStub(id, name, payRate, hoursWorked) {
    let grossPay = 0;
    if (hoursWorked <= 40) {
      grossPay = payRate * hoursWorked;
    } else {
      grossPay = 40 * payRate + (hoursWorked - 40) * 1.5 * payRate;
    }
    
    let payStub = {
      employeeId: id,
      name: name,
      grossPay: grossPay,
    };
    return payStub;
  }
  
  console.log("--------------return functions from objects");
  
  let emp1PayStub = createPayStub("1", "Ezra", 38.46, 49);
  console.log(emp1PayStub);
  
  let emp2PayStub = createPayStub("2", "Elisha", 43.27, 42);
  console.log(emp2PayStub);