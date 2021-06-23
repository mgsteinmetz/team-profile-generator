const inquirer = require('inquirer');
const fs = require('fs');

const Employee = require('./lib/employee');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const Manager = require('./lib/manager');

let team = [];

let HTML = '';


// employee card
function generateEmployee() {

    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is the persons name?'
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
                name: 'github',
                message: 'What is their GitHub account?',
            },
        ])
        .then((answer) => {
            let employeeAnswer = new Employee(answer.name, answer.id, answer.email, answer.github);
            team.push(employeeAnswer);
            HTML += `
                <div class="card container m-3" style="width: 18rem;">
                <div class="card-header bg-primary row" style="color: whitesmoke; height: 100px;">
                    <h3>${answer.name} ${answer.job}</h3>
                </div>                
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${answer.id}</li>
                    <li class="list-group-item">Email: ${answer.email}</li>
                    <li class="list-group-item">GitHub: ${answer.github}</li>
                </ul>
            </div>`
            addEmployee();
        }); 
};

// engineer card
function generateEngineer() {

    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is the persons name?'
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
                name: 'github',
                message: 'What is their GitHub account?',
            },
        ])
        .then((answer) => {
            let engineerAnswer = new Engineer(answer.name, answer.id, answer.email, answer.github);
            team.push(engineerAnswer);
            HTML += `
                <div class="card container m-3" style="width: 18rem;">
                <div class="card-header bg-primary row" style="color: whitesmoke; height: 100px;">
                    <h3>${answer.name} ${answer.job}</h3>
                </div>                
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${answer.id}</li>
                    <li class="list-group-item">Email: ${answer.email}</li>
                    <li class="list-group-item">GitHub: ${answer.github}</li>
                </ul>
            </div>`
            addEmployee();
        }); 
};

// intern card
function generateIntern() {

    inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the persons name?'
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
            name: 'school',
            message: 'Where are they going to school?',
        },
    ])
    .then((answer) => {
        let internAnswer = new Intern(answer.name, answer.id, answer.email, answer.school);
        team.push(internAnswer);
        HTML += `
            <div class="card container m-3" style="width: 18rem;">
            <div class="card-header bg-primary row" style="color: whitesmoke; height: 100px;">
                <h3>${answer.name} ${answer.job}</h3>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${answer.id}</li>
                <li class="list-group-item">Email: ${answer.email}</li>
                <li class="list-group-item">School: ${answer.school}</li>
            </ul>
        </div>`
        addEmployee();
    }); 
};

// manager card
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is the persons name?'
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
            },
        ])
        .then((answer) => {
            let managerAnswer = new Manager(answer.name, answer.id, answer.email, answer.officeNumber);
            team.push(managerAnswer);
            HTML += `
                <div class="card container m-3" style="width: 18rem;">
                <div class="card-header bg-primary row" style="color: whitesmoke; height: 100px;">
                    <h3>${answer.name} ${answer.job}</h3>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${answer.id}</li>
                    <li class="list-group-item">Email: ${answer.email}</li>
                    <li class="list-group-item">Office Number: ${answer.officeNumber}</li>
                </ul>
            </div>`
            addEmployee();
        });

    function addEmployee() {
        inquirer
            .prompt([
                {
                    type: 'list',
                    name: 'job',
                    message: 'Select which employee to add to your Team!',
                    choices: ['Employee', 'Engineer', 'Intern', 'Finished'],
                    
                }
            ])
            .then((answer) => {
                jobTitle(answer.job);
            });
    };

    function jobTitle(job) {
    
        switch (job) {
            case 'Employee':
                return generateEmployee();
                break;
            case 'Engineer':
                return generateEngineer();
                break;
            case 'Intern':
                return generateIntern();
                break;
            case 'Finished': end();
                return
                break;
        };
    };

    function end() {
        const webpage = generateHTML();
        fs.writeFile('../team-profile-generator/dist/index.html', webpage, (err) =>
            err ? console.log(err) : console.log('Successfully created your Index.html page!')
        )
    };

const generateHTML = () =>

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
                        <h3>${team[0].name} ${team[0].job}</h3>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${team[0].id}</li>
                        <li class="list-group-item">Email: ${team[0].email}</li>
                        <li class="list-group-item">Office Number: ${team[0].officeNumber}</li>
                    </ul>
                </div>
                <div class="card container m-3" style="width: 18rem;">
                    ${HTML}
                </div>
            </div>
        </main>
    </body>
    </html>`;