var database_obj;

var NUMLOCATIONS = 2; //hardcoded. Refers to the location field in the JSON

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
                database_obj = JSON.parse(client.responseText);
            }
        }
    };

    client.send();
    console.log("getFileContents(): Request Sent");
}

function contestsPerYear() { //WARNING: NUMBER OF LOCATIONS IS CURRENTLY HARDCODED
    console.log("contestsPerYear(): Running");
    var contests = database_obj.contests; //array of contests
    var years = [];
    var values = []; //nD array storing contests per category

    //First, find range of years and prepare arrays accordingly. This shows skipped years
    var min = contests[0].year;
    var max = contests[0].year;
    for (i = 0; i < contests.length; i++) {
        var temp = contests[i].year;
        if (temp > max) {max = temp;}
        if (temp < min && temp != -1) {min = temp;}
    }
    for (i = min; i <= max; i++) {
        years = years.concat([i]);
        values = values.concat([[0, 0]]);
    }

    for (i = 0; i < contests.length; i++) {
        var temp = contests[i].year;
        if (contains(years, temp)) { //This statement is necessary for the -1 case
            var tempindex = 0;
            if (contests[i].location == "locaa") {tempindex = 1;}
            values[years.indexOf(temp)][tempindex] ++;
        } else if (temp != -1) { //Failsafe
            alert("ERROR");
        }
    }

    console.log("contestsPerYear(): Preparing Result");
    //var displaystring = "This feature is under construction";
    var displaystring = "";
    for (i = 0; i < years.length; i++) {
        displaystring = displaystring + years[i] + " - " +
        "MotK: " + values[i][0] + "   |   LOCAA: " + values[i][1] + 
        "   |   Total: " + (values[i][0] + values[i][1]) + "<br>";
    }

    console.log("contestsPerYear(): Preparing SVG Display"); //NOTE: The SVG height is hardcoded to a max of 23 contests/year
    var cpy_svg_width = 168 + years.length * 16;
    var cpy_svg = '<svg xmlns="http://www.w3.org/2000/svg"' +
        'width="' + cpy_svg_width + '" height="270" version="1.1"' +
        'xmlns:xlink="http://www.w3.org/1999/xlink">';
        //border
    cpy_svg += '<rect x="0" y="0" height="270" width="' + cpy_svg_width + '" fill="#222222" stroke="#CCCCCC" stroke-width="2"></rect>';
    for (i = 0; i < 6; i++) { //lines
        cpy_svg += '<path d="M 48 ' + (230 - i*50) + ' H ' + (cpy_svg_width - 120) + '" stroke="#666666" stroke-width="1" fill="none"></path>';
        cpy_svg += '<text x="24" y="' + (230 - i*50)  + '" font-family="Andale Mono" font-size="14px" fill="#DDDDDD"' +
          'text-anchor="middle" dominant-baseline="central">' + (5*i) + '</text>';
    }
    for (i = 0; i < years.length; i++) { //paths and text
        var temp_cpy_svg_motkcount = 10*values[i][0];
        var temp_cpy_svg_locaacount = 10*values[i][1];
        cpy_svg += '<path d="M ' + (48 + i*16) + ' 230 V ' + (230 - temp_cpy_svg_motkcount) + '" stroke="#66AAFF" stroke-width="12" fill="none"></path>';
        cpy_svg += '<path d="M ' + (48 + i*16) + ' ' + (230 - temp_cpy_svg_motkcount) + ' V ' + (230 - temp_cpy_svg_motkcount - temp_cpy_svg_locaacount) + '" stroke="#66FFAA" stroke-width="12" fill="none"></path>';
        cpy_svg += '<text x="' + (48 + i*16) + '" y="' + (230 - temp_cpy_svg_motkcount - temp_cpy_svg_locaacount - 2)  + '" font-family="Andale Mono" font-size="14px" fill="white"' +
          'text-anchor="middle" dominant-baseline="alphabetic">' + (values[i][0] + values[i][1]) + '</text>';
        cpy_svg += '<text x="' + (48 + i*16) + '" y="250" font-family="Andale Mono" font-size="10px" fill="white"' +
          'text-anchor="middle" dominant-baseline="central" writing-mode="tb">' + years[i] + '</text>';
    }
    //key
    cpy_svg += '<rect x="' + (cpy_svg_width - 96) + '" y="111" height="8" width="8" fill="#66AAFF"></rect>';
    cpy_svg += '<text x="' + (cpy_svg_width - 80) + '" y="115" font-family="Andale Mono" font-size="14px" fill="#DDDDDD"' +
          'text-anchor="start" dominant-baseline="central">MotK</text>';
    cpy_svg += '<rect x="' + (cpy_svg_width - 96) + '" y="141" height="8" width="8" fill="#66FFAA"></rect>';
    cpy_svg += '<text x="' + (cpy_svg_width - 80) + '" y="145" font-family="Andale Mono" font-size="14px" fill="#DDDDDD"' +
          'text-anchor="start" dominant-baseline="central">LOCAA</text>';

    cpy_svg += '<text x="' + (cpy_svg_width - 4) + '" y="264" font-family="Andale Mono" font-size="6px" fill="#DDDDDD"' +
          'text-anchor="end" dominant-baseline="central">This graph was generated by sparen.github.io</text>';

    cpy_svg += '</svg>';

    document.getElementById("displaybox").innerHTML = displaystring + "<br>" + cpy_svg;
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

function contains(a, obj) {
    var i = a.length;
    while (i--) {
       if (a[i] === obj) {
           return true;
       }
    }
    return false;
}