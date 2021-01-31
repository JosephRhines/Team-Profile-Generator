const inquirer = require('inquirer')
const fs = require('fs')

const Employee = require('./lib/Employee')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const Manager = require('./lib/Manager')
const team = require('./src/page-template')

const teamarr = [];

function start() {
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
.then(response => {
    const manager = new Manager (response.managerName, response.managerId, response.email, response.officeNumber);
    teamarr.push(manager);
    addPerson();
})
}
askManager()

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
   .then(response => {
   const engineer = new Engineer (response.engineerName, response.engineerId, response.engineerEmail, response.gitHub);
   teamarr.push(engineer);
   addPerson()
   })
 }

 function askIntern() {
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
             name: 'internEmail',
             message: 'What is the email'
         },

         {
             type: 'input',
             name: 'school',
             message: 'What is the name of the school'
         }
     ])
     .then(response => {
         const intern = new Intern (response.internName, response.internID, response.internEmail, response.school);
         teamarr.push(intern);
         addPerson()
     })
 }
 function addPerson() {
     inquirer.prompt([
         {
             type: 'list',
             name: 'addNew',
             message: 'Select a Role',
             choices: ['manager', 'engineer', 'intern', 'finished']
         }
     ])
     .then(response => {
         const role = response.addNew;
         if (role == 'manager') {
             askManager();
         }
         else if (role == 'engineer') {
             askEngineer();
         }
         else if (role == 'intern') {
             askIntern();
         }
         else if (role == 'finished') {
             inquirer.prompt([
                 {
                     type: 'input',
                     name: 'team',
                     message: 'What is the name of your team'
                 }
             ])
            .then(response => {
                
                displayTeam(response.team)
            })
            

         }
     })
   
 }
 
function displayTeam(answer) {
    fs.mkdirSync(__dirname + "/dist/" + `${answer}/`);
    fs.writeFileSync(__dirname + "/dist/" + `${answer}/` + 'index.html', team(teamarr), (err) => err ? console.log(err) : console.log('Success'))
}

}
start();



