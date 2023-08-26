SELECT
    employee_id,
    IF(
        NAME LIKE 'M%'
        OR MOD(employee_id, 2) = 0,
        0,
        salary
    ) bonus
FROM
    Employees
ORDER BY
    employee_id;