const inquirer = require("inquirer")
const db = require("./db")
const mainQuestions = [
    {
        type: 'list',
        name: 'option',
        message: 'What do you want to do?',
        choices: [
            { name: "view all employess", value: "VIEW_EMPLOYEES" },
            { name: "view all departments", value: "VIEW_DEPARTMENTS" },
            { name: "view all roles", value: "VIEW_ROLES" },
            { name: "add a department", value: "ADD_DEPARTMENT" },
            { name: "add a role", value: "ADD_ROLE" },
            { name: "add an employee ", value: "ADD_EMPLOYEE" },


        ]

    }]

function main() {
    inquirer.prompt(mainQuestions).then(answers => {

        switch (answers.option) {

            case "VIEW_EMPLOYEES":
                viewEmployees()
                break
            case "VIEW_DEPARTMENTS":
                viewDepartments()
                break
            case "VIEW_ROLES":
                viewRoles()
                break
            case "ADD_DEPARTMENTS":
                addDepartment()
            case "ADD_ROLE":
                addRole()
            case "ADD_EMPLOYEE":
                addEMPLOYEE()
        }


    })
}
main()

const viewEmployees = () => {

    db.viewEmployees().then(([rows]) => {

        console.table(rows)

    }).then(() => { main() })

}
const viewDepartments = () => {

    db.viewDepartments().then(([rows]) => {

        console.table(rows)


    }).then(() => { main() })

}
const viewRoles = () => {

    db.viewRoles().then(([rows]) => {

        console.table(rows)


    }).then(() => { main() })



}

const addDepartment = () => {

    db.addDepartment().then(([rows]) => {

        console.table(rows)


    }).then(() => { main() })
}
const addRole = () => {

    db.addRole().then(([rows]) => {

        console.table(rows)


    }).then(() => { main() })
}
const addEmployee = () => {

    db.addEmployee().then(([rows]) => {

        console.table(rows)


    }).then(() => { main() })
}