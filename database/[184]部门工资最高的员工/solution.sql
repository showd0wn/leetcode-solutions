SELECT
    Department.name AS 'Department',
    Employee.name   AS 'Employee',
    salary
FROM
    Employee
    JOIN Department ON Employee.departmentId = Department.id
WHERE
    (departmentId, salary) IN (
        SELECT
            departmentId,
            MAX(salary)
        FROM
            Employee
        GROUP BY
            departmentId
    );