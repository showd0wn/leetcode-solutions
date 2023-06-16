SELECT
    w2.id
FROM
    Weather AS w1
    INNER JOIN Weather AS w2 ON w1.recordDate = w2.recordDate - INTERVAL 1 DAY
WHERE
    w1.temperature < w2.temperature;