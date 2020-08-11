Here are the steps to run the Project :

DATABASE USED : MYSQL
DATABASE NAME : mbmanager
Credentials   : set it in /config/config.json file.

TABLES :

1. manager_data : The table's schema is as follows :

Fields    Datatypes   key

empid     INT         PRI
email     VARCHAR     PRI
firstname VARCHAR
lastname  VARCHAR
pwd       VARCHAR
address   VARCHAR
dob       DATE
company   VARCHAR

Query to create Table :

CREATE TABLE mbmanager.manager_data (
empid INT AUTO_INCREMENT,
email VARCHAR(32) NOT NULL UNIQUE,
firstname VARCHAR(32) NOT NULL,
lastname VARCHAR(32) NOT NULL,
pwd VARCHAR(32) NOT NULL,
address VARCHAR(64) NOT NULL,
dob DATE NOT NULL,
company VARCHAR(32) NOT NULL,
primary key (empid , email)
);

1. employee_data : The table's schema is as follows :

Fields    Datatypes   key

empid     INT         PRI
firstname VARCHAR
lastname  VARCHAR
address   VARCHAR
dob       DATE
mobile    VARCHAR
city      VARCHAR

Query to create table :

CREATE TABLE mbmanager.employee_data (
empid INT AUTO_INCREMENT,
firstname VARCHAR(32) NOT NULL,
lastname VARCHAR(32) NOT NULL,
address VARCHAR(64) NOT NULL,
dob DATE NOT NULL,
mobile VARCHAR(10) NOT NULL,
city VARCHAR(10) NOT NULL,
primary key (empid)
);

Once the Database and the tables are ready. Please follow below procedures to run the backend :

1. Keep MYSQL Database running
2. Open BACKEND Project and run command 'npm install' & then 'npm start' , it will run on port 5000.
3. Keep the server running.
4. Run front end.