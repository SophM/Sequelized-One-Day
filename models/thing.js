// ---------------------------------------------------
// Dependencies
// --------------------------------------------------- 

// load the "orm.js" file to import the ORM to use the methods within it
var orm = require("../config/orm.js");


// ---------------------------------------------------
// Model
// --------------------------------------------------- 

// create the methods that will call on the ORM methods
var thing = {
    selectAll: function(cb) {
        // call the "selectAll" method from the ORM
        orm.selectAll("bucketLists", function(results) {
            // send the results as an argument in a callback function
            cb(results);
        });
    },
    insertOne: function(ColName, Val, cb) {
        // call the "insertOne" method from the ORM
        orm.insertOne("bucketLists", ColName, Val, function(results) {
            // send the results as an argument in a callback function
            cb(results);
        })
    },
    updateOne: function(ColOneName, NewVal, ColTwoName, Val, cb) {
        // call the "updateOne" method from the ORM
        orm.updateOne("bucketLists", ColOneName, NewVal, ColTwoName, Val, function(results) {
            // send the results as an argument in a callback function
            cb(results);
        })
    }
}

// Export the methods for the controller "oneday_Controller.js"
module.exports = thing;