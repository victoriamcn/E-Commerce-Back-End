-- DROP DATABASE
DROP DATABASE IF EXISTS ecommerce_db;

-- CREATE DATABASE
CREATE DATABASE ecommerce_db;

USE ecommerce_db;

CREATE TABLE Category (
    id INT AUTO_INCREMENT PRIMARY KEY,
    category_name VARCHAR(30) NOT NULL -- Doesn't allow null values
);

CREATE TABLE Product (
    id INT AUTO_INCREMENT PRIMARY KEY,
    product_name VARCHAR(30) NOT NULL, -- Doesn't allow null values
    price DECIMAL NOT NULL, -- Validates that the value is a decimal
    stock INT(10) NOT NULL, -- Validates that the value is numeric
    category_id INT,
    FOREIGN KEY (category_id) 
    REFERENCES Category(id)
    ON DELETE CASCADE
);

CREATE TABLE Tag (
    id INT AUTO_INCREMENT PRIMARY KEY,
    tag_name VARCHAR(30)
);

CREATE TABLE ProductTag (
	id INT AUTO_INCREMENT PRIMARY KEY,
	product_id INT,
	FOREIGN KEY (product_id) 
	REFERENCES Product (id)
	ON DELETE CASCADE,
	tag_id INT, 
	FOREIGN KEY (tag_id)
	REFERENCES Tag (id)
	ON DELETE CASCADE
);