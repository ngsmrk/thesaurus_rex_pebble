Pebble.addEventListener("ready",
    function (e) {
        console.log("Thesaurus Rex is ready!!!");
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

            var shippingDate = response.word;
            console.log(shippingDate);

        } else {
            console.log("Error");
        }
    };

    req.send(null);
}
