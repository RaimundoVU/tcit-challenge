CREATE DATABASE postsdb;


\c postsdb;

CREATE TABLE posts(
	id SERIAL PRIMARY KEY,
	name VARCHAR(255),
	description VARCHAR(255)
);

INSERT INTO posts( name, description )
	VALUES ('NOMBRE1', 'hola como estan');
