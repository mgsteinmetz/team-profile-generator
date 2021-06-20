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
    message: 'Who are you wanting to add?'
},
{
    type: 'input',
    name: 'job',
    message: 'What is their job title?'
},
{
    type: 'input',
    name: 'ID',
    message: 'What is thier ID number?'
},
{
    type: 'input',
    name: 'email',
    message: 'What is their primary email?'
},
{
    type: 'input',
    name: 'name',
    message: 'What is their GitHub account?'
},
])
.then((answers) => {
    const htmlPageContent = generateHTML(answers);

    fs.writeFile('index.html', htmlPageContent, (err) =>
        err ? console.log(err) : console.log('Successfully created index.html!')
    );
});