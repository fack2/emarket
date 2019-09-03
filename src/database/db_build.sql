BEGIN;

DROP TABLE IF EXISTS "user" CASCADE;
DROP TABLE IF EXISTS "category" CASCADE;
DROP TABLE IF EXISTS "product" CASCADE;
DROP TABLE IF EXISTS "cartItem" CASCADE;
DROP TABLE IF EXISTS "cart" CASCADE;
DROP TABLE IF EXISTS "order" CASCADE;

CREATE TABLE "user" (
    ID SERIAL PRIMARY KEY,
    name VARCHAR(150) NOT NULL,
    email VARCHAR(40) unique,
    password VARCHAR(40),
    address VARCHAR(100),
    phone VARCHAR(13)
);

CREATE TABLE category (
    ID SERIAL PRIMARY KEY,
    name VARCHAR(150) NOT NULL,
    img text
);

CREATE TABLE product (
    ID SERIAL PRIMARY KEY,
    name VARCHAR(150) NOT NULL,
    price float,
    description varchar(400),
    categoryID INTEGER REFERENCES category (ID)
);

CREATE TABLE "order" (
    ID SERIAL PRIMARY KEY,
    name VARCHAR(150) NOT NULL,
    address VARCHAR(100),
    phone VARCHAR(13)
);

CREATE TABLE "cart" (
    ID SERIAL PRIMARY KEY,
    userID INTEGER REFERENCES "user" (ID) ,
    orderID INTEGER REFERENCES "order" (ID) 
);

CREATE TABLE "cartItem" (
    ID SERIAL PRIMARY KEY,
    total float,
    quantity int,
    cartID INTEGER REFERENCES cart (ID), 
    productID INTEGER REFERENCES product (ID) 
);
COMMIT;
