DELETE FROM custom
WHERE product_id = $1;
SELECT * FROM custom
WHERE custom_id = $2;