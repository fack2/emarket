BEGIN;

DROP TABLE IF EXISTS "user" CASCADE;
DROP TABLE IF EXISTS "category" CASCADE;
DROP TABLE IF EXISTS "product" CASCADE;
DROP TABLE IF EXISTS "orderItem" CASCADE;
DROP TABLE IF EXISTS "order" CASCADE;


CREATE TABLE "user"
(
    ID SERIAL PRIMARY KEY,
    name VARCHAR(150) NOT NULL,
    email VARCHAR(40) unique NOT NULL,
    password VARCHAR(80),
    address VARCHAR(100),
    phone VARCHAR(13)
);

CREATE TABLE category
(
    ID SERIAL PRIMARY KEY,
    name VARCHAR(150) NOT NULL,
    img text
);

CREATE TABLE product
(
    ID SERIAL PRIMARY KEY,
    name VARCHAR(150) NOT NULL,
    img text,
    price float,
    description varchar(400),
    categoryID INTEGER REFERENCES category (ID)
);

CREATE TABLE "order"
(
    ID SERIAL PRIMARY KEY,
    name VARCHAR(150) NOT NULL,
    address VARCHAR(100),
    phone VARCHAR(13),
    note VARCHAR (150),
    total float,
    userID INTEGER REFERENCES "user" (ID) ,
    isPaid boolean
);


CREATE TABLE "orderItem"
(
    ID SERIAL PRIMARY KEY,
    total float,
    quantity int NOT NULL,
    orderID INTEGER REFERENCES "order" (ID),
    productID INTEGER REFERENCES product (ID)
);
COMMIT;
