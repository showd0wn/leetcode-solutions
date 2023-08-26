SELECT
    *
FROM
    cinema
WHERE
    MOD(id, 2) = 1
    AND cinema.description <> 'boring'
ORDER BY
    rating DESC;