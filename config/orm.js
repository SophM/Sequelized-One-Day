// ---------------------------------------------------
// Dependencies
// --------------------------------------------------- 

// load the "connection.js" file to import mySQL connection
var connection = require("./connection.js");

// ---------------------------------------------------
// ORM = object with all the SQL statement functions
// --------------------------------------------------- 

// create the ORM
var orm = {
    // define a method called selectAll
    selectAll: function(tableInput, cb){
        // define the query
        var queryString = "SELECT * FROM ??;";
        // connect to the database, do the request and process the results
        connection.query(queryString, [tableInput], function(err, results) {
            // if err, tell us
            if (err) {
                throw err;
            }
            // send the results as an argument in a callback function
            // console.log(results);
            cb(results);
        });
    },
    // define a method called selectOne
    insertOne: function(tableInput, ColName, Val, cb) {
        // define the query
        var queryString = "INSERT INTO ?? (??) VALUES (?)";
        // connect to the database, do the request and process the results
        connection.query(queryString, [tableInput, ColName, Val], function(err, results) {
            // if err, tell us
            if (err) {
                throw err;
            }
            // send the results as an argument in a callback function
            // console.log(results);
            cb(results);
        });
    },
    // define a method called updateOne
    updateOne: function(tableInput, ColOneName, NewVal, ColTwoName, Val, cb) {
        // define the query
        var queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?";
        // connect to the database, do the request and process the results
        connection.query(queryString, [tableInput, ColOneName, NewVal, ColTwoName, Val], function(err, results) {
            // if err, tell us
            if (err) {
                throw err;
            }
            // send the results as an argument in a callback function
            cb(results);
        });
    }
};

// export the ORM to make it available for other files
module.exports = orm;