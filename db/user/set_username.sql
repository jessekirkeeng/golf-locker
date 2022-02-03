UPDATE users
SET username = null
WHERE id = $1;