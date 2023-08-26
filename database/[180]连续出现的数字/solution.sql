SELECT DISTINCT
    num AS ConsecutiveNums
FROM
    (
        SELECT
            num,
            LEAD(num, 1) OVER () AS num2,
            LEAD(num, 2) OVER () AS num3
        FROM
            LOGS
    ) AS tmp
WHERE
    num = num2
    AND num = num3;