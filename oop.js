var Employee = /** @class */ (function () {
    function Employee(empName, age, empJob) {
        this._empName = empName;
        this._age = age;
        this._empJob = empJob;
    }
    Object.defineProperty(Employee.prototype, "empName", {
        get: function () {
            return this._empName;
        },
        set: function (val) {
            this._empName = val;
        },
        enumerable: false,
        configurable: true
    });
    Employee.prototype.printEmp = function () {
        console.log("".concat(this._empName, "\uC758 \uB098\uC774\uB294 ").concat(this._age, "\uC774\uACE0, \uC9C1\uC5C5\uC740 ").concat(this._empJob, "\uC785\uB2C8\uB2E4"));
    };
    return Employee;
}());
var employee1 = new Employee('kim', 20, '개발자');
employee1.empName = 'lee';
employee1.printEmp();
