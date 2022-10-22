const inquirer = require("inquirer")
const data = require('./db')
const mainQuestions = [
    {
        type: 'list',
        name: 'option',
        message: 'What do you want to do?',
        choice: [
            { name: "view all employess", value: "VIEW_EMPLOYEES" },
            { name: "view all departments", value: "VIEW_DEPRATMENTS" },
            { name: "view all roles", value: "VIEW_ROLES" },
            { name: "add a department", value: "ADD_DEPARTMENT" },
            { name: "add a role", value: "ADD_ROLE" },
            { name: "add an employee ", value: "ADD_EMPLOYEE" },


        ]

    }]

function main() {
    inquirer.prompt(mainQuestions).then(answers => { console.log(answers); })
}
main()