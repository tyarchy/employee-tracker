DROP DATABASE IF EXISTS employees;
CREATE DATABASE employees;
USE employees;

CREATE TABLE department
(
ID INTEGER AUTO_INCREMENT PRIMARY KEY,
department_name VARCHAR(30) NOT NULL
);

CREATE TABLE roles
(
ID INTEGER AUTO_INCREMENT PRIMARY KEY,
job_title VARCHAR(30) NOT NULL,
department_id INTEGER,
CONSTRAINT department_id FOREIGN KEY (department_id) references department (ID),
salary INTEGER
);

CREATE TABLE employees
(
id INTEGER AUTO_INCREMENT PRIMARY KEY,
first_name VARCHAR(30) NOT NULL,
last_name VARCHAR(30) NOT NULL,
job_title VARCHAR(30) NOT NULL,
salary INTEGER NOT NULL,
manager VARCHAR(30),
role_id INTEGER,
CONSTRAINT role_id FOREIGN KEY (role_id) references roles (ID)
);


