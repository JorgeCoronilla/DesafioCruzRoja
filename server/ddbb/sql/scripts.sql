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
        question INT,
        date_ DATETIME,
        PRIMARY KEY(id)
    ); 
    
     CREATE TABLE answers(
        id INT AUTO_INCREMENT,
        question INT,
        date_ DATETIME,
        fk_user_id_user INT,
        fk_frequent_questions_id INT,
        PRIMARY KEY(id),
        FOREIGN KEY (fk_frequent_questions_id) REFERENCES frequent_questions(id),
        FOREIGN KEY (fk_user_id_user) REFERENCES users(user_id)
    );