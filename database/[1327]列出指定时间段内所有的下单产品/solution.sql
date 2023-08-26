SELECT
    product_name,
    SUM(unit)    AS unit
FROM
    Orders
    LEFT JOIN Products ON Orders.product_id = Products.product_id
WHERE
    order_date BETWEEN '2020-02-01' AND '2020-02-29'
GROUP BY
    Products.product_id,
    product_name
HAVING
    SUM(unit) >= 100;