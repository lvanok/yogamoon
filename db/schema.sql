### Schema

CREATE TABLE users
(
	id int NOT NULL AUTO_INCREMENT,
	username varchar(255) NOT NULL,
	email varchar(255) NOT NULL,
	password_hash varchar(255) NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE yogis
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	isyogi BOOLEAN DEFAULT false,
	user_id integer,
	PRIMARY KEY (id),
	FOREIGN KEY(user_id) REFERENCES users(id)
);
