/* Notes:
 * - When including this file, it is imperative that ALL doc js files are included as well, as this one directly refers to the objects in the others.
 *
 */

/* ---------------- Tooltips ---------------- */

//On hover (mouseover), load the documentation into the tooltiptext element 
function getFxnDocs(fxnname, domid) {
    //Get information
    var fxn = retrieveFxn(fxnname);
    //Format information
    var argnames = ""; //Argument list inside function/entry header
    var i;
    for (i = 0; i < fxn.args.length; i += 1) {
        //Delimit by :, then prune whitepsace
        var delim = fxn.args[i].split(":");
        argnames += delim[0].trim().toString();
        if (i < fxn.args.length - 1) {
            argnames += ", ";
        }
    }
    // Entry Type checking for non-Function values
    let fxnargs = "(" + argnames + ")";
    if ('isEvent' in fxn && fxn.isEvent === true) { // If arguments are to be hidden (e.g. event and not function)
        fxnargs = "";
    }
    //Unfortunately, font must be fairly small to *fit* in the tooltip since some names can be... long
    //Same reason why there's a space before (; Forces word wrapping.
    var str = "<code style='font-size: 18px'>" + fxn.fname + " " + fxnargs + "</code><hr>";
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

//Retrieves the function object from the available files.
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
    cats = dnhph3docs_object.categories;
    for (i = 0; i < cats.length; i += 1) {
        var fs = cats[i].fxns;
        var j;
        for (j = 0; j < fs.length; j += 1) {
            if (fs[j].fname === fxnname) {
                return fs[j];
            }
        }
    }

    //System
    cats = dnhph3docs_system.categories;
    for (i = 0; i < cats.length; i += 1) {
        var fs = cats[i].fxns;
        var j;
        for (j = 0; j < fs.length; j += 1) {
            if (fs[j].fname === fxnname) {
                return fs[j];
            }
        }
    }

    //Event
    cats = dnhph3docs_event.categories;
    for (i = 0; i < cats.length; i += 1) {
        var fs = cats[i].fxns;
        var j;
        for (j = 0; j < fs.length; j += 1) {
            if (fs[j].fname === fxnname) {
                return fs[j];
            }
        }
    }

    return {};
}

/* ---------------- Documentation Page ---------------- */

//Loads documentation onto docs_standard.html
function loadDocs() {
    //Load each category one by one
    document.getElementById("math_fxns").innerHTML = loadDocsByCategory("Math Functions", dnhph3docs_standard);
    document.getElementById("text_fxns").innerHTML = loadDocsByCategory("Text Functions", dnhph3docs_standard);
    document.getElementById("path_fxns").innerHTML = loadDocsByCategory("Path Functions", dnhph3docs_standard);
    document.getElementById("time_fxns").innerHTML = loadDocsByCategory("Time Functions", dnhph3docs_standard);
    document.getElementById("debug_fxns").innerHTML = loadDocsByCategory("Debug Functions", dnhph3docs_standard);
    document.getElementById("cdata_fxns").innerHTML = loadDocsByCategory("Common Data Functions", dnhph3docs_standard);
    document.getElementById("audio_fxns").innerHTML = loadDocsByCategory("Audio Functions", dnhph3docs_standard);
    document.getElementById("input_fxns").innerHTML = loadDocsByCategory("Input Functions", dnhph3docs_standard);
    document.getElementById("render_fxns").innerHTML = loadDocsByCategory("Render Functions", dnhph3docs_standard);
    document.getElementById("3dcamera_fxns").innerHTML = loadDocsByCategory("3D Camera Functions", dnhph3docs_standard);
    document.getElementById("2dcamera_fxns").innerHTML = loadDocsByCategory("2D Camera Functions", dnhph3docs_standard);
    document.getElementById("script_fxns").innerHTML = loadDocsByCategory("Script Functions", dnhph3docs_standard);
    document.getElementById("system_fxns").innerHTML = loadDocsByCategory("System Functions", dnhph3docs_standard);
    document.getElementById("player_fxns").innerHTML = loadDocsByCategory("Player Functions", dnhph3docs_standard);
    document.getElementById("enemy_fxns").innerHTML = loadDocsByCategory("Enemy Functions", dnhph3docs_standard);
    document.getElementById("shot_fxns").innerHTML = loadDocsByCategory("Shot Functions", dnhph3docs_standard);
    document.getElementById("item_fxns").innerHTML = loadDocsByCategory("Item Functions", dnhph3docs_standard);
    document.getElementById("other_fxns").innerHTML = loadDocsByCategory("Other Functions", dnhph3docs_standard);

    //If the user wanted to access a specific function, scroll them down.
    var destid = location.hash.substring(1);
    if (destid != null && destid != undefined && destid != "") {
        document.getElementById(destid).scrollIntoView();
    }
}

//Loads documentation onto docs_object.html
function loadDocsOBJ() {
    //Load each category one by one
    document.getElementById("object_fxns").innerHTML = loadDocsByCategory("Object Functions", dnhph3docs_object);
    document.getElementById("render_object_fxns").innerHTML = loadDocsByCategory("Render Object Functions", dnhph3docs_object);
    document.getElementById("primitive_object_fxns").innerHTML = loadDocsByCategory("Primitive Object Functions", dnhph3docs_object);
    document.getElementById("2dsprite_object_fxns").innerHTML = loadDocsByCategory("2D Sprite Object Functions", dnhph3docs_object);
    document.getElementById("2dspritelist_object_fxns").innerHTML = loadDocsByCategory("2D Sprite List Object Functions", dnhph3docs_object);
    document.getElementById("3dsprite_object_fxns").innerHTML = loadDocsByCategory("3D Sprite Object Functions", dnhph3docs_object);
    document.getElementById("mesh_object_fxns").innerHTML = loadDocsByCategory("Mesh Object Functions", dnhph3docs_object);
    document.getElementById("text_object_fxns").innerHTML = loadDocsByCategory("Text Object Functions", dnhph3docs_object);
    document.getElementById("shader_object_fxns").innerHTML = loadDocsByCategory("Shader Object Functions", dnhph3docs_object);
    document.getElementById("sound_object_fxns").innerHTML = loadDocsByCategory("Sound Object Functions", dnhph3docs_object);
    document.getElementById("file_object_fxns").innerHTML = loadDocsByCategory("File Object Functions", dnhph3docs_object);
    document.getElementById("textfile_object_fxns").innerHTML = loadDocsByCategory("Text File Object Functions", dnhph3docs_object);
    document.getElementById("binaryfile_object_fxns").innerHTML = loadDocsByCategory("Binary File Object Functions", dnhph3docs_object);
    document.getElementById("move_object_fxns").innerHTML = loadDocsByCategory("Move Object Functions", dnhph3docs_object);
    document.getElementById("enemy_object_fxns").innerHTML = loadDocsByCategory("Enemy Object Functions", dnhph3docs_object);
    document.getElementById("bossscene_object_fxns").innerHTML = loadDocsByCategory("Boss Scene Object Functions", dnhph3docs_object);
    document.getElementById("shot_object_fxns").innerHTML = loadDocsByCategory("Shot Object Functions", dnhph3docs_object);
    document.getElementById("item_object_fxns").innerHTML = loadDocsByCategory("Item Object Functions", dnhph3docs_object);
    document.getElementById("player_object_fxns").innerHTML = loadDocsByCategory("Player Object Functions", dnhph3docs_object);
    document.getElementById("collision_object_fxns").innerHTML = loadDocsByCategory("Collision Object Functions", dnhph3docs_object);

    //If the user wanted to access a specific function, scroll them down.
    var destid = location.hash.substring(1);
    if (destid != null && destid != undefined && destid != "") {
        document.getElementById(destid).scrollIntoView();
    }
}

//Loads documentation onto docs_system.html
function loadDocsSYS() {
    //Load each category one by one
    document.getElementById("player_main_fxns").innerHTML = loadDocsByCategory("Player Main Functions", dnhph3docs_system);
    document.getElementById("player_spell_fxns").innerHTML = loadDocsByCategory("Player Spell Functions", dnhph3docs_system);
    document.getElementById("private_system_fxns").innerHTML = loadDocsByCategory("Private System Functions", dnhph3docs_system);
    document.getElementById("custom_script_fxns").innerHTML = loadDocsByCategory("Custom Script Functions", dnhph3docs_system);
    document.getElementById("package_fxns").innerHTML = loadDocsByCategory("Package Functions", dnhph3docs_system);

    //If the user wanted to access a specific function, scroll them down.
    var destid = location.hash.substring(1);
    if (destid != null && destid != undefined && destid != "") {
        document.getElementById(destid).scrollIntoView();
    }
}

//Loads documentation onto docs_event.html
function loadDocsEvent() {
    //Load each category one by one
    document.getElementById("danmakufu_events").innerHTML = loadDocsByCategory("Danmakufu Events", dnhph3docs_event);

    //If the user wanted to access a specific function, scroll them down.
    var destid = location.hash.substring(1);
    if (destid != null && destid != undefined && destid != "") {
        document.getElementById(destid).scrollIntoView();
    }
}

//Loads list of functions with links onto docs.html
function loadDocsList() {
    var functionlist = "";
    var toclist = ""; //internal toc
    //For every category, link category name with divID, and all the functions present (with links)
    var temp = ""
    temp = loadListByCategory("Math Functions", dnhph3docs_standard, "docs_standard.html", "sub1"); functionlist += temp[0]; toclist += temp[1];
    temp = loadListByCategory("Text Functions", dnhph3docs_standard, "docs_standard.html", "sub2"); functionlist += temp[0]; toclist += temp[1];
    temp = loadListByCategory("Path Functions", dnhph3docs_standard, "docs_standard.html", "sub3"); functionlist += temp[0]; toclist += temp[1];
    temp = loadListByCategory("Time Functions", dnhph3docs_standard, "docs_standard.html", "sub4"); functionlist += temp[0]; toclist += temp[1];
    temp = loadListByCategory("Debug Functions", dnhph3docs_standard, "docs_standard.html", "sub5"); functionlist += temp[0]; toclist += temp[1];
    temp = loadListByCategory("Common Data Functions", dnhph3docs_standard, "docs_standard.html", "sub6"); functionlist += temp[0]; toclist += temp[1];
    temp = loadListByCategory("Audio Functions", dnhph3docs_standard, "docs_standard.html", "sub7"); functionlist += temp[0]; toclist += temp[1];
    temp = loadListByCategory("Input Functions", dnhph3docs_standard, "docs_standard.html", "sub8"); functionlist += temp[0]; toclist += temp[1];
    temp = loadListByCategory("Render Functions", dnhph3docs_standard, "docs_standard.html", "sub9"); functionlist += temp[0]; toclist += temp[1];
    temp = loadListByCategory("3D Camera Functions", dnhph3docs_standard, "docs_standard.html", "sub10"); functionlist += temp[0]; toclist += temp[1];
    temp = loadListByCategory("2D Camera Functions", dnhph3docs_standard, "docs_standard.html", "sub11"); functionlist += temp[0]; toclist += temp[1];
    temp = loadListByCategory("Script Functions", dnhph3docs_standard, "docs_standard.html", "sub12"); functionlist += temp[0]; toclist += temp[1];
    temp = loadListByCategory("System Functions", dnhph3docs_standard, "docs_standard.html", "sub13"); functionlist += temp[0]; toclist += temp[1];
    temp = loadListByCategory("Player Functions", dnhph3docs_standard, "docs_standard.html", "sub14"); functionlist += temp[0]; toclist += temp[1];
    temp = loadListByCategory("Enemy Functions", dnhph3docs_standard, "docs_standard.html", "sub15"); functionlist += temp[0]; toclist += temp[1];
    temp = loadListByCategory("Shot Functions", dnhph3docs_standard, "docs_standard.html", "sub16"); functionlist += temp[0]; toclist += temp[1];
    temp = loadListByCategory("Item Functions", dnhph3docs_standard, "docs_standard.html", "sub17"); functionlist += temp[0]; toclist += temp[1];
    temp = loadListByCategory("Other Functions", dnhph3docs_standard, "docs_standard.html", "sub18"); functionlist += temp[0]; toclist += temp[1];

    temp = loadListByCategory("Object Functions", dnhph3docs_object, "docs_object.html", "sub1"); functionlist += temp[0]; toclist += temp[1];
    temp = loadListByCategory("Render Object Functions", dnhph3docs_object, "docs_object.html", "sub2"); functionlist += temp[0]; toclist += temp[1];
    temp = loadListByCategory("Primitive Object Functions", dnhph3docs_object, "docs_object.html", "sub3"); functionlist += temp[0]; toclist += temp[1];
    temp = loadListByCategory("2D Sprite Object Functions", dnhph3docs_object, "docs_object.html", "sub4"); functionlist += temp[0]; toclist += temp[1];
    temp = loadListByCategory("2D Sprite List Object Functions", dnhph3docs_object, "docs_object.html", "sub5"); functionlist += temp[0]; toclist += temp[1];
    temp = loadListByCategory("3D Sprite Object Functions", dnhph3docs_object, "docs_object.html", "sub6"); functionlist += temp[0]; toclist += temp[1];
    temp = loadListByCategory("Mesh Object Functions", dnhph3docs_object, "docs_object.html", "sub7"); functionlist += temp[0]; toclist += temp[1];
    temp = loadListByCategory("Text Object Functions", dnhph3docs_object, "docs_object.html", "sub8"); functionlist += temp[0]; toclist += temp[1];
    temp = loadListByCategory("Shader Object Functions", dnhph3docs_object, "docs_object.html", "sub9"); functionlist += temp[0]; toclist += temp[1];
    temp = loadListByCategory("Sound Object Functions", dnhph3docs_object, "docs_object.html", "sub10"); functionlist += temp[0]; toclist += temp[1];
    temp = loadListByCategory("File Object Functions", dnhph3docs_object, "docs_object.html", "sub11"); functionlist += temp[0]; toclist += temp[1];
    temp = loadListByCategory("Text File Object Functions", dnhph3docs_object, "docs_object.html", "sub12"); functionlist += temp[0]; toclist += temp[1];
    temp = loadListByCategory("Binary File Object Functions", dnhph3docs_object, "docs_object.html", "sub13"); functionlist += temp[0]; toclist += temp[1];
    temp = loadListByCategory("Move Object Functions", dnhph3docs_object, "docs_object.html", "sub14"); functionlist += temp[0]; toclist += temp[1];
    temp = loadListByCategory("Enemy Object Functions", dnhph3docs_object, "docs_object.html", "sub15"); functionlist += temp[0]; toclist += temp[1];
    temp = loadListByCategory("Boss Scene Object Functions", dnhph3docs_object, "docs_object.html", "sub16"); functionlist += temp[0]; toclist += temp[1];
    temp = loadListByCategory("Shot Object Functions", dnhph3docs_object, "docs_object.html", "sub17"); functionlist += temp[0]; toclist += temp[1];
    temp = loadListByCategory("Item Object Functions", dnhph3docs_object, "docs_object.html", "sub18"); functionlist += temp[0]; toclist += temp[1];
    temp = loadListByCategory("Player Object Functions", dnhph3docs_object, "docs_object.html", "sub19"); functionlist += temp[0]; toclist += temp[1];
    temp = loadListByCategory("Collision Object Functions", dnhph3docs_object, "docs_object.html", "sub20"); functionlist += temp[0]; toclist += temp[1];

    temp = loadListByCategory("Player Main Functions", dnhph3docs_system, "docs_system.html", "sub1"); functionlist += temp[0]; toclist += temp[1];
    temp = loadListByCategory("Player Spell Functions", dnhph3docs_system, "docs_system.html", "sub2"); functionlist += temp[0]; toclist += temp[1];
    temp = loadListByCategory("Private System Functions", dnhph3docs_system, "docs_system.html", "sub3"); functionlist += temp[0]; toclist += temp[1];
    temp = loadListByCategory("Custom Script Functions", dnhph3docs_system, "docs_system.html", "sub4"); functionlist += temp[0]; toclist += temp[1];
    temp = loadListByCategory("Package Functions", dnhph3docs_system, "docs_system.html", "sub5"); functionlist += temp[0]; toclist += temp[1];

    temp = loadListByCategory("Danmakufu Events", dnhph3docs_event, "docs_event.html", "sub1"); functionlist += temp[0]; toclist += temp[1];

    document.getElementById("fxn_list").innerHTML = toclist + functionlist;
}

//Load links to documentation into a string for a specific category
function loadListByCategory(catnameparam, maindocobj, file, subid) {
    var returnstring = "";
    var cats = maindocobj.categories;
    var catobj; //object referring to the specific category
    var i;
    for (i = 0; i < cats.length; i += 1) {
        if (cats[i].catname === catnameparam) {catobj = cats[i]; break;}
    }

    if (catobj === null || catobj === undefined) {
        return "Error: Category Not Found";
    }
    //Output
    var fs = catobj.fxns;

    //First, create the header
    var categoryid = subid + catnameparam.replace(/ /g,'');
    returnstring += '<h3 class="ph3tutorialheader" id="' + categoryid + '"><a href="./' + file + '#' + subid + '">' + catnameparam + '</a></h3>';

    //Now, loop through functions
    for (j = 0; j < fs.length; j += 1) {
        returnstring += "<div id='fxn_" + fs[j].fname + "'><a href='./" + file + "#fxn_" + fs[j].fname + "'><code>" + fs[j].fname + "</code></a></div>";
    }
    return [returnstring, "<div><a href='#" + categoryid + "'><code>" + catnameparam + "</code></a></div>"];
}

//Load documentation into a string for a specific category
function loadDocsByCategory (catnameparam, maindocobj) {
    var returnstring = "";

    var cats = maindocobj.categories;
    var catobj; //object referring to the specific category
    var i;
    for (i = 0; i < cats.length; i += 1) {
        if (cats[i].catname === catnameparam) {catobj = cats[i]; break;}
    }

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

    //Now, loop through functions/entries to populate docs
    for (j = 0; j < fs.length; j += 1) {
        var argnames = ""; //Argument list inside function/entry header
        var l;
        for (l = 0; l < fs[j].args.length; l += 1) {
            //Delimit by :, then prune whitepsace
            var delim = fs[j].args[l].split(":");
            argnames += delim[0].trim().toString();
            if (l < fs[j].args.length - 1) {
                argnames += ", ";
            }
        }
        // Entry Type checking for non-Function values
        let fxnargs = "(" + argnames + ")";
        let entrytype = "Fxn"; 
        if ('isEvent' in fs[j] && fs[j].isEvent === true) { // If arguments are to be hidden (e.g. event and not function)
            fxnargs = "";
            entrytype = "Event";
        }
        // Construct body for this entry value
        returnstring += "<div class='docsfxnname' id='fxn_" + fs[j].fname + "'><a href='#fxn_" + fs[j].fname + "'><code>" + fs[j].fname + fxnargs + "</code></a>" + 
            "&nbsp;&nbsp;<button class='docs_copybutton' onclick='docs_copyName(\"" + fs[j].fname + "\")'>Copy " + entrytype + " Name</button></div>";
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

//Enables user to copy function name to clipboard (https://stackoverflow.com/questions/400212)
function docs_copyName(input) {
    // Copies a string to the clipboard. Must be called from within an 
    // event handler such as click. May return false if it failed, but
    // this is not always possible. Browser support for Chrome 43+, 
    // Firefox 42+, Safari 10+, Edge and IE 10+.
    // IE: The clipboard feature may be disabled by an administrator. By
    // default a prompt is shown the first time the clipboard is 
    // used (per session).
    if (window.clipboardData && window.clipboardData.setData) {
        // IE specific code path to prevent textarea being shown while dialog is visible.
        return clipboardData.setData("Text", input); 

    } else if (document.queryCommandSupported && document.queryCommandSupported("copy")) {
        var textarea = document.createElement("textarea");
        textarea.textContent = input;
        textarea.style.position = "fixed";  // Prevent scrolling to bottom of page in MS Edge.
        document.body.appendChild(textarea);
        textarea.select();
        try {
            return document.execCommand("copy");  // Security exception may be thrown by some browsers.
        } catch (ex) {
            console.warn("Copy to clipboard failed.", ex);
            return false;
        } finally {
            document.body.removeChild(textarea);
        }
    }
}