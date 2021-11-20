DELETE FROM bag
WHERE product_id = $1;
SELECT * 
FROM bag
WHERE bag_id = $2;