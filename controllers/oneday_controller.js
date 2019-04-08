// ---------------------------------------------------
// Dependencies
// ---------------------------------------------------

// load the Express node package
var express = require("express");

// load the "thing.js" to import the model (thing.js) to use the methods within it
var thing = require("../models/thing.js");


// ---------------------------------------------------
// Define the routes
// ---------------------------------------------------

// create an object to perform the routing functions
var router = express.Router();

// define the route to display all the data from on oneDay_db
router.get("/", function(req, res) {
    // call the "selectAll" method from the model
    thing.selectAll(function(data) {
        // create an object with the data we got back because handlebars needs an object
        var hbsObject = {
            bucketLists: data
        };
        res.render("index", hbsObject);
    });
});

// define the route to add new data to oneDay_db
router.post("/api/things", function(req, res) {
    // call the "insertOne" method from the model
    thing.insertOne("thing_name", req.body.thing, function(results) {
        res.end();      
    })
});

// define the route to update the data in oneDay_db
router.put("/api/things/:id", function(req, res) {
    // call the "updateOne" method from the model
    thing.updateOne("done", req.body.done, "id", req.params.id, function(results) {
        res.end();      
    });
});

// Export the router to make it available for other files (i. e., the server.js)
module.exports = router;
