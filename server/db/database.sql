CREATE DATABASE shopapp;

CREATE TABLE users(
    user_id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    username VARCHAR(255) NOT NULL,
    password VARCHAR(255),
    created_at DATE DEFAULT current_date
);

CREATE TABLE shop_items(
    item_id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description VARCHAR(5000) NOT NULL,
    item_img BYTEA NOT NULL
);

CREATE TABLE user_cart(
    user_id INT NOT NULL,
    item_id INT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users (user_id),
    FOREIGN KEY (item_id) REFERENCES shop_items (item_id)
);