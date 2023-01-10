#DROP DATABASE dbTest;
    CREATE DATABASE dbTest;
    USE dbTest;
    CREATE TABLE users(
        user_id INT AUTO_INCREMENT,
        user_name VARCHAR(50),
        surname VARCHAR(50),
        about_me VARCHAR(250),
		langauges VARCHAR(50),
        email VARCHAR(50) UNIQUE,
        phone VARCHAR(20),
        studies VARCHAR(50),
        country VARCHAR(30),
        age VARCHAR(3),
        emotional_support INT,
        legal_support INT,
        collab_individual BOOLEAN,
        collab_institution BOOLEAN,
        job BOOLEAN,
        password_ CHAR(64) NOT NULL,
        banned_users JSON,
		favs JSON,
        PRIMARY KEY(user_id)
    ); 
    
CREATE TABLE collabs(
       user_id INT AUTO_INCREMENT,
        user_name VARCHAR(50),
        surname VARCHAR(50),
        about_me VARCHAR(250),
		langauges VARCHAR(50),
        email VARCHAR(50) UNIQUE,
        phone VARCHAR(20),
        studies VARCHAR(50),
        country VARCHAR(30),
        age VARCHAR(3),
        emotional_support INT,
        legal_support INT,
        collab_individual BOOLEAN,
        collab_institution BOOLEAN,
        job BOOLEAN,
        password_ CHAR(64) NOT NULL,
        banned_users JSON,
		favs JSON,
        PRIMARY KEY(user_id)
    ); 
    
    CREATE TABLE messages(
        id INT AUTO_INCREMENT,
        fk_user_id_sender INT,
        fk_user_id_recipient INT,
		title VARCHAR(50),
        message VARCHAR(250),
        date_ DATETIME,
        PRIMARY KEY(id),
		FOREIGN KEY (fk_user_id_sender) REFERENCES users(user_id),
        FOREIGN KEY (fk_user_id_recipient) REFERENCES users(user_id)
    ); 
    
    CREATE TABLE reviews(
        id INT AUTO_INCREMENT,
        fk_user_id_sender INT,
        fk_user_id_recipient INT,
		title VARCHAR(50),
        review VARCHAR(250),
        stars INT, 
        date_ DATETIME,
        PRIMARY KEY(id),
		FOREIGN KEY (fk_user_id_sender) REFERENCES users(user_id),
        FOREIGN KEY (fk_user_id_recipient) REFERENCES users(user_id)
    ); 
    
 CREATE TABLE frequent_questions(
        id INT AUTO_INCREMENT,
        fk_user_id INT,
        question VARCHAR(200),
        date_ DATETIME,
        PRIMARY KEY(id),
        FOREIGN KEY (fk_user_id) REFERENCES users(user_id)
    ); 
    
     CREATE TABLE answers(
        id INT AUTO_INCREMENT,
        date_ DATETIME,
        fk_user_id_user INT,
        fk_frequent_questions_id INT,
        answer VARCHAR(200),
        PRIMARY KEY(id),
        FOREIGN KEY (fk_frequent_questions_id) REFERENCES frequent_questions(id),
        FOREIGN KEY (fk_user_id_user) REFERENCES users(user_id)
    );

insert into users VALUES (null, 'Jorge', 'Coronilla', 'Hola, soy Jorge','Spanish, English, Greek', 'jorge@gmail.com', '698343434', 'bootcamp','Spain' ,'43','0','0',false,false,true,'$2a$08$pEUVH3MZ1xerNnGwmid4sOwEWEcIykmQByyj5zQzAk5/XY1gPTD5a', JSON_ARRAY(4, 5, 6), JSON_ARRAY(0));
insert into users VALUES (null, 'Gerardo', 'Mir', 'Hola, soy Gerardo','Spanish, English, Catalan', 'gerardo@gmail.com', '698343435', 'Masters Degre','Spain', '30','0','0',false,false,true,'$2a$08$FyHTlLvNbgaPR8OE0L2dC..HXsrUzpgydDdHOzwPfUrInhmNOUuGO', JSON_ARRAY(4, 5, 6), JSON_ARRAY(0));

insert into collabs VALUES (null, 'Henalu', 'Paes', 'Hola, soy Henalu', 'Spanish, Asturian, Hawaian', 'henalu@gmail.com', '698343436', 'bootcamp','Spain' ,'31','0','0',false,false,true,'$2a$08$pEUVH3MZ1xerNnGwmid4sOwEWEcIykmQByyj5zQzAk5/XY1gPTD5a', JSON_ARRAY(4, 5, 6), JSON_ARRAY(0));
insert into collabs VALUES (null, 'Sergio', 'Ovejero', 'Hola, soy Sergio','Spanish, English, Madrilenian', 'sergio@gmail.com', '698343437', 'Masters Degre','Spain', '31','0','0',false,false,true,'$2a$08$FyHTlLvNbgaPR8OE0L2dC..HXsrUzpgydDdHOzwPfUrInhmNOUuGO', JSON_ARRAY(4, 5, 6), JSON_ARRAY(0));

select * from users;
select * from collabs;
