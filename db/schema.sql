/* Schema SQL File */
CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers(
  id INTEGER NOT NULL AUTO-INCREMENT PRIMARY KEY,
  burger_name VARCHAR(100),
  devoured BOOLEAN,
  date TIMESTAMP
);



