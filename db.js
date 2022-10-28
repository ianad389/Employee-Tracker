const db = require("./connection")
class DB {
    constructor(connection) { this.connection = connection }

    viewEmployees = () => {
        return this.connection.promise().query("select * from employee")

    }
   
    viewDepartments = () => {
        return this.connection.promise().query("select * from department")

    }
   
    addDepartment = (name) => {
        return this.connection.promise().query("insert into department (name) values (?) ", name)

    }

    addRole = (name,salary,department) => {
        return this.connection.promise().query("insert into role (title, salary, department_id) values (?, ?, ?) ", [name, salary, department])

    }
    addEmployee = (name,firstname, lastname,role, manager ) => {
        return this.connection.promise().query("insert into employee (first name, last name, role, manager) values (?) ", [name,firstname,lastname,role,manager])

    }
}



module.exports = new DB(db)