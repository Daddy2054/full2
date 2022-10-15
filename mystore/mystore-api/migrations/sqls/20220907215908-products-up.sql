CREATE TABLE products (
    id serial PRIMARY KEY,
    name varchar NOT NULL DEFAULT 'product_name',
    price real NOT NULL DEFAULT 0,
    category varchar DEFAULT 'default',
    description varchar,
    url varchar,
    quantity integer
);

