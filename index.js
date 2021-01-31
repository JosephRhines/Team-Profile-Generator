const inquirer = require('inquirer')
const fs = require('fs')

const Employee = require('./lib/Employee')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const Manager = require('./lib/Manager')


inquirer.prompt([
    {
        type: 'input',
        name: 'managerName',
        message: 'What is your manager name'
    },

    {
        type: 'input',
        name: 'managerId',
        message: 'What is your manager id'
    },

    {
        type: 'input',
        name: 'email',
        message: 'What is your email address'
    },
    
    {
        type: 'input',
        name: 'officeNumber',
        message: 'What is your Office Number'
    }


])
//questions for employee 
// .then >> create Employee object
//type of employee:
//if manager >> create Manager Object
// else intern >> create Intern Object

//write file with objects you created.