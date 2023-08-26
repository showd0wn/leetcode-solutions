SELECT
    *
FROM
    Patients
WHERE
    conditions REGEXP '^DIAB1|\\sDIAB1';

-- 方法二
SELECT
    *
FROM
    Patients
WHERE
    conditions LIKE 'DIAB1%'
    OR conditions LIKE '% DIAB1%';