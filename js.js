'use strict'
function uniqueFourDigitsEmployeeIdNumber() {
    var val = Math.floor(1000 + Math.random() * 9000);
    return val;
}
console.log(uniqueFourDigitsEmployeeIdNumber())

function randomSalary(level) {

    if (level == "Senior") {
        let max = 2000, min = 1500

        let salary = min + Math.random() * (max - min);
        let netSalary = salary - salary * 7.5 / 100;
        var x = Math.floor(netSalary)
        return x;



    }
    else if (level == "Mid-Senior") {
        let max = 1500, min = 1000;

        let salary = min + Math.random() * (max - min);
        let netSalary = salary - salary * 7.5 / 100;
        var x = Math.floor(netSalary)
        return x;


    }
    else {
        let max = 1000, min = 500;
        let salary = min + Math.random() * (max - min);
        let netSalary = salary - salary * 7.5 / 100;
        var x = Math.floor(netSalary)
        return x;

    }
}

// let salary=min + Math.random() * (max - min)
// let netSalary=salary-salary*7.5/100
// return netSalary
function Employee(fnm, dep, lev, Ir,) {
    this.Employeeid = uniqueFourDigitsEmployeeIdNumber();
    this.fullname = fnm;
    this.department = dep;
    this.level = lev;
    this.ImageURL = Ir;
    this.salary = randomSalary(this.level);
}


let employee1 = new Employee("Ghazi Samer", "Administration", "Senior", "https://bit.ly/3WqtuZG");
let employee2 = new Employee("Lana Ali", "Finance", "Senior", "https://bit.ly/43nmr6t");
let employee3 = new Employee("Tamara Ayoub", "Marketing", "Senior", "https://bit.ly/42eQhsZ");
let employee4 = new Employee("Safi Walid", "Administration", "Mid-Senior", "https://bit.ly/3WsxBV1");
let employee5 = new Employee("Omar Zaid", "Development", "Senior", "https://bit.ly/3ooaxKI");
let employee6 = new Employee("Rana Saleh", "Development", "Junior", "https://bit.ly/3MMjSFA");
let employee7 = new Employee("Hadi Ahmad", "Finance", "Mid-Senior", "https://bit.ly/3OCPJKh");
document.getElementById("t").innerHTML = `employee name: ${employee1.fullname} <br> department: ${employee1.department} <br> employee salary: ${employee1.salary} `;
document.getElementById("y").innerHTML = `employee name: ${employee2.fullname}  <br> department: ${employee2.department} <br> employee salary: ${employee2.salary} `;
document.getElementById("u").innerHTML = `employee name: ${employee3.fullname} <br>  department:${employee3.department} <br> employee salary: ${employee3.salary} `;
document.getElementById("i").innerHTML = `employee name: ${employee4.fullname} <br>  department: ${employee4.department} <br> employee salary: ${employee4.salary} `;
document.getElementById("o").innerHTML = `employee name: ${employee5.fullname} <br>  department: ${employee5.department} <br> employee salary: ${employee5.salary} `;
document.getElementById("p").innerHTML = `employee name: ${employee6.fullname}<br>   department: ${employee6.department}<br>  employee salary: ${employee6.salary}`;
document.getElementById("a").innerHTML = `employee name: ${employee7.fullname}  <br> department: ${employee7.department} <br> employee salary: ${employee7.salary} `;

console.log(employee1);
console.log(employee2);
console.log(employee3);
console.log(employee4);
console.log(employee5);
console.log(employee6);
console.log(employee7);
