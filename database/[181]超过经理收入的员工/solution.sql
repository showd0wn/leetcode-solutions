SELECT
    e1.name AS 'Employee'
FROM
    Employee AS e1 INNER JOIN Employee AS e2
ON
    e1.managerId = e2.id AND e1.salary > e2.salary;
