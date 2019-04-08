-- Drops the oneDay_db if it exists currently
DROP DATABASE IF EXISTS oneDay_db;
-- Creates the "oneDay_db" database
CREATE DATABASE oneDay_db;
-- specify that all of the following code will affect oneDay_db
USE oneDay_db;

-- create a table called "bucketLists" within oneDay_db
CREATE TABLE bucketLists (
    -- create a numeric column called "item_id", which can't be null and will automatically increment as we create new rows
    id INT NOT NULL AUTO_INCREMENT,
    -- create a text column, which can't be null
    thing_name TEXT NOT NULL,
    -- create a boolean column, with a default value = false
    done BOOLEAN DEFAULT false,
    -- set the "id" column as the primary key
    PRIMARY KEY(id)
);
