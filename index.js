const inquirer = require('inquirer');

inquirer.prompt([
    {
        type: 'input',
        name: 'test',
        message: 'Type in a test code'
    }
]).then( function(response) {
    console.log(response.test);
})
