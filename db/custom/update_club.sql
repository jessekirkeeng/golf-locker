UPDATE custom 
SET image_url
= $2
WHERE product_id = $1;
SELECT * 
FROM custom
WHERE custom_id = $3; 