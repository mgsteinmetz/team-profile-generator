class Employee {
    // adding constructor function for employee
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    // getName function
    getName() {
        return this.name;
    }
    // getId function
    getId() {
        return this.id;
    }
    // getEmail function
    getEmail() {
        return this.email;
    }
    // getRole function
    getRole() {
        return 'Employee';
    }
};
// exporting Employee for other js files
module.exports = Employee;