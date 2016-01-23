function createDropdown() {
    console.log("createDropdown(): Running");
    return "<form method='POST' onSubmit='return execute();'>" +
            "<select id='dropdown'>" +
            "<option value='none' name='opt'> - Please make a selection - </option>" +
            "<option value='cpy' name='opt'>Contests per Year</option>" +
            "</select>" +
            "<input type='SUBMIT' value='Submit'>" +
            "</form>";
}

function getFileContents() {
    console.log("getFileContents(): Running");
    var filepath = "contestdatabase.json";
    var client = new XMLHttpRequest();
    client.open("GET", filepath, true);
    client.onreadystatechange = function () { //callback
        if (client.readyState == 4) {
            if (client.status == 200 || client.status == 0) {
                document.getElementById("queryselect").innerHTML = createDropdown();
            }
        }
    };

    client.send();
    console.log("getFileContents(): Request Sent");
}

function contestsPerYear() {
    console.log("contestsPerYear(): Running");
    document.getElementById("displaybox").innerHTML = 
    "JSON Database still populating. Unable to determine number of contests";
}

function execute() {
    console.log("execute(): Running");
    var s = "none";
    var selectdd = document.getElementById("dropdown");
    var index = selectdd.selectedIndex;
    s = selectdd.options[index].value;

    console.log("execute(): Checking Selection");

    if (s === "none") {
        document.getElementById("displaybox").innerHTML = "Please make a selection.";
    }

    if (s === "cpy") {
        contestsPerYear();
    }

    console.log("execute(): End");

    // return "false" to indicate not to
    // submit the form.
    // change this to "true" if the form
    // "action" is valid,
    // i.e. points to a valid CGI script
    //
    return false;
}