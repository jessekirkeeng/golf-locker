SELECT bag.description, prod, image_url FROM bag
JOIN users ON bag.users = users.id
JOIN product ON bag.prod = product.id
WHERE users.id = $1;
-- SELECT * FROM bag
-- WHERE bag.users = $1;