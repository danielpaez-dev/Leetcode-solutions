SELECT p.product_name,
    s.year,
    s.price
FROM Product as p
    JOIN Sales as s USING(product_id)