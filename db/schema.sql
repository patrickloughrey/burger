/* Schema SQL File */
CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers(
  id INTEGER NOT NULL AUTO_INCREMENT,
  burger_name VARCHAR(20),
  devoured BOOLEAN,
  date TIMESTAMP,
  PRIMARY KEY(id)
);



