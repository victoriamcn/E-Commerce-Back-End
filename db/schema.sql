-- DROP DATABASE
DROP DATABASE IF EXISTS ecommerce_db;

-- CREATE DATABASE
CREATE DATABASE ecommerce_db;

USE ecommerce_db

CREATE TABLE Category (
    id INT AUTO_INCREMENT PRIMARY KEY,
    category_name VARCHAR(30) NOT NULL
);

CREATE TABLE Product (
    id INT AUTO_INCREMENT,
    product_name VARCHAR(30) NOT NULL,
    price ,
    stock ,
    category_id
);

CREATE TABLE Tag (
    id ,
    tag_name 
);

CREATE TABLE ProductTag (
    id ,
    product_id,
    tag_id
);
