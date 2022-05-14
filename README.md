# employee-tracker  .then((answers) => {
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
          break;
        case "add a role":
          addRole()
          break; 
        case "add employee":
          addEmployee()
           