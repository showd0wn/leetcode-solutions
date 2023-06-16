DELETE FROM Person
WHERE
    id NOT IN (
        SELECT
            MIN(id)
        FROM
            (
                SELECT
                    id,
                    email
                FROM
                    Person
            ) tmp
        GROUP BY
            email
    );