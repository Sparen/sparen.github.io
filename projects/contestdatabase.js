var database_obj;

var NUMLOCATIONS = 2; //hardcoded. Refers to the location field in the JSON

//JSON NOTES:
//NUMBERS THAT ARE UNKNOWN DEFAULT TO -1. OTHER UNKNOWNS DEFAULT TO NOTHING

function createDropdown() {
    console.log("createDropdown(): Running");
    return "<form method='POST' onSubmit='return execute();'>" +
            "<select id='dropdown'>" +
            "<option value='none' name='opt'> - Please make a selection - </option>" +
            "<option value='cpy' name='opt'>Contests per Year</option>" +
            "<option value='avgnumpartloc' name='opt'>Avg. Num. of Participants by Loc.</option>" +
            "<option value='participateovertime' name='opt'>Participants Over Time</option>" +
            "<option value='participanthistory' name='opt'>Participant History</option>" +
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
        'width="' + cpy_svg_width + '" height="280" version="1.1"' +
        'xmlns:xlink="http://www.w3.org/1999/xlink">';
        //border
    cpy_svg += '<rect x="0" y="0" height="280" width="' + cpy_svg_width + '" fill="#222222" stroke="#CCCCCC" stroke-width="2"></rect>';
    for (i = 0; i < 6; i++) { //lines
        cpy_svg += '<path d="M 48 ' + (230 - i*50) + ' H ' + (cpy_svg_width - 120) + '" stroke="#666666" stroke-width="1" fill="none"></path>';
        cpy_svg += '<text x="24" y="' + (230 - i*50)  + '" font-family="Andale Mono, Monospace" font-size="14px" fill="#DDDDDD"' +
          'text-anchor="middle" dominant-baseline="central">' + (5*i) + '</text>';
    }
    for (i = 0; i < years.length; i++) { //paths and text
        var temp_cpy_svg_motkcount = 10*values[i][0];
        var temp_cpy_svg_locaacount = 10*values[i][1];
        cpy_svg += '<path d="M ' + (48 + i*16) + ' 230 V ' + (230 - temp_cpy_svg_motkcount) + '" stroke="#66AAFF" stroke-width="12" fill="none"></path>';
        cpy_svg += '<path d="M ' + (48 + i*16) + ' ' + (230 - temp_cpy_svg_motkcount) + ' V ' + (230 - temp_cpy_svg_motkcount - temp_cpy_svg_locaacount) + '" stroke="#66FFAA" stroke-width="12" fill="none"></path>';
        cpy_svg += '<text x="' + (48 + i*16) + '" y="' + (230 - temp_cpy_svg_motkcount - temp_cpy_svg_locaacount - 2)  + '" font-family="Andale Mono, Monospace" font-size="14px" fill="white"' +
          'text-anchor="middle" dominant-baseline="alphabetic">' + (values[i][0] + values[i][1]) + '</text>';
        cpy_svg += '<text x="' + (48 + i*16) + '" y="250" font-family="Andale Mono, Monospace" font-size="10px" fill="white"' +
          'text-anchor="middle" dominant-baseline="central" writing-mode="tb">' + years[i] + '</text>';
    }
    //key
    cpy_svg += '<rect x="' + (cpy_svg_width - 96) + '" y="111" height="8" width="8" fill="#66AAFF"></rect>';
    cpy_svg += '<text x="' + (cpy_svg_width - 80) + '" y="115" font-family="Andale Mono, Monospace" font-size="14px" fill="#DDDDDD"' +
          'text-anchor="start" dominant-baseline="central">MotK</text>';
    cpy_svg += '<rect x="' + (cpy_svg_width - 96) + '" y="141" height="8" width="8" fill="#66FFAA"></rect>';
    cpy_svg += '<text x="' + (cpy_svg_width - 80) + '" y="145" font-family="Andale Mono, Monospace" font-size="14px" fill="#DDDDDD"' +
          'text-anchor="start" dominant-baseline="central">LOCAA</text>';

    cpy_svg += '<text x="' + (cpy_svg_width - 4) + '" y="274" font-family="Andale Mono, Monospace" font-size="6px" fill="#DDDDDD"' +
          'text-anchor="end" dominant-baseline="central">This graph was generated by sparen.github.io</text>';

    cpy_svg += '</svg>';

    document.getElementById("displaybox").innerHTML = displaystring + "<br><br>" + cpy_svg + 
    "<br><br>Disclaimer: This information may not be up to date, and some contests lack start and/or end dates.<br>" +
    "All contests here are listed by end year. Contests with no date information are not shown.";
}

function averageNumParticipantsLocation() { //WARNING: NUMBER OF LOCATIONS IS CURRENTLY HARDCODED
    console.log("averageNumParticipantsLocation(): Running");
    var contests = database_obj.contests; //array of contests
    var years = []; //contains years
    var anpl_numcontests = [];
    var anpl_numparts = []; //number of participants per year
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
        anpl_numcontests = anpl_numcontests.concat([[0, 0]]); //range, locaa
        anpl_numparts = anpl_numparts.concat([[0, 0]]);
    }

    for (i = 0; i < contests.length; i++) {
        var temp = contests[i].year;
        if (contains(years, temp)) { //This statement is necessary for the -1 case
            var tempindex = 0;
            if (contests[i].location == "locaa") {tempindex = 1;}
            anpl_numcontests[years.indexOf(temp)][tempindex] ++;
            anpl_numparts[years.indexOf(temp)][tempindex] += contests[i].numparticipants;
        } else if (temp != -1) { //Failsafe
            alert("ERROR");
        }
    }

    //assemble averages
    var anpl_averages = [];
    for (i = 0; i < years.length; i++) {
        var temp_avg = [(anpl_numparts[i][0]/anpl_numcontests[i][0]).toFixed(2), (anpl_numparts[i][1]/anpl_numcontests[i][1]).toFixed(2)];
        if (isNaN(temp_avg[0])) {temp_avg[0] = 0; console.log("anps(): 0 contests at " + years[i] + " at MotK");}
        if (isNaN(temp_avg[1])) {temp_avg[1] = 0; console.log("anps(): 0 contests at " + years[i] + " at LOCAA");}
        anpl_averages = anpl_averages.concat([temp_avg]);
    }

    console.log("averageNumParticipantsLocation(): Preparing Result");
    //var displaystring = "This feature is under construction";
    var displaystring = "";
    for (i = 0; i < years.length; i++) {
        displaystring = displaystring + years[i] + " - " +
        "MotK: #C: " + anpl_numcontests[i][0] + ", #P: " + anpl_numparts[i][0] + ", #Avg: " + anpl_averages[i][0] + "   |   LOCAA: #C: " + anpl_numcontests[i][1] + ", #P: " + anpl_numparts[i][1] + ", #Avg: " + anpl_averages[i][1] + "<br>";
    }

    console.log("averageNumParticipantsLocation(): Preparing SVG Display");
    var anpl_svg_width = 168 + years.length * 32;
    var anpl_svg = '<svg xmlns="http://www.w3.org/2000/svg"' +
        'width="' + anpl_svg_width + '" height="320" version="1.1"' +
        'xmlns:xlink="http://www.w3.org/1999/xlink">';
        //border

    anpl_svg += '<rect x="0" y="0" height="320" width="' + anpl_svg_width + '" fill="#222222" stroke="#CCCCCC" stroke-width="2"></rect>';
    for (i = 0; i < 6; i++) { //lines
        anpl_svg += '<path d="M 48 ' + (270 - i*50) + ' H ' + (anpl_svg_width - 120) + '" stroke="#666666" stroke-width="1" fill="none"></path>';
        anpl_svg += '<text x="24" y="' + (270 - i*50)  + '" font-family="Andale Mono, Monospace" font-size="14px" fill="#DDDDDD"' +
          'text-anchor="middle" dominant-baseline="central">' + (5*i) + '</text>';
    }

    for (i = 0; i < years.length - 1; i++) { //paths
        var temp_anpl_svg_motkcount = 10*anpl_averages[i][0];
        var temp_anpl_svg_locaacount = 10*anpl_averages[i][1];
        var temp_anpl_svg_motkcount2 = 10*anpl_averages[i+1][0];
        var temp_anpl_svg_locaacount2 = 10*anpl_averages[i+1][1];
        anpl_svg += '<path d="M ' + (48 + i*32) + ' ' + (270 - temp_anpl_svg_motkcount) + ' L ' + (48 + (i+1)*32) + ' ' + (270 - temp_anpl_svg_motkcount2) + '" stroke="#66AAFF" stroke-width="2" fill="none"></path>';
        anpl_svg += '<path d="M ' + (48 + i*32) + ' ' + (270 - temp_anpl_svg_locaacount) + ' L ' + (48 + (i+1)*32) + ' ' + (270 - temp_anpl_svg_locaacount2) + '" stroke="#66FFAA" stroke-width="2" fill="none"></path>';
    }
    for (i = 0; i < years.length; i++) { //points and years
        var temp_anpl_svg_motkcount = 10*anpl_averages[i][0];
        var temp_anpl_svg_locaacount = 10*anpl_averages[i][1];
        anpl_svg += '<circle cx="' + (48 + i*32) + '" cy="' + (270 - temp_anpl_svg_motkcount) + '" r="2" stroke="white" stroke-width="0.5" fill="#66AAFF"></circle>';
        anpl_svg += '<circle cx="' + (48 + i*32) + '" cy="' + (270 - temp_anpl_svg_locaacount) + '" r="2" stroke="white" stroke-width="0.5" fill="#66FFAA"></circle>';
        anpl_svg += '<text x="' + (48 + i*32) + '" y="290" font-family="Andale Mono, Monospace" font-size="10px" fill="white"' +
          'text-anchor="middle" dominant-baseline="central" writing-mode="tb">' + years[i] + '</text>';
    }

    //key
    anpl_svg += '<rect x="' + (anpl_svg_width - 96) + '" y="131" height="8" width="8" fill="#66AAFF"></rect>';
    anpl_svg += '<text x="' + (anpl_svg_width - 80) + '" y="135" font-family="Andale Mono, Monospace" font-size="14px" fill="#DDDDDD"' +
          'text-anchor="start" dominant-baseline="central">MotK</text>';
    anpl_svg += '<rect x="' + (anpl_svg_width - 96) + '" y="161" height="8" width="8" fill="#66FFAA"></rect>';
    anpl_svg += '<text x="' + (anpl_svg_width - 80) + '" y="165" font-family="Andale Mono, Monospace" font-size="14px" fill="#DDDDDD"' +
          'text-anchor="start" dominant-baseline="central">LOCAA</text>';

    anpl_svg += '<text x="' + (anpl_svg_width - 4) + '" y="314" font-family="Andale Mono, Monospace" font-size="6px" fill="#DDDDDD"' +
          'text-anchor="end" dominant-baseline="central">This graph was generated by sparen.github.io</text>';

    anpl_svg += '</svg>';

    //OVERALL STATS
    var anpl_totalnumcontests = [0, 0];
    var anpl_totalnumparts = [0, 0];
    for (i = 0; i < years.length; i++){
        anpl_totalnumcontests[0] += anpl_numcontests[i][0];
        anpl_totalnumparts[0] += anpl_numparts[i][0];
        anpl_totalnumcontests[1] += anpl_numcontests[i][1];
        anpl_totalnumparts[1] += anpl_numparts[i][1];
    }
    var anpl_overallaverages = [(anpl_totalnumparts[0]/anpl_totalnumcontests[0]).toFixed(2), (anpl_totalnumparts[1]/anpl_totalnumcontests[1]).toFixed(2)];

    var displaystring2 = "MotK Overall: " + anpl_overallaverages[0] + " participants/contest<br>" + 
    "LOCAA Overall: " + anpl_overallaverages[1] + " participants/contest<br>";

    document.getElementById("displaybox").innerHTML = displaystring + "<br>" + anpl_svg + "<br>" + displaystring2;
}

function participantsOverTime() { //WARNING: NUMBER OF LOCATIONS IS CURRENTLY HARDCODED
    console.log("participantsOverTime(): Running");
    var contests = database_obj.contests; //array of contests
    var years = []; //contains years

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
    }

    //Now that we know how big the graph is going to be, let's begin setting up the graph. First, the grid
    console.log("participantsOverTime(): Preparing SVG Display");
    var pot_svg_width = 168 + years.length * 32 * 6;
    var pot_svg = '<svg xmlns="http://www.w3.org/2000/svg"' +
        'width="' + pot_svg_width + '" height="400" version="1.1"' +
        'xmlns:xlink="http://www.w3.org/1999/xlink">';
        //border

    pot_svg += '<rect x="0" y="0" height="400" width="' + pot_svg_width + '" fill="#222222" stroke="#CCCCCC" stroke-width="2"></rect>';
    for (i = 0; i < 7; i++) { //lines
        pot_svg += '<path d="M 48 ' + (320 - i*50) + ' H ' + (pot_svg_width - 120) + '" stroke="#666666" stroke-width="1" fill="none"></path>';
        pot_svg += '<text x="24" y="' + (320 - i*50)  + '" font-family="Andale Mono, Monospace" font-size="14px" fill="#DDDDDD"' +
          'text-anchor="middle" dominant-baseline="central">' + (5*i) + '</text>';
    }

    //Now let's plot the timestamps. The years are 32*6 pixels apart. So that means 16 pixels per month.
    var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    for (i = 0; i < years.length; i++) { //years
        for (j = 0; j < 12; j++) {
            pot_svg += '<text x="' + (48 + i*32*6 + j*16) + '" y="350" font-family="Andale Mono, Monospace" font-size="10px" fill="white"' +
            'text-anchor="middle" dominant-baseline="central" writing-mode="tb">' + (months[j] + " " + years[i]) + '</text>';
        }
    }

    //Now the key.
    pot_svg += '<rect x="' + (pot_svg_width - 96) + '" y="146" height="8" width="8" fill="#66AAFF"></rect>';
    pot_svg += '<text x="' + (pot_svg_width - 80) + '" y="150" font-family="Andale Mono, Monospace" font-size="14px" fill="#DDDDDD"' +
          'text-anchor="start" dominant-baseline="central">MotK</text>';
    pot_svg += '<rect x="' + (pot_svg_width - 96) + '" y="176" height="8" width="8" fill="#66FFAA"></rect>';
    pot_svg += '<text x="' + (pot_svg_width - 80) + '" y="180" font-family="Andale Mono, Monospace" font-size="14px" fill="#DDDDDD"' +
          'text-anchor="start" dominant-baseline="central">LOCAA</text>';

    pot_svg += '<text x="' + (pot_svg_width - 4) + '" y="390" font-family="Andale Mono, Monospace" font-size="10px" fill="#DDDDDD"' +
          'text-anchor="end" dominant-baseline="central">This graph was generated by sparen.github.io</text>';

    //And now, the data points. Rectangles will be used here.
    var displaystring = ""; //to log when contest data is unknown
    var textlabels = ""; //so that all text rendered on a higher layer
    for (i = 0; i < contests.length; i++) { //for each contest
        var results = fetchstartendcolor(contests[i]);
        var pot_start = results.startval;
        var pot_end = results.endval;
        var cleared = results.cleared;
        var pot_color = results.colorval;
        displaystring = displaystring + results.dstring;
        var pot_participants = contests[i].numparticipants; //for height

        //Now create the SVG rectangle iff there is an end date
        if (cleared) {
            var pot_basestart = ((pot_start[0]-min)*12 + pot_start[1])*16; //does not include 48 pixel left and 4 pixel buffer
            var pot_basewidth = ((pot_end[0] - pot_start[0])*12 + pot_end[1] - pot_start[1])*16; //does not include 8 pixel base rect width
            pot_svg += '<rect x="' + (48 + pot_basestart - 4) + '" y="' + (320 - (pot_participants * 10)) + 
            '" height="' + (pot_participants * 10) + '" width="' + (8 + pot_basewidth) + '" fill="' + pot_color + '" fill-opacity="0.75"></rect>';
            textlabels += '<text x="' + (48 + pot_basestart + pot_basewidth/2) + '" y="' + (320 - (pot_participants * 10)) + 
            '" fill="' + pot_color + '" text-anchor="end" dominant-baseline="central" writing-mode="tb" font-family="Andale Mono, Monospace" font-size="10px">' + contests[i].id + '</text>';
        }
    }

    pot_svg += textlabels; //labels with contest ID

    pot_svg += '</svg>';

    document.getElementById("displaybox").innerHTML = displaystring + pot_svg + "<br><br>Contests without a valid end date are not displayed. Contests without a valid start date only show their end month and year.";
}

function participantHistory() {
    console.log("participantHistory(): Running");
    var allparticipants = [];
    var contests = database_obj.contests; //array of contests

    var ph_displaystring = "Please select people from the following lists in order to generate histories.<br><br>" + 
    "This feature allows you to select any number of participants, and a chart will be generated showing their participation, top three placement, and judging and hosting history over the span of multiple contests.<br><br>";

    ph_displaystring = ph_displaystring + "<form method='POST' onSubmit='return participantHistory_graphgen();'><input type='SUBMIT' value='Submit'></form>";
    ph_displaystring = ph_displaystring + '<input type="checkbox" name="ph_controlmaster" defaultChecked="false" onclick="return participantHistory_toggleall(this, this.checked);"> Toggle All<br><br>'

    //first, obtain list of all chartable people
    for (i = 0; i < contests.length; i++) {
        var ph_judges = contests[i].judges;
        var ph_host = contests[i].host;
        var ph_participants = contests[i].participants;

        //For obtaining all participants, dropdown list
        var ph_temp;
        for (j = 0; j < ph_judges.length; j++) {
            ph_temp = ph_judges[j];
            if(!contains(allparticipants, ph_temp)) {
                allparticipants = allparticipants.concat(ph_temp);
            }
        }
        if(!contains(allparticipants, ph_host)) {
            allparticipants = allparticipants.concat(ph_host);
        }
        for (j = 0; j < ph_participants.length; j++) {
            ph_temp = ph_participants[j];
            if(!contains(allparticipants, ph_temp)) {
                allparticipants = allparticipants.concat(ph_temp);
            }
        }

        //for listings by contest
        var contestdisplay = "<div>" + contests[i].id + ": " + contests[i].name + "</div>";
        contestdisplay = contestdisplay + '<input type="checkbox" name="ph_control" defaultChecked="false" onclick="return participantHistory_selectbycontest(\'' + contests[i].id + '\', this, this.checked);"> Check All<br>';
        if (ph_host != "") {
            contestdisplay = contestdisplay + "Host: " + '<input type="checkbox" name="ph_participant" class="ph_' + contests[i].id + '" id="' + ph_host + '" defaultChecked="false">' + ph_host + '<br>';
        } else {
            contestdisplay = contestdisplay + "Host: N/A" + '<br>';
        }
        contestdisplay = contestdisplay + "Judges: <br>";
        for (j = 0; j < ph_judges.length; j++) {
            ph_temp = ph_judges[j];
            if(ph_temp != "COMMUNITY" && ph_temp != "GUEST" && ph_temp != "") {
                contestdisplay = contestdisplay + '&nbsp;&nbsp;&nbsp;&nbsp;<input type="checkbox" name="ph_participant" class="ph_' + contests[i].id + '" id="' + ph_temp + '" defaultChecked="false">' + ph_temp + '<br>';
            } else {
                contestdisplay = contestdisplay + '&nbsp;&nbsp;&nbsp;&nbsp;' + ph_temp + '<br>';
            }
        }
        contestdisplay = contestdisplay + 'Participants: <br><table style="width:100%"><tr>'; //DON'T SHOW THE MISSHAPEN BORDER PLZ
        for (j = 0; j < ph_participants.length; j++) {
            ph_temp = ph_participants[j];
            contestdisplay = contestdisplay + '<td><input type="checkbox" name="ph_participant" class="ph_' + contests[i].id + '" id="' + ph_temp + '" defaultChecked="false">' + ph_temp + '</td>';
            if (j % 5 == 4) {
                contestdisplay = contestdisplay + '</tr><tr>';
            }
        }
        for (j = ph_participants.length; j % 5 != 0; j++) { //buffer space
            contestdisplay = contestdisplay + '<td></td>';
        }
        contestdisplay = contestdisplay + "</tr></table>";

        ph_displaystring = ph_displaystring + contestdisplay;
    }
    document.getElementById("displaybox").innerHTML = ph_displaystring;

}

function participantHistory_selectbycontest(contestid, parent, newval) {
    console.log("participantHistory_selectbycontest(): Running");
    var ph_checked = document.getElementsByClassName("ph_" + contestid);
    for (i = 0; i < ph_checked.length; i++) {
        ph_checked[i].checked = newval;
    }
    parent.checked = newval; //Some weird error where it stays unchecked when you check it. whelp.
    return false;
}

function participantHistory_toggleall(parent, newval) {
    console.log("participantHistory_toggleall(): Running");
    var ph_checked = document.getElementsByName("ph_participant");
    for (i = 0; i < ph_checked.length; i++) {
        ph_checked[i].checked = newval;
    }
    parent.checked = newval; //Some weird error where it stays unchecked when you check it. whelp.
    return false;
}

function participantHistory_graphgen() { //call with a button call
    console.log("participantHistory_graphgen(): Running");
    //Read and obtain all selected names
    var ph_checked = document.getElementsByName("ph_participant");
    var phgg_selpartic = [];
    for (i = 0; i < ph_checked.length; i++) {
        var phggtemp = ph_checked[i].id;
        if(!contains(phgg_selpartic, phggtemp) && ph_checked[i].checked) {
                phgg_selpartic = phgg_selpartic.concat(phggtemp);
        }
    }

    //Prepare SVG using Participants over Time as the base
    var contests = database_obj.contests; //array of contests
    var years = []; //contains years

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
    }

    console.log("participantHistory_graphgen(): Preparing SVG Display");
    var phgg_svg_width = 264 + years.length * 32 * 6;
    var phgg_svg_height = 164 + 16 * phgg_selpartic.length;
    var phgg_svg = '<svg xmlns="http://www.w3.org/2000/svg"' +
        'width="' + phgg_svg_width + '" height="' + phgg_svg_height + '" version="1.1"' +
        'xmlns:xlink="http://www.w3.org/1999/xlink">';
        //border

    phgg_svg += '<rect x="0" y="0" height="' + phgg_svg_height + '" width="' + phgg_svg_width + '" fill="#222222" stroke="#CCCCCC" stroke-width="2"></rect>';

    //Now let's plot the timestamps. The years are 32*6 pixels apart. So that means 16 pixels per month.
    //144 is the buffer on the left (for names). 128 is the buffer on the right (for the key)
    var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    for (i = 0; i < years.length; i++) { //years
        for (j = 0; j < 12; j++) {
            phgg_svg += '<text x="' + (144 + i*32*6 + j*16) + '" y="' + (phgg_svg_height - 108) + '" font-family="Andale Mono, Monospace" font-size="10px" fill="white"' +
            'text-anchor="middle" dominant-baseline="central" writing-mode="tb">' + (months[j] + " " + years[i]) + '</text>';
        }
    }

    //Now the key.
    phgg_svg += '<circle cx="' + (phgg_svg_width - 96) + '" cy="' + (phgg_svg_height/2 - 50) + '" r="6" stroke="#FF6688" stroke-width="1" fill="#222222"></circle>';
    phgg_svg += '<text x="' + (phgg_svg_width - 80) + '" y="' + (phgg_svg_height/2 - 50) + '" font-family="Andale Mono, Monospace" font-size="10px" fill="#DDDDDD"' +
          'text-anchor="start" dominant-baseline="central">Host</text>';
    phgg_svg += '<circle cx="' + (phgg_svg_width - 96) + '" cy="' + (phgg_svg_height/2 - 20) + '" r="2" fill="#44FFCC"></circle>';
    phgg_svg += '<text x="' + (phgg_svg_width - 80) + '" y="' + (phgg_svg_height/2 - 20) + '" font-family="Andale Mono, Monospace" font-size="10px" fill="#DDDDDD"' +
          'text-anchor="start" dominant-baseline="central">Judge</text>';
    phgg_svg += '<circle cx="' + (phgg_svg_width - 96) + '" cy="' + (phgg_svg_height/2 + 10) + '" r="4" fill="#FFCC88"></circle>';
    phgg_svg += '<text x="' + (phgg_svg_width - 80) + '" y="' + (phgg_svg_height/2 + 10) + '" font-family="Andale Mono, Monospace" font-size="10px" fill="#DDDDDD"' +
          'text-anchor="start" dominant-baseline="central">Top 3</text>';
    phgg_svg += '<circle cx="' + (phgg_svg_width - 96) + '" cy="' + (phgg_svg_height/2 + 40) + '" r="5" stroke="#FFFFFF" stroke-width="1" fill="#222222"></circle>';
    phgg_svg += '<text x="' + (phgg_svg_width - 80) + '" y="' + (phgg_svg_height/2 + 40) + '" font-family="Andale Mono, Monospace" font-size="10px" fill="#DDDDDD"' +
          'text-anchor="start" dominant-baseline="central">Participant</text>';

    phgg_svg += '<text x="' + (phgg_svg_width - 4) + '" y="' + (phgg_svg_height - 10) + '" font-family="Andale Mono, Monospace" font-size="10px" fill="#DDDDDD"' +
          'text-anchor="end" dominant-baseline="central">This graph was generated by sparen.github.io</text>';

    //And now, the data points. Rectangles will be used here.
    var displaystring = ""; //to log when contest data is unknown
    var textlabels = ""; //so that all text rendered on a higher layer
    for (i = 0; i < contests.length; i++) { //for each contest
        var results = fetchstartendcolor(contests[i]);
        var phgg_start = results.startval;
        var phgg_end = results.endval;
        var cleared = results.cleared;
        var phgg_color = results.colorval;
        displaystring = displaystring + results.dstring;

        //Now create the SVG rectangle iff there is an end date
        if (cleared) {
            var phgg_basestart = ((phgg_start[0]-min)*12 + phgg_start[1])*16; //does not include 144 pixel left and 4 pixel buffer
            var phgg_basewidth = ((phgg_end[0] - phgg_start[0])*12 + phgg_end[1] - phgg_start[1])*16; //does not include 8 pixel base rect width
            textlabels += '<text x="' + (144 + phgg_basestart + phgg_basewidth/2) + '" y="' + (phgg_svg_height - 80) + 
            '" fill="' + phgg_color + '" text-anchor="start" dominant-baseline="central" writing-mode="tb" font-family="Andale Mono, Monospace" font-size="10px">' + contests[i].id + '</text>';
            textlabels += '<path d="M' + (144 + phgg_basestart + phgg_basewidth/2) + ' 4 V' + (phgg_svg_height - 156) + '" stroke-width="1" stroke="#333333"></path>'; //contest guideline
        }
    }

    phgg_svg += textlabels; //labels with contest ID

    //Now it's time to add the participants! Oh boy what a... uh... treat!
    for (j = 0; j < phgg_selpartic.length; j++) { //for each and every player.
        var phgg_player = phgg_selpartic[j];
        var phggplay_start = 0; //start pixel of line
        var phggplay_end = 0; //end pixel of line
        var phgg_string = '<text x="8" y="' + (16 + j*16) + '" fill="#DDDDDD" text-anchor="start" dominant-baseline="central" font-family="Andale Mono, Monospace" font-size="10px">' + phgg_player + '</text>';
        var phgg_startendpath = '<path d="M 4 ' + (16 + j*16 - 8) + ' H ' + (phgg_svg_width - 128) + '" stroke-width="1" stroke="#333333"></path>'; //default guide lines
        phgg_startendpath = phgg_startendpath + '<path d="M 4 ' + (16 + j*16 + 8) + ' H ' + (phgg_svg_width - 128) + '" stroke-width="1" stroke="#333333"></path>'; //default guide lines
        var phgg_nodes = "";

        //Now to iterate over all the contests in search of the name!
        for (k = 0; k < contests.length; k++) { //for each contest
            var contestobj = contests[k];
            var phggindiv_results = fetchstartendcolor(contests[k]);
            var phggindiv_start = phggindiv_results.startval;
            var phggindiv_end = phggindiv_results.endval;
            var phgg_basestart = ((phggindiv_start[0] - contests[0].year)*12 + phggindiv_start[1])*16; //does not include 144 pixel left and 4 pixel buffer
            var phgg_basewidth = ((phggindiv_end[0] - phggindiv_start[0])*12 + phggindiv_end[1] - phggindiv_start[1])*16; //does not include 8 pixel base rect width
            var nodelocation = 144 + phgg_basestart + phgg_basewidth/2;

            if(contains(contestobj.participants, phgg_player) || contains(contestobj.judges, phgg_player) || contestobj.host == phgg_player) {
                if(phggplay_start > nodelocation || phggplay_start == 0){phggplay_start = nodelocation;} //if first contest, mark it!
                if(contestobj.host == phgg_player) {
                    phgg_nodes = phgg_nodes + '<circle cx="' + nodelocation + '" cy="' + (16 + j*16) + '" r="6" stroke="#FF6688" stroke-width="1" fill="#222222"></circle>';
                }
                if(contains(contestobj.participants, phgg_player)) {
                    phgg_nodes = phgg_nodes + '<circle cx="' + nodelocation + '" cy="' + (16 + j*16) + '" r="5" stroke="#FFFFFF" stroke-width="1" fill="#222222"></circle>';
                }
                var topthree = false;
                for(l = 0; l < contestobj.result.length; l++) {
                    if(contains(contestobj.result[l], phgg_player)){
                        topthree = true;
                    }
                }
                if(topthree) {
                    phgg_nodes = phgg_nodes + '<circle cx="' + nodelocation + '" cy="' + (16 + j*16) + '" r="4" fill="#FFCC88"></circle>';
                }
                if(contains(contestobj.judges, phgg_player)) {
                    phgg_nodes = phgg_nodes + '<circle cx="' + nodelocation + '" cy="' + (16 + j*16) + '" r="2" fill="#44FFCC"></circle>';
                }
                if(phggplay_end < nodelocation){phggplay_end = nodelocation;} //if first contest, mark it!
            }
        }
        phgg_startendpath = phgg_startendpath + '<path d="M ' + phggplay_start + ' ' + (16 + j*16) + ' H ' + phggplay_end + '" stroke-width="1" stroke="#666666"></path>';

        if(phgg_player != "") { //Exclude NULL players - i.e. no judge for a contest
            phgg_svg = phgg_svg + phgg_string;
            phgg_svg = phgg_svg + phgg_startendpath;
            phgg_svg = phgg_svg + phgg_nodes;
        }
    }

    phgg_svg += '</svg>';

    document.getElementById("displaybox").innerHTML = "Selected participants: " + phgg_selpartic + phgg_svg + "<br><br>Contests without a valid end date are not displayed. Contests without a valid start date only show their end month and year.";

    return false;
}

function fetchstartendcolor(contestobj) {
    var fsec_start = [0, 0]; //year, month (1-12)
    var fsec_end = [0, 0]; //year, month (1-12)
    var cleared = true;
    var displaystring = "";
    fsec_end[0] = Math.trunc(contestobj.duration[1]);
    if (fsec_end[0] == -1) {
        fsec_end[1] = -1;
        displaystring += "Note: Contest ID " + contestobj.id + " does not have a valid end date.<br>";
        cleared = false; //NO GO IF NO END DATE
    } else {
        fsec_end[1] = Math.trunc((contestobj.duration[1] - fsec_end[0]) * 100);
    }
    fsec_start[0] = Math.trunc(contestobj.duration[0]);
    if (fsec_start[0] == -1) {
        fsec_start[1] = -1;
        displaystring += "Note: Contest ID " + contestobj.id + " does not have a valid start date.<br>";
        fsec_start = fsec_end; //so that the rectangle centers on the end date only
    } else {
        fsec_start[1] = Math.trunc((contestobj.duration[0] - fsec_start[0]) * 100);
    }
    console.log("Start: " + fsec_start + " | End: " + fsec_end);
    var fsec_color = "#66AAFF";
    if (contestobj.location == "locaa") {
        fsec_color = "#66FFAA";
    }
    return {
        startval: fsec_start,
        endval: fsec_end,
        cleared: cleared,
        colorval: fsec_color,
        dstring: displaystring
    };
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
    } else if (s === "avgnumpartloc") {
        averageNumParticipantsLocation();
    } else if (s === "participateovertime") {
        participantsOverTime();
    } else if (s === "participanthistory") {
        participantHistory();
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