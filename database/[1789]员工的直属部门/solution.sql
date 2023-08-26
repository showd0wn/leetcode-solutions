SELECT
    employee_id,
    IF(
        COUNT(*) = 1,
        SUM(department_id),
        SUM(IF(primary_flag = 'Y', department_id, 0))
    ) AS department_id
FROM
    Employee
GROUP BY
    employee_id;

-- 方法二
SELECT
    employee_id,
    SUM(department_id) AS department_id
FROM
    Employee
GROUP BY
    employee_id
HAVING
    COUNT(department_id) = 1
UNION
SELECT
    employee_id,
    department_id
FROM
    Employee
WHERE
    primary_flag = 'Y';