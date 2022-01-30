DELETE FROM bag
WHERE users = $1
AND description = $2;