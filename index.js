const inquirer = require('inquirer')
const fs = require('fs')

const Employee = require('./lib/Employee')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const Manager = require('./lib/Manager')

function askManager() {
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
}


function askEngineer() {
  inquirer.prompt([
       {
           type: 'input',
           name: 'engineerName',
           message: "What is your Engineer's Name"
        },

        {
            type: 'input',
            name: 'engineerId',
            message: 'What is the Id',
        },
 
        {
            type: 'input',
            name: 'engineerEmail',
            message: 'What is the email'
        },
 
        {
            type: 'input',
            name: 'gitHub',
            message: 'What is the Github Username'
        }
   ])
 }

 function askInturn() {
     inquirer.prompt([
         {
             type: 'input',
             name: 'internName',
             message: 'What is your intern name'
         },

         {
             type: 'input',
             name: 'internID',
             message: 'What is the ID'
         },

         {
             type: 'input',
             name: 'interEmail',
             message: 'What is the email'
         },

         {
             type: 'input',
             name: 'school',
             message: 'What is the name of the school'
         }
     ])
 }



