const Employee = require('./employee');

class Intern extends Employee {
    // adding constructor function for Intern
    constructor(name, id, email, school) {
        super(name, id, email);

        this.school = school;
    }
    // getSchool function
    getSchool() {
        return this.school;
    }
    // getRole function
    getRole() {
        return 'Intern';
    }
};
// exporting Intern for other js files
module.exports = Intern;