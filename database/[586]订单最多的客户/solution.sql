SELECT
    customer_number
FROM
    Orders
GROUP BY
    customer_number
ORDER BY
    COUNT(*) DESC
LIMIT
    1;

-- 进阶
SELECT
    customer_number
FROM
    Orders
GROUP BY
    customer_number
HAVING
    COUNT(*) = (
        SELECT
            MAX(order_counts)
        FROM
            (
                SELECT
                    customer_number,
                    COUNT(order_number) AS order_counts
                FROM
                    Orders
                GROUP BY
                    customer_number
            ) AS tmp
    );