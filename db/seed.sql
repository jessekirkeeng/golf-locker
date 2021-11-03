CREATE TABLE product (
  product_id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(86) NOT NULL,
  description VARCHAR(86) NOT NULL,
  price INTEGER NOT NULL,
  image_url TEXT NOT NULL
);

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(64) NOT NULL,
    password VARCHAR(64) NOT NULL
);

CREATE TABLE bag (
    id SERIAL PRIMARY KEY,
    bag_id INTEGER REFERENCES users(id),
    
)