// Documentation for Touhou Danmakufu ph3, in a really shitty JavaScript / JSON file

/* Types: 
 * real (for numbers) will be noted as 'number' or 'Object ID'
 * char (for strings) will be noted as 'char' or 'string'
 * 
 */

var dnhph3docs = {
    "categories": [
        {
            "catname": "Math Functions",
            "fxns": [
                {
                    "fname": "add",
                    "args": ["v1 : number", "v2 : number"],
                    "return": "sum of v1 and v2",
                    "notes": "If using add()/+ operator with strings, the result is incompatible with ordinary strings and requires ToString() to be called on it in order to be used with regular strings."
                },
                {
                    "fname": "subtract",
                    "args": ["v1 : number", "v2 : number"],
                    "return": "sum of v1 and v2 (number) or string of added character codes for each character",
                    "notes": "If using subtract()/- operator with strings, the result is incompatible with ordinary strings and requires ToString() to be called on it in order to be used with regular strings."
                }
            ]
        }
    ]
};

//On hover (mouseover), load the documentation into the tooltiptext element 
function getFxnDocs(fxnname, domid) {
    //Get information
    var fxn = retrieveFxn(fxnname);
    //Format information
    var str = "<span style='font-size: 24px; font-family: monospace'>" + fxn.fname + "()</span><hr>";
    var i;
    for (i = 1; i <= fxn.args.length; i += 1) {
        str += "<span style='font-family: monospace'>&nbsp;&nbsp;&nbsp;&nbsp;" + i.toString() + ") " + fxn.args[i - 1] + "</span><br>";
    }
    str += "<br>Notes: " + fxn.notes;

    //Prepare tooltip
    document.getElementById(domid).innerHTML = str;
}

function retrieveFxn(fxnname) {
    var cats = dnhph3docs.categories;
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
    return {};
}

//Loads documentation onto docs.html
function loadDocs() {
    //Load each category one by one
    document.getElementById("math_fxns").innerHTML = loadDocsByCategory("Math Functions");
}

function loadDocsByCategory (catnameparam) {
    var returnstring = "";

    var cats = dnhph3docs.categories;
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
    var j;
    for (j = 0; j < fs.length; j += 1) {
        returnstring += "<span style='font-size: 24px'><code>" + fs[j].fname + "()</code></span><br>";
        var k;
        for (k = 1; k <= fs[j].args.length; k += 1) {
            returnstring += "<code>&nbsp;&nbsp;&nbsp;&nbsp;" + k.toString() + ") " + fs[j].args[k - 1] + "</code><br>";
        }
        returnstring += "<br>Notes: " + fs[j].notes + "<hr>";
    }
    return returnstring;
}