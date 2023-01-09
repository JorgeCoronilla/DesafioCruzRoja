#DROP DATABASE teleQuizz;
    CREATE DATABASE dbTest;
    USE dbTest;
    CREATE TABLE users(
        id INT AUTO_INCREMENT,
        user_name VARCHAR(100) UNIQUE,
		langauges VARCHAR(50),
        email VARCHAR(50),
        password_ CHAR(64) NOT NULL,
        role_ VARCHAR(50),
        PRIMARY KEY(id)
    ); 
    
CREATE TABLE collabs(
        id INT AUTO_INCREMENT,
        user_name VARCHAR(100) UNIQUE,
		langauges VARCHAR(50),
        email VARCHAR(50),
        password_ CHAR(64) NOT NULL,
        role_ VARCHAR(50),
        skills VARCHAR(50),
        PRIMARY KEY(id)
    ); 



insert into users VALUES (null, 'Jorge Coronilla', 'Spanish, English, Greek', 'jorge@gmail.com', '$2a$08$pEUVH3MZ1xerNnGwmid4sOwEWEcIykmQByyj5zQzAk5/XY1gPTD5a', 'Director');
insert into users VALUES (null, 'Gerardo Mir', 'Spanish, English, Catalan', 'gerardo@gmail.com', '$2a$08$FyHTlLvNbgaPR8OE0L2dC..HXsrUzpgydDdHOzwPfUrInhmNOUuGO', 'Director');

select * from users;