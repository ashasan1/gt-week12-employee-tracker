const inquirer = require('inquirer');

// inquirer.prompt([
//     {
//         type: 'input',
//         name: 'test',
//         message: 'Type in a test code'
//     }
// ]).then( function(response) {
//     console.log(response.test);
// })

inquirer.prompt([
    {
        type: 'list',
        name:'mainMenu',
        message:'What would you like to do?',
        choices: ['View All Employees','View all Employees by Department','View All Roles', 'Add Employee', 'Remove Employee','Update Employee Role','Add Deparment', 'Add Role']
    }
]).then( function(response) {
    console.log("Choice accepted");
})
