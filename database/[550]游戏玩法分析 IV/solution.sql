SELECT
    ROUND(AVG(a2.event_date IS NOT NULL), 2) AS fraction
FROM
    (
        SELECT
            player_id,
            MIN(event_date) AS event_date
        FROM
            Activity
        GROUP BY
            player_id
    ) AS a1
    LEFT JOIN Activity AS a2 ON a1.player_id = a2.player_id
    AND a1.event_date = DATE_SUB(a2.event_date, INTERVAL 1 DAY);