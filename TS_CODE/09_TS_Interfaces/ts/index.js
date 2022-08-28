var Employee = /** @class */ (function () {
    function Employee() {
    }
    Employee.prototype.add = function (first, secound) {
        this.sum = first + secound;
        console.log(this.sum);
    };
    return Employee;
}());
var Student = /** @class */ (function () {
    function Student() {
    }
    Student.prototype.add = function (first, secound) {
        this.sum = first + secound;
        console.log(this.sum);
    };
    return Student;
}());
var emp = new Employee();
emp.add(10, 20);
var stu = new Student();
stu.add(10, 20);
