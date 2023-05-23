'use strict'
function uniqueFourDigitsEmployeeIdNumber() {
    var val = Math.floor(1000 + Math.random() * 9000);
    return val;
}
console.log(uniqueFourDigitsEmployeeIdNumber())

function randomSalary(level) {

    if (level == "Senior") {
        let max = 2000, min = 1500
        
let salary=min + Math.random() * (max - min);
let netSalary=salary-salary*7.5/100;
var x=Math.floor(netSalary)
  return x;


        
    }
    else if (level == "Mid-Senior") {
        let max = 1500, min = 1000;
        
let salary=min + Math.random() * (max - min);
let netSalary=salary-salary*7.5/100;
var x=Math.floor(netSalary)
  return x;

        
    }
    else {
 let max = 1000, min = 500;        
let salary=min + Math.random() * (max - min) ;
let netSalary=salary-salary*7.5/100;
var x=Math.floor(netSalary)
  return x;

   }
}

// let salary=min + Math.random() * (max - min)
// let netSalary=salary-salary*7.5/100
// return netSalary



let Employee = {
    Employeeid: uniqueFourDigitsEmployeeIdNumber(),
    FullName: "Ghazi Samer",
    Department: "Administration",
    level: "Senior",
    ImageurL: 'https://bit.ly/3WqtuZG',
    salary: 0
}
Employee.salary=randomSalary(Employee.level)
let Employee2 = {
    Employeeid: uniqueFourDigitsEmployeeIdNumber(),
    FullName: "Lana Ali",
    Department: "Finance",
    level: "Senior",
    ImageurL: 'https://bit.ly/43nmr6t',
    salary: 0
}
Employee2.salary=randomSalary(Employee2.level)
let Employee3 = {
    Employeeid: uniqueFourDigitsEmployeeIdNumber(),
    FullName: "Tamara Ayoub",
    Department: "Marketing",
    level: "Senior",
    ImageurL: 'https://bit.ly/42eQhsZ',
    salary: 0
}
Employee3.salary=randomSalary(Employee3.level)
let Employee4 = {
    Employeeid: uniqueFourDigitsEmployeeIdNumber(),
    FullName: "Safi Walid",
    Department: "Administration",
    level: "Mid-Senior",
    ImageurL: 'https://bit.ly/3WsxBV1',
    salary: 0
}
Employee4.salary=randomSalary(Employee4.level)
let Employee5 = {
    Employeeid: uniqueFourDigitsEmployeeIdNumber(),
    FullName: "Omar Zaid",
    Department: "Development",
    level: "Senior",
    ImageurL: 'https://bit.ly/3ooaxKI',
    salary: 0
}
Employee5.salary=randomSalary(Employee5.level)
let Employee6 = {
    Employeeid: uniqueFourDigitsEmployeeIdNumber(),
    FullName: "Rana Saleh",
    Department: "Development",
    level: "Junior",
    ImageurL: 'https://bit.ly/3MMjSFA',
    salary: 0
}
Employee6.salary=randomSalary(Employee6.level)
let Employee7 = {
    Employeeid: uniqueFourDigitsEmployeeIdNumber(),
    FullName: "Hadi Ahmad",
    Department: "Finance",
    level: "Mid-Senior",
    ImageurL: 'https://bit.ly/3OCPJKh',
    salary: 0
}
Employee7.salary=randomSalary(Employee7.level)



document.getElementById("t").innerHTML = `employee name: ${Employee.FullName} <br> employee salary: ${Employee.salary} `;
document.getElementById("y").innerHTML = `employee name: ${Employee2.FullName}<br> employee salary: ${Employee2.salary} `;
document.getElementById("u").innerHTML = `employee name: ${Employee3.FullName} <br>employee salary: ${Employee3.salary} `;
document.getElementById("i").innerHTML = `employee name: ${Employee4.FullName}<br> employee salary: ${Employee4.salary} `;
document.getElementById("o").innerHTML = `employee name: ${Employee5.FullName} <br>employee salary: ${Employee5.salary} `;
document.getElementById("p").innerHTML = `employee name: ${Employee6.FullName} <br>employee salary: ${Employee6.salary} `;
document.getElementById("a").innerHTML = `employee name: ${Employee7.FullName}<br> employee salary: ${Employee7.salary} `;

