DROP DATABASE chat;
CREATE DATABASE chat;

USE chat;

CREATE TABLE messages(
  id SMALLINT NOT NULL,
  content VARCHAR(255) NOT NULL,
  roomID SMALLINT NOT NULL,
  userID SMALLINT NOT NULL,
  PRIMARY KEY (id)
);

/* Create other tables and define schemas for them here! */

CREATE TABLE rooms (
  id SMALLINT NOT NULL,
  roomname VARCHAR(255) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE users (
  id SMALLINT NOT NULL,
  username VARCHAR(255) NOT NULL,
  PRIMARY KEY (id)
);


/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/


