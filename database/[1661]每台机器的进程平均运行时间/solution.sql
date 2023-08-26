SELECT
    machine_id,
    ROUND(
        AVG(
            CASE
                WHEN activity_type = 'start' THEN Activity.timestamp * -1
                WHEN activity_type = 'end' THEN Activity.timestamp
            END
        ) * 2,
        3
    ) AS processing_time
FROM
    Activity
GROUP BY
    machine_id;