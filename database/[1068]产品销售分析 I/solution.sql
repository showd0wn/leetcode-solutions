SELECT
    product_name,
    Sales.year,
    price
FROM
    Sales
    LEFT JOIN Product ON Sales.product_id = Product.product_id;