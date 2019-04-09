// ---------------------------------------------------
// Dependencies
// ---------------------------------------------------

// load the Express node package
var express = require("express");

// require all of our models by requiring the models folder
// Save this to a variable and name it "db".
var db = require("../models");


// ---------------------------------------------------
// Define the routes
// ---------------------------------------------------

// create an object to perform the routing functions
var router = express.Router();

// define the route to display all the data from on oneDay_db
router.get("/", function(req, res) {
    // call the findAll method from sequelize to display all the data in the db
    db.Thing.findAll({}).then(function(results) {
        // console.log(results);
        // parse the results we got back and only grab the data for each row
        // and store them in an array called "rows"
        var rows = [];
        for (var i = 0; i < results.length; i++) {
            rows.push(results[i].dataValues);
        }
        // console.log(rows);
        // create an object with the data we got back because handlebars needs an object
        var hbsObject = {
            Things: rows
        };
        // console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

// define the route to add new data to oneDay_db
router.post("/api/things", function(req, res) {
    // call the create method from sequelize to add data into the database
    db.Thing.create({
        thing_name: req.body.thing,
    }).then(function(results) {
        res.end();      
    });
});

// define the route to update the data in oneDay_db
router.put("/api/things/:id", function(req, res) {
    // call the update method from sequelize to change the state of a bucket-list item
    db.Thing.update({
        done: req.body.done,
    },
    {
        where: {
            id: req.params.id,
        }
    }).then(function(results) {
        res.end();      
    });
});

// Export the router to make it available for other files (i. e., the server.js)
module.exports = router;
