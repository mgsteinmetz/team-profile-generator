const inquirer = require('inquirer');
const fs = require('fs');

const generateHTML = (answers) => 
`

`;

inquirer
.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'What is the persons name?'
    },
    {
        type: 'checkbox',
        name: 'job',
        message: 'What is their job title?',
        choices: ['Manager', 'Engineer', 'Employee', 'Intern']
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is thier ID number?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is their primary email?'
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: 'What is their office number?',
        when: (data) => data.role === 'Manager'
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is their GitHub account?',
        when: (data) => data.role === 'Employee'
    },
    {
        type: 'input',
        name: 'school',
        message: 'Where are they going to school?',
        when: (data) => data.role === 'Intern'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is their primary email?'
    },
    {
        type: 'confirm',
        name: 'newPerson',
        message: 'Would you like to add another person?'
    },
])
.then((answers) => {
    const htmlPageContent = generateHTML(answers);

    fs.writeFile('index.html', htmlPageContent, (err) =>
        err ? console.log(err) : console.log('Successfully created index.html!')
    );
});