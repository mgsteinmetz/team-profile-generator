const inquirer = require('inquirer');
const fs = require('fs');

const generateHTML = (answers) => 
`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link href="//maxcdn.bootstrapcdn.com/font-awesome/5.2.0/css/font-awesome.min.css" rel="stylesheet">
    <link rel="stylesheet" href="./style.css">
    <title>Team Profile</title>
</head>
<body>
    <header class="jumbotron text-center bg-dark" style="color: whitesmoke;">
        <h1><bold>My Team</bold></h1>
    </header>
    <main>
        <div class="card-group">
            <div class="card container m-3" style="width: 18rem;">
                <div class="card-header bg-primary row" style="color: whitesmoke; height: 100px;">
                    <h3>${answers.name} ${answers.job}</h3>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${answers.id}</li>
                    <li class="list-group-item">Email: ${answers.email}</li>
                    <li class="list-group-item">Office Number: ${answers.officeNumber}</li>
                </ul>
            </div>
            <div class="card container m-3" style="width: 18rem;">
                <div class="card-header bg-primary row" style="color: whitesmoke; height: 100px;">
                    <h3>${answers.name} ${answers.job}</h3>
                </div>                
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${answers.id}</li>
                    <li class="list-group-item">Email: ${answers.email}</li>
                    <li class="list-group-item">GitHub: ${answers.github}</li>
                </ul>
            </div>
            <div class="card container m-3" style="width: 18rem;">
                <div class="card-header bg-primary row" style="color: whitesmoke; height: 100px;">
                    <h3>${answers.name} ${answers.job}</h3>
                </div>                
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${answers.id}</li>
                        <li class="list-group-item">Email: ${answers.email}</li>
                        <li class="list-group-item">GitHub: ${answers.github}</li>
                    </ul>
            </div>
            <div class="card container m-3" style="width: 18rem;">
                <div class="card-header bg-primary row" style="color: whitesmoke; height: 100px;">
                    <h3>${answers.name} ${answers.job}</h3>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${answers.id}</li>
                    <li class="list-group-item">Email: ${answers.email}</li>
                    <li class="list-group-item">School: ${answers.school}</li>
                </ul>
            </div>
        </div>
    </main>
</body>
</html>`;

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
        when: (data) => data.role === 'Engineer'
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