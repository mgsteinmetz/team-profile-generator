const Employee = require('./employee');

class Manager extends Employee {
    // adding constructor function for Manager
    constructor(name, id, email, officeNumber) {
        super(name, id, email);

        this.officeNumber = officeNumber;
    }
    // getRole function
    getRole() {
        return 'Manager';
    }
};
// exporting Manger for other js files
module.exports = Manager;