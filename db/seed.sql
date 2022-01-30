CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(64) NOT NULL,
  password VARCHAR(64) NOT NULL
);

CREATE TABLE product (
  id SERIAL PRIMARY KEY,
  description TEXT,
  image_url TEXT
);

CREATE TABLE bag (
  id SERIAL PRIMARY KEY,
  description TEXT,
  users INTEGER REFERENCES users(id),
  prod INTEGER REFERENCES product(id)
);

CREATE TABLE custom (
  id SERIAL PRIMARY KEY,
  custom_id INTEGER REFERENCES users(id),
  description TEXT,
  image_url TEXT,
);