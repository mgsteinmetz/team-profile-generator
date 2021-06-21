const Employee = require('./employee');

class Engineer extends Employee {
    // adding constructor function for Engineer
    constructor(name, id, email, github) {
        super(name, id, email);

        this.github = github;
    }
    // getGitHub function
    getGitHub() {
        return this.github;
    }
    // getRole function
    getRole() {
        return 'Engineer';
    }
};
// exporting Engineer for other js files
module.exports = Engineer;