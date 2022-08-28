/***
 * Classes & Objects
 */
var Employee = /** @class */ (function () {
    function Employee() {
    }
    Employee.prototype.displayEmployee = function () {
        console.log("Id:" + this.id);
        console.log("First Name:" + this.firstName);
        console.log("Last Name:" + this.lastName);
        console.log("Email:" + this.email);
    };
    return Employee;
}());
var emp = new Employee(); //Creating the Object class
var emp1 = new Employee();
emp.id = 1;
emp.firstName = "sai";
emp.lastName = "raja";
emp.email = "raja@gmail.com";
emp1.id = 1;
emp1.firstName = "nani";
emp1.lastName = "sai";
emp1.email = "nanisai@gmail.com";
console.log(emp1);
console.log(emp);
