SELECT
    query_name,
    ROUND(AVG(rating / POSITION), 2) AS quality,
    ROUND(AVG(rating < 3) * 100, 2)  AS poor_query_percentage
FROM
    Queries
GROUP BY
    query_name;

-- 方法二
SELECT
    query_name,
    ROUND(AVG(rating / POSITION), 2)           AS quality,
    ROUND(SUM(rating < 3) / COUNT(*) * 100, 2) AS poor_query_percentage
FROM
    Queries
GROUP BY
    query_name;

-- 方法三
SELECT
    query_name,
    ROUND(AVG(rating / POSITION), 2) AS quality,
    ROUND(
        COUNT(
            rating < 3
            OR NULL
        ) / COUNT(*) * 100,
        2
    ) AS poor_query_percentage
FROM
    Queries
GROUP BY
    query_name;