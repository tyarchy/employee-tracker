-- formatted table showing department names and department ids
INSERT INTO department (department_name)
VALUES ("Sales"), ("Engineering"), ("Finance"), ("Legal");

-- WHEN I choose to view all roles
-- THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
INSERT INTO roles (job_title, department_id, salary)
VALUES 
("Salesperson", 1, 80000),
("Engineer", 2, 150000)   , 
("Accountant", 3, 100000),
("Goon", 4, 100000);


-- THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
INSERT INTO employees
(first_name, last_name, job_title, salary, manager)
VALUES 
("Mike", "Chan", "Salesperson", 80000, "Jim Jimmy"),
("Ashley", "Rodriquez", "Engineer", 150000, null),
("Ted", "Turdberg", "Accountant", 100000, null),
("Nucki", "Mickleson", "Goon", 52000, "Rusty");
