const Employee = require('../lib/employee');

// testing the Employee class
describe("Employee class", () => {
    describe("Making new Employee", () => {
        it("should generate a new employee", () => {
            const newEmployee = new Employee('Mike', '5', 'mikesteinmetz00@gmail.com');

            expect(new Employee()).toBeInstanceOf(Employee);
        });
    });

// testing employee name
    describe("employee name", () => {
        it("should display input for employee name", () => {
            const newEmployee = new Employee('Mike', '5', 'mikesteinmetz00@gmail.com');

            expect(newEmployee.name).toEqual('Mike');
        });
    });

// testing employee id
    describe("employee id", () => {
        it("should display input for employee id", () => {
            const newEmployee = new Employee('Mike', '5', 'mikesteinmetz00@gmail.com');

            expect(newEmployee.id).toEqual('5');
        });
    });

// testing employee email
    describe("employee email", () => {
        it("should display input for employee email", () => {
            const newEmployee = new Employee('Mike', '5', 'mikesteinmetz00@gmail.com');

            expect(newEmployee.email).toEqual('mikesteinmetz00@gmail.com');
        });
    });

// testing getName function
    describe("getName", () => {
        it("should return this.name", () => {
            const newEmployee = new Employee('Mike', '5', 'mikesteinmetz00@gmail.com');

            expect(newEmployee.getName()).toEqual('Mike');
        });
    });

// testing getId function
    describe("getId", () => {
        it("should return this.id", () => {
            const newEmployee = new Employee('Mike', '5', 'mikesteinmetz00@gmail.com');

            expect(newEmployee.getId()).toEqual('5');
        });
    });

// testing getEmail function
    describe("getEmail", () => {
        it("should return this.email", () => {
            const newEmployee = new Employee('Mike', '5', 'mikesteinmetz00@gmail.com');

            expect(newEmployee.getEmail()).toEqual('mikesteinmetz00@gmail.com');
        });
    });

// testing getRole function
    describe("getRole", () => {
        it("should return input for role", () => {
            const newEmployee = new Employee('Mike', '5', 'mikesteinmetz00@gmail.com');

            expect(newEmployee.getRole()).toEqual('Employee');
        });
    });
});