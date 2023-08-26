SELECT
    Prices.product_id,
    ROUND(SUM(units * price) / SUM(units), 2) AS average_price
FROM
    UnitsSold
    LEFT JOIN Prices ON Prices.product_id = UnitsSold.product_id
WHERE
    purchase_date BETWEEN start_date AND end_date
GROUP BY
    product_id;