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


function Employee(fnm, dep, lev, Ir,) {
    this.Employeeid = uniqueFourDigitsEmployeeIdNumber();
    this.fullname = fnm;
    this.department = dep;
    this.level = lev;
    this.ImageURL = Ir;
    this.salary = randomSalary(this.level);
}
Employee.prototype.greeting = function () {
    
    document.write(`employee name : ${this.fullname}<br>department :${this.department} <br>employee salary:${this.salary}<br> <br>`);
}

let employee1 = new Employee("Ghazi Samer", "Administration", "Senior", "https://bit.ly/3WqtuZG");
let employee2 = new Employee("Lana Ali", "Finance", "Senior", "https://bit.ly/43nmr6t");
let employee3 = new Employee("Tamara Ayoub", "Marketing", "Senior", "https://bit.ly/42eQhsZ");
let employee4 = new Employee("Safi Walid", "Administration", "Mid-Senior", "https://bit.ly/3WsxBV1");
let employee5 = new Employee("Omar Zaid", "Development", "Senior", "https://bit.ly/3ooaxKI");
let employee6 = new Employee("Rana Saleh", "Development", "Junior", "https://bit.ly/3MMjSFA");
let employee7 = new Employee("Hadi Ahmad", "Finance", "Mid-Senior", "https://bit.ly/3OCPJKh");

console.log(employee1);
employee1.greeting();
console.log(employee2);
employee2.greeting();
console.log(employee3);
employee3.greeting();
console.log(employee4);
employee4.greeting();
console.log(employee5);
employee5.greeting();
console.log(employee6);
employee6.greeting();
console.log(employee7);
employee7.greeting();
