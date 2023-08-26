SELECT
    Customers.name AS customers
FROM
    Customers
WHERE
    id NOT IN(
        SELECT
            customerId
        FROM
            Orders
    );