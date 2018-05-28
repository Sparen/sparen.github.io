/* ---------------- Tooltips ---------------- */

//On hover (mouseover), load the documentation into the tooltiptext element 
function getFxnDocs(fxnname, domid) {
    //Get information
    var fxn = retrieveFxn(fxnname);
    //Format information
    var argnames = ""; //Argument list inside function header
    var i;
    for (i = 0; i < fxn.args.length; i += 1) {
        //Delimit by :, then prune whitepsace
        var delim = fxn.args[i].split(":");
        argnames += delim[0].trim().toString();
        if (i < fxn.args.length - 1) {
            argnames += ", ";
        }
    }
    var str = "<code style='font-size: 24px'>" + fxn.fname + "(" + argnames + ")</code><hr>";
    if (fxn.args.length > 0) {
        str += "<code><strong>Arguments:</strong></code><br>"
        var j;
        for (j = 1; j <= fxn.args.length; j += 1) {
            str += "<code>&nbsp;&nbsp;" + j.toString() + ") " + fxn.args[j - 1] + "</code><br>";
        }
    }
    if (fxn.returnv !== "") {str += "<code><strong>Return: </strong></code><br><code>&nbsp;&nbsp;" + fxn.returnv + "</code><br>";}
    if (fxn.description !== "") {str += "<br><strong>Description:</strong><br><div class='docsnotesdiv'>" + fxn.description + "</div>";}
    if (fxn.notes !== "") {str += "<br><strong>Notes:</strong><br><div class='docsnotesdiv'>" + fxn.notes + "</div>";}

    //Prepare tooltip
    document.getElementById(domid).innerHTML = str;
}

function retrieveFxn(fxnname) {
    //Standard
    var cats = dnhph3docs_standard.categories;
    var i;
    for (i = 0; i < cats.length; i += 1) {
        var fs = cats[i].fxns;
        var j;
        for (j = 0; j < fs.length; j += 1) {
            if (fs[j].fname === fxnname) {
                return fs[j];
            }
        }
    }
    //Object

    //Script

    return {};
}

/* ---------------- Documentation Page ---------------- */

//Loads documentation onto docs.html
function loadDocs() {
    //Load each category one by one
    document.getElementById("math_fxns").innerHTML = loadDocsByCategory("Math Functions");
    document.getElementById("text_fxns").innerHTML = loadDocsByCategory("Text Functions");
    document.getElementById("path_fxns").innerHTML = loadDocsByCategory("Path Functions");
    document.getElementById("time_fxns").innerHTML = loadDocsByCategory("Time Functions");
    document.getElementById("debug_fxns").innerHTML = loadDocsByCategory("Debug Functions");
    document.getElementById("cdata_fxns").innerHTML = loadDocsByCategory("Common Data Functions");
    document.getElementById("audio_fxns").innerHTML = loadDocsByCategory("Audio Functions");
    document.getElementById("input_fxns").innerHTML = loadDocsByCategory("Input Functions");
    document.getElementById("render_fxns").innerHTML = loadDocsByCategory("Render Functions");
    document.getElementById("3dcamera_fxns").innerHTML = loadDocsByCategory("3D Camera Functions");
    document.getElementById("2dcamera_fxns").innerHTML = loadDocsByCategory("2D Camera Functions");
    document.getElementById("script_fxns").innerHTML = loadDocsByCategory("Script Functions");
    document.getElementById("system_fxns").innerHTML = loadDocsByCategory("System Functions");
    document.getElementById("player_fxns").innerHTML = loadDocsByCategory("Player Functions");
}

function loadDocsByCategory (catnameparam) {
    var returnstring = "";

    //Standard
    var cats = dnhph3docs_standard.categories;
    var catobj; //object referring to the specific category
    var i;
    for (i = 0; i < cats.length; i += 1) {
        if (cats[i].catname === catnameparam) {catobj = cats[i]; break;}
    }
    //Object

    //Script

    if (catobj === null || catobj === undefined) {
        return "Error: Category Not Found";
    }
    //Output
    var fs = catobj.fxns;

    //First, automatically generate a table of contents
    //May result in slightly malformed HTML :(
    returnstring += "<div class='docs_cattoc'>";
    var j;
    for (j = 0; j < fs.length; j += 1) {
        returnstring += "<div class='unit'>&nbsp;&nbsp;<a href='#fxn_" + fs[j].fname + "'>" + fs[j].fname + "</a>&nbsp;&nbsp;</div>";
    }
    returnstring += "</div><br>";

    //Now, loop through functions to populate docs
    for (j = 0; j < fs.length; j += 1) {
        var argnames = ""; //Argument list inside function header
        var l;
        for (l = 0; l < fs[j].args.length; l += 1) {
            //Delimit by :, then prune whitepsace
            var delim = fs[j].args[l].split(":");
            argnames += delim[0].trim().toString();
            if (l < fs[j].args.length - 1) {
                argnames += ", ";
            }
        }
        returnstring += "<div class='docsfxnname' id='fxn_" + fs[j].fname + "'><a href='#fxn_" + fs[j].fname + "'><code>" + fs[j].fname + "(" + argnames + ")</code></a></div>";
        if (fs[j].args.length > 0) {
            returnstring += "<div class='docsparamsdiv'><code><strong>Arguments:</strong></code><br>";
            var k;
            for (k = 1; k <= fs[j].args.length; k += 1) {
                returnstring += "<code>&nbsp;&nbsp;" + k.toString() + ") " + fs[j].args[k - 1] + "</code><br>";
            }
            returnstring += "</div>";
        }
        if (fs[j].returnv !== "") {returnstring += "<div class='docsreturndiv'><code><strong>Return: </strong></code><br><code>&nbsp;&nbsp;" + fs[j].returnv + "</code></div>";}
        if (fs[j].description !== "") {returnstring += "<br><strong>Description:</strong><br><div class='docsnotesdiv'>" + fs[j].description + "</div>";}
        if (fs[j].notes !== "") {returnstring += "<br><strong>Notes:</strong><br><div class='docsnotesdiv'>" + fs[j].notes + "</div>";}
        returnstring += "<hr>";
    }
    return returnstring;
}