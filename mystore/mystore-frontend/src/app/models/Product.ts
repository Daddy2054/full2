export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    url: string;
    quantity: number;
    category: string;
  }
  
/*
CREATE TABLE products (
    id serial PRIMARY KEY,
    name varchar,
    price integer,
    description varchar,
    url varchar,
    quantity integer 
);
*/