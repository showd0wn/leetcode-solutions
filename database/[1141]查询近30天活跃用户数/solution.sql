SELECT
    activity_date AS `day`,
    COUNT(*)      AS active_users
FROM
    (
        SELECT DISTINCT
            user_id,
            activity_date
        FROM
            Activity
    ) tmp
GROUP BY
    activity_date
HAVING
    activity_date BETWEEN DATE_SUB('2019-07-27', INTERVAL 29 DAY) AND '2019-07-27';

-- 方法二
SELECT
    activity_date           AS `day`,
    COUNT(DISTINCT user_id) AS active_users
FROM
    Activity
WHERE
    DATE_ADD(activity_date, INTERVAL 29 DAY) >= '2019-07-27'
    AND activity_date <= '2019-07-27'
GROUP BY
    activity_date;