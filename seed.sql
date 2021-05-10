USE employee_DB;

INSERT INTO department (department)
VALUES ('Management'), ('Customer Service'), ('Advising'), ('Marketing');

INSERT INTO role (title, salary, department_id)
VALUES 
    ('Retail Manager', 90000, 1),
    ('Marketing Manager', 45000, 1),
    ('Medical Manager', 70000, 1),
    ('Retail Stock Worker', 50000, 2),
    ('Retail Cashier', 70000, 2),
    ('Retail Store Associate', 50000, 2),
    ('Marketing Assistant', 75000, 4),
    ('Assistant Nurse', 45000, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
    ('Noelle', 'Miller', 1, NULL),
    ('Delia', 'Moore', 4, 1),
    ('Clarkson', 'White', 5, 1),
    ('Edith', 'Jones', 6, 1),
    ('Quincy', 'Brown', 2, NULL),
    ('Grayson', 'Lee', 7, 5),
    ('Valerie', 'Lewis', 3, NULL),
    ('Andrea', 'Walker', 8, 7);