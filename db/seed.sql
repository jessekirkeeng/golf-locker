CREATE TABLE product (
  product_id SERIAL PRIMARY KEY,
  description TEXT,
  image_url TEXT
);

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(64) NOT NULL,
  password VARCHAR(64) NOT NULL
);

CREATE TABLE bag (
  product_id SERIAL PRIMARY KEY,
  bag_id INTEGER REFERENCES users(id),
  description TEXT,
  image_url TEXT
);

CREATE TABLE custom (
  product_id SERIAL PRIMARY KEY,
  custom_id INTEGER REFERENCES users(id),
  description TEXT,
  image_url TEXT,
);