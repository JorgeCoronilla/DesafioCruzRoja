#DROP DATABASE dbTest;
    CREATE DATABASE dbTest;
    USE dbTest;
    
        #drop table users
    CREATE TABLE users(
        user_id INT AUTO_INCREMENT,
        user_name VARCHAR(50),
        user_surname VARCHAR(50),
        about_me VARCHAR(250),
        email VARCHAR(50) UNIQUE,
        password_ CHAR(64) NOT NULL,
        year_birth INT,
        gender VARCHAR(15),
        country VARCHAR(30),
        mother_tongue VARCHAR(50),
        years_in VARCHAR(50),
        working VARCHAR(50),
        studies VARCHAR(50),
        support_type VARCHAR(50),
        expert BOOLEAN,
        area VARCHAR(50),
        pic VARCHAR(50),
        created_at datetime DEFAULT NULL COMMENT 'created time',
		updated_at datetime DEFAULT NULL COMMENT 'updated time',

        PRIMARY KEY(user_id)  
    ); 
    
     #SHOW GLOBAL VARIABLES LIKE 'FOREIGN_KEY_CHECKS';
     #SET GLOBAL FOREIGN_KEY_CHECKS=1;
 #DROP TABLE channels;

    
    CREATE TABLE channels(
        id INT AUTO_INCREMENT,
        user_id_sender INT,
		pic_sender VARCHAR(50),
        user_name_sender  VARCHAR(50),
        user_id_recipient INT,
        pic_recipient VARCHAR(50),
        user_name_recipient  VARCHAR(50),
        state VARCHAR(10),
        createdat datetime DEFAULT NULL COMMENT 'created time',
		updatedat datetime DEFAULT NULL COMMENT 'updated time',
        PRIMARY KEY(id)
    ); 
    #insert into channels VALUES (null, 3,null,null, 2,null,null, "active","2021-01-12", "2021-01-12");
    insert into channels VALUES (null, 3,'image2.png','Henalu', 2,'image2.jpg','Jorge', "active","2021-01-12", "2021-01-12");
    #insert into channels VALUES (null, 3, 2, "active","2021-01-12", "2021-01-12");
     #insert into channels VALUES (null, 2, 5, "archived","2021-01-12", "2021-01-12");
    
  
    
    
    
#DROP TABLE messages
    CREATE TABLE messages(
        id INT AUTO_INCREMENT,
        fk_user_id_sender INT,
        fk_user_id_recipient INT,
        fk_channel_id INT,
		#title VARCHAR(50),
        message VARCHAR(250),
        createdat datetime DEFAULT NULL COMMENT 'created time',
		updatedat datetime DEFAULT NULL COMMENT 'updated time',
        PRIMARY KEY(id),
        FOREIGN KEY (fk_channel_id) REFERENCES channels(id)
    ); 
    
    CREATE TABLE reviews(
        id INT AUTO_INCREMENT,
        fk_user_id_sender INT,
        fk_user_id_recipient INT,
        review VARCHAR(250),
        stars INT, 
         created_at datetime DEFAULT NULL COMMENT 'created time',
		updated_at datetime DEFAULT NULL COMMENT 'updated time',
        PRIMARY KEY(id),
		FOREIGN KEY (fk_user_id_sender) REFERENCES users(user_id),
        FOREIGN KEY (fk_user_id_recipient) REFERENCES users(user_id)
    ); 
    
     CREATE TABLE favs(
        id INT AUTO_INCREMENT,
        fk_user_id_sender INT,
        fk_user_id_recipient INT,
         created_at datetime DEFAULT NULL COMMENT 'created time',
		updated_at datetime DEFAULT NULL COMMENT 'updated time',
        PRIMARY KEY(id),
		FOREIGN KEY (fk_user_id_sender) REFERENCES users(user_id),
        FOREIGN KEY (fk_user_id_recipient) REFERENCES users(user_id)
    ); 
    
 CREATE TABLE frequent_questions(
        id INT AUTO_INCREMENT,
        fk_user_id INT,
        question VARCHAR(200),
        created_at datetime DEFAULT NULL COMMENT 'created time',
		updated_at datetime DEFAULT NULL COMMENT 'updated time',
        PRIMARY KEY(id),
        FOREIGN KEY (fk_user_id) REFERENCES users(user_id)
    ); 

     CREATE TABLE answers (
    id INT AUTO_INCREMENT,
    fk_user_id_user INT,
    fk_frequent_questions_id INT,
    answer VARCHAR(200),
     created_at datetime DEFAULT NULL COMMENT 'created time',
		updated_at datetime DEFAULT NULL COMMENT 'updated time',
    PRIMARY KEY (id),
    FOREIGN KEY (fk_frequent_questions_id)
    REFERENCES frequent_questions (id),
    FOREIGN KEY (fk_user_id_user)
    REFERENCES users (user_id)
);

insert into users VALUES (null, 'Gerardo', 'Mir', 'Hola, soy Gerardo','gerardo@gmail.com',  '$2a$08$vf6oSJOftydbsA4LjT4nleBbJ3mnLiFmn/tc01KEcPiJ1aulf4fLK', 1979, 
"Masculino",'Spain','Spanish','Más de dos años','Sí','Master', 'Emocional', false,'Sierra de la Cabrera','image2.jpg',"2021-01-12", "2021-01-12");
  
insert into users VALUES (null, 'Jorge', 'Coronilla', 'Hola, soy Jorge','jorge@gmail.com',  '$2a$08$vf6oSJOftydbsA4LjT4nleBbJ3mnLiFmn/tc01KEcPiJ1aulf4fLK', 1979, 
"Masculino",'Spain','Spanish','Más de dos años','Sí','Master', 'Emocional', false,'Sierra de la Cabrera','image2.jpg',"2021-01-12", "2021-01-12");

insert into users VALUES (null, 'Henalu', 'Paes', 'Hola, soy Henalu', 'henalu@gmail.com', '$2a$08$vf6oSJOftydbsA4LjT4nleBbJ3mnLiFmn/tc01KEcPiJ1aulf4fLK', 1979, 
"Masculino",'Spain','Spanish','Más de dos años','Sí','Master', 'Emocional',false,'Sierra de la Cabrera','image2.jpg',"2021-01-12", "2021-01-12");

insert into users VALUES (null, 'Sergio', 'Ovejero', 'Hola, soy Sergio', 'sergio@gmail.com',  '$2a$08$vf6oSJOftydbsA4LjT4nleBbJ3mnLiFmn/tc01KEcPiJ1aulf4fLK', 1979, 
"Masculino",'Spain','Spanish','Más de dos años','Sí','Master', 'Emocional',false,'Sierra de la Cabrera','image2.jpg',"2021-01-12", "2021-01-12");

insert into users VALUES (null, 'María', 'De la Verde', 'Hola, soy María', 'maria@gmail.com',  '$2a$08$vf6oSJOftydbsA4LjT4nleBbJ3mnLiFmn/tc01KEcPiJ1aulf4fLK', 1979,
 "Femenino",'Spain','Spanish','Más de dos años','Sí','Master', 'Emocional',false,'Sierra de la Cabrera','image1.jpg',"2021-01-12", "2021-01-12");

insert into users VALUES (null, 'Lydia', 'Vega', 'Hola, soy Lydia', 'lydia@gmail.com',  '$2a$08$vf6oSJOftydbsA4LjT4nleBbJ3mnLiFmn/tc01KEcPiJ1aulf4fLK', 1979, 
"Femenino",'Spain','Spanish','Más de dos años','Sí','Master', 'Emocional',false,'Sierra de la Cabrera','image3.jpg',"2021-01-12", "2021-01-12");

insert into users VALUES (null, 'Jose Angel', 'Contreras', 'Hola, soy Jose Angel', 'joseangel@gmail.com',  '$2a$08$vf6oSJOftydbsA4LjT4nleBbJ3mnLiFmn/tc01KEcPiJ1aulf4fLK', 1979, 
"Masculino",'Spain','Spanish','Más de dos años','Sí','Master', 'Emocional',false,'Sierra de la Cabrera','image2.jpg',"2021-01-12", "2021-01-12");

insert into users VALUES (null, 'Elena', 'Contreras', 'Hola, soy Jose Elena', 'elena@gmail.com',  '$2a$08$vf6oSJOftydbsA4LjT4nleBbJ3mnLiFmn/tc01KEcPiJ1aulf4fLK', 1979, 
"Femenino",'Spain','Spanish','Más de dos años','Sí','Master', 'Emocional',false,'Sierra de la Cabrera','image3.jpg',"2021-01-12", "2021-01-12");

#insert into messages VALUES (null, 2, 3, 6, "Dándole caña","2021-01-12", "2021-01-12");
       #insert into messages VALUES (null, 3, 2, 6, "Qué tal Henalu","2021-01-12", "2021-01-12");
select * from users;

select * from channels;
select * from messages;
