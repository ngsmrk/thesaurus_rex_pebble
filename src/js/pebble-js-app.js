// Set callback for init event
Pebble.addEventListener("ready",
    function (e) {
        console.log("Thesaurus Rex is ready!!!");
    }
);

// Set callback for appmessage events
Pebble.addEventListener("appmessage",
    function (e) {
        console.log("message");
        fetch_random_word();
    }
);

function fetch_random_word() {

    var req = new XMLHttpRequest();
    req.open('GET', 'http://thesaurus-rex.herokuapp.com/random_word/', true);
    req.onload = function (e) {
        var status = req.status;
        var readyState = req.readyState;

        console.log("Status: " + status + ", state: " + readyState);
        if (req.readyState == 4 && req.status == 200) {
            responseText = req.responseText;
            console.log(responseText);

            var response = JSON.parse(req.responseText);

            var theWord = response.word;
            console.log(theWord);
            Pebble.sendAppMessage({"word": theWord});

        } else {
            console.log("Error");
            Pebble.sendAppMessage({"word": "Not Found"});
        }
    };

    req.send(null);
}
