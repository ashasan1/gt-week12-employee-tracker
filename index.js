const inquirer = require('inquirer');
const mysql = require("mysql");

const connectionInfo = {
    host:'localhost',
    port:3306,
    user: "root",
    password: 'kenwe88!',
    database: "employee_DB"
}

const connection = mysql.createConnection(connectionInfo);

connection.connect( function(err) {
    if (err) throw err;
    console.log('Connection Sucessful! Begin Employee Tracker.');
    main();

})

function main() {
    inquirer.prompt([
    {
        type: 'list',
        name:'mainMenu',
        message:'What would you like to do?',
        choices: ['View All Employees','View all Employees by Department','View All Employees by Role', 'Add Employee','Update Employee Role','Add Department', 'Add Role']
    }
]).then( function(response) {
    console.log("Choice accepted");
    switch (response.mainMenu) {
        case "View All Employees":
            viewAllEmployees()
            break;
    
        case 'View all Employees by Department':
            viewAllEmployByDept()
            break;
        case 'View All Employees by Role':
            viewAllEmployeesByRole()
            break;
        case 'Add Employee':
            addEmployee()
            break;
        case'Update Employee Role': 
            updateEmployeeRole()
            break;
        case 'Add Department':
            addDepartment()
            break;
        case 'Add Role':
            addRole()
            break;
        

    }


})
}


function viewAllEmployees() {
    console.log('View all Employees');
    connection.query("SELECT employee.id, employee.first_name, employee.last_name, employee.manager_id, role.title, role.salary, department.name FROM ((employee INNER JOIN role ON employee.role_id = role.id) INNER JOIN department ON role.department_id = department.id)", function (err, result) {
        if (err) throw err;

        console.table(result);
        start();
    });

}

function viewAllEmployByDept() {
    console.log('View all Employees by Department')
}

function viewAllEmployeesByRole() {
    console.log('View all employees by role')
}

function addEmployee() {
    console.log('Add Employee')
}

function updateEmployeeRole() {
    console.log('Update Employee Role')
}

function addDepartment() {
    console.log('Add Department')
}

function addRole(){
    console.log('Add Role')
}