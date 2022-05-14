// GIVEN a command-line application that accepts user input
// WHEN I start the application
// THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
// WHEN I choose to view all departments
// THEN I am presented with a formatted table showing department names and department ids
// WHEN I choose to view all roles
// THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
// WHEN I choose to view all employees
// THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
// WHEN I choose to add a department
// THEN I am prompted to enter the name of the department and that department is added to the database
// WHEN I choose to add a role
// THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
// WHEN I choose to add an employee
// THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
// WHEN I choose to update an employee role
// THEN I am prompted to select an employee to update and their new role and this information is updated in the database

const mysql = require("mysql2");
const inquirer = require("inquirer");
const consoleTable = require("console.table");

const db = mysql.createConnection(
  {
    host: "localhost",
    port: 3306,
    user: "root",
    password: "^n5MRAJEteqG",
    database: "employees",
  },
  console.log("connected")
);

//begin interrogation

const questions = () => {
  return inquirer
    .prompt([
      //options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
      {
        type: "list",
        name: "option",
        message: "Select an option",
        choices: [
          "view all departments",
          "view all employees",
          "view all rolls",
          "add department",
          "add a role",
          "add an employee",
          "update employee role",
        ],
      },
    ])
    .then((answers) => {
      switch (answers.option) {
        case "view all departments":
          viewDepartments();
          break;
        case "view all employees":
          viewEmployees();
          break;
        case "view all rolls":
          viewRolls();
          break;
        case "add department":
          addDepartment()
      }
    });
};

// view all departments in the database
const viewDepartments = () => {
  db.query("SELECT * FROM employees.department", function (err, results) {
    console.table(results);
  });
};

const viewEmployees = () => {
  db.query("SELECT * FROM employees.employees", function (err, results) {
    console.table(results);
  });
};

const viewRolls = () => {
  db.query("SELECT * FROM employees.roles", function (err, results) {
    console.table(results);
  });
};

// add a department to the database
const addDepartment = () => {
  
  inquirer.prompt([
    {
      name: 'department_name',
      type: 'input',
      message: 'Insert name of new department'
    }
  ])
  
  .then((answer) => {
  db.query(
    "INSERT INTO department SET ?", answer);
  db.query("SELECT * FROM department", function (err, results) { 
    console.table(results);
    questions();
  })
})
};



questions();


  //  add a employee
  // add a role
  //  update employee

  // BONUS
  // update emp managers
  // view emp by manag
  // view emp by dept
  // delete dep, emp, role
  // view total yearly spending on salary