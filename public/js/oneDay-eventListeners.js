// make sure the document is loaded before doing anything else
$(document).ready(function() {

    // event listener on the form whose id = add-new-thing
    $("#add-new-thing").on("submit", function(event) {
        // prevent the page for refreshing itself
        event.preventDefault();

        // grab the user input and store it in an object
        var newThing = {
            thing: $("#thing").val().trim()
        };

        // send a post request to the server
        $.post("/api/things", newThing, function() {
            // very short-live confirmation message in the browser's console
            console.log("created new thing");
            // reload the page when the response comes back
            // to get the updated list
            location.reload();
        });
    });

    // event listener on the "done!" button whose class = done-btn
    $(".done-btn").on("click", function() {
        // grab the id of the thing for which "done!" has been clicked
        var id = $(this).data("id");
        var newState = 1;

        // grab the state of the thing for which "done!" has been clicked
        // and store in an object
        var newStateForThing = {
            done: newState
        };

        // send a put request to the server - no shortcut the ajax put request - 
        $.ajax ("api/things/" + id, {
            type: "PUT",
            data: newStateForThing
        }).then(function() {
            // very short-live confirmation message in the browser's console
            console.log("status of thing changed to", newState);
            // reload the page when the response comes back
            // to get the updated list
            location.reload();
        });
    });

});