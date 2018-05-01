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
                    "returnv": "sum of v1 and v2 : number",
                    "notes": "v1 + v2.<br>If using add()/+ operator with strings, the result is incompatible with ordinary strings and requires ToString() to be called on it in order to be used with regular strings."
                },
                {
                    "fname": "subtract",
                    "args": ["v1 : number", "v2 : number"],
                    "returnv": "difference of v1 and v2 : number",
                    "notes": "v1 - v2.<br>If using subtract()/- operator with strings, the result is incompatible with ordinary strings and requires ToString() to be called on it in order to be used with regular strings."
                },
                {
                    "fname": "multiply",
                    "args": ["v1 : number", "v2 : number"],
                    "returnv": "product of v1 and v2 : number",
                    "notes": "v1 * v2"
                },
                {
                    "fname": "divide",
                    "args": ["v1 : number", "v2 : number"],
                    "returnv": "quotient of v1 and v2 : number",
                    "notes": "v1 / v2"
                },
                {
                    "fname": "remainder",
                    "args": ["dividend : number", "divisor : number"],
                    "returnv": "modulo (remainder of a quotient) of two values : number",
                    "notes": "divident % divisor.<br>Remainder or % will always return a value with the same sign as the divisor.<br>For example, -7 % 4 equals 1 and 7 % -4 equals -1."
                },
                {
                    "fname": "power",
                    "args": ["base : number", "exponent : number"],
                    "returnv": "base raised to the power of the exponent : number",
                    "notes": "base ^ exponent"
                },
                {
                    "fname": "min",
                    "args": ["v1 : number", "v2 : number"],
                    "returnv": "lesser of v1 and v2 : number",
                    "notes": ""
                },
                {
                    "fname": "max",
                    "args": ["v1 : number", "v2 : number"],
                    "returnv": "greater of v1 and v2 : number",
                    "notes": ""
                },
                {
                    "fname": "log",
                    "args": ["v : number"],
                    "returnv": "natural log (base e) of v : number",
                    "notes": ""
                },
                {
                    "fname": "log10",
                    "args": ["v : number"],
                    "returnv": "common log (base 10) of v : number",
                    "notes": ""
                },
                {
                    "fname": "cos",
                    "args": ["ang : number"],
                    "returnv": "cosine of ang : number",
                    "notes": "Argument should be in degrees.<br>Cosine is a value between -1 and 1 that corresponds to the x-value in a coordinate plane."
                },
                {
                    "fname": "sin",
                    "args": ["ang : number"],
                    "returnv": "sine of ang : number",
                    "notes": "Argument should be in degrees.<br>Sine is a value between -1 and 1 that corresponds to the y-value in a coordinate plane."
                },
                {
                    "fname": "tan",
                    "args": ["ang : number"],
                    "returnv": "tangent of ang : number",
                    "notes": "Argument should be in degrees.<br>Tangent is the slope of the line created by the angle (x/y)."
                },
                {
                    "fname": "acos",
                    "args": ["v : number"],
                    "returnv": "arccosine of v : number",
                    "notes": "Argument must be in range [-1, 1].<br>acos(cos(x)) = x, if x is between 0 and 180."
                },
                {
                    "fname": "asin",
                    "args": ["v : number"],
                    "returnv": "arcsine of v : number",
                    "notes": "Argument must be in range [-1, 1].<br>asin(sin(x)) = x, if x is between -90 and 90."
                },
                {
                    "fname": "atan",
                    "args": ["v : number"],
                    "returnv": "arctangent of v : number",
                    "notes": "atan(tan(x)) = x, if x is between -90 and 90."
                },
                {
                    "fname": "atan2",
                    "args": ["y : number", "x : number"],
                    "returnv": "arctangent of y/x, which is the angle from (0, 0) to (x, y) : number",
                    "notes": "The angle will be in the range -180 < a <= 180, where a is the returned value.<br>Useful for getting the angle from one point to another point.<br>For example, the angle from the boss to the player is atan2(player y - boss y, player x - boss x)."
                },
                {
                    "fname": "rand",
                    "args": ["min : number", "max : number"],
                    "returnv": "random floating point value in range (min, max) : number",
                    "notes": ""
                },
                {
                    "fname": "round",
                    "args": ["v : number"],
                    "returnv": "v as an integer : number",
                    "notes": "Values of 0.5 or greater are rounded up; otherwise they are rounded down."
                },
                {
                    "fname": "truncate",
                    "args": ["v : number"],
                    "returnv": "v with decimal component removed : number",
                    "notes": "Example: 1.123 -> 1<br>The shortened name trunc can also be used to refer to this function."
                },
                {
                    "fname": "ceil",
                    "args": ["v : number"],
                    "returnv": "v rounded up to next integer : number",
                    "notes": ""
                },
                {
                    "fname": "floor",
                    "args": ["v : number"],
                    "returnv": "v rounded down to next integer : number",
                    "notes": ""
                },
                {
                    "fname": "absolute",
                    "args": ["v : number"],
                    "returnv": "absolute value of v : number",
                    "notes": ""
                },
                {
                    "fname": "modc",
                    "args": ["v : number", "v2 : number"],
                    "returnv": "modulus of v : number",
                    "notes": "Unlike remainder, modc returns a value with the same sign as the dividend.<br>Example: modc(-7, 4) equals -3 and modc(7, -4) equals 3."
                },
                {
                    "fname": "pi",
                    "args": [],
                    "returnv": "value of pi rounded to 6 decimal digits : number",
                    "notes": ""
                },
                {
                    "fname": "successor",
                    "args": ["v : number"],
                    "returnv": "v + 1 : number",
                    "notes": "v++<br>Adds 1 to the value, then returns it."
                },
                {
                    "fname": "predecessor",
                    "args": ["v : number"],
                    "returnv": "v - 1 : number",
                    "notes": "v--<br>Subtracts 1 from the value, then returns it."
                },
                {
                    "fname": "negative",
                    "args": ["v : number"],
                    "returnv": "v * -1 : number",
                    "notes": "-v<br>Multiplies -1 to the value, then returns it."
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
    var str = "<code style='font-size: 24px'>" + fxn.fname + "()</code><hr>";
    var i;
    for (i = 1; i <= fxn.args.length; i += 1) {
        str += "<code>&nbsp;&nbsp;&nbsp;&nbsp;" + i.toString() + ") " + fxn.args[i - 1] + "</code><br>";
    }
    str += "<code>Return: " + fxn.returnv + "</code><br>";
    if (fxn.notes !== "") {str += "<br>Notes:<br>" + fxn.notes;}

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
        returnstring += "<code style='font-size: 24px'>" + fs[j].fname + "()</code><br>";
        var k;
        for (k = 1; k <= fs[j].args.length; k += 1) {
            returnstring += "<code>&nbsp;&nbsp;&nbsp;&nbsp;" + k.toString() + ") " + fs[j].args[k - 1] + "</code><br>";
        }
        returnstring += "<code>Return: " + fs[j].returnv + "</code><br>";
        if (fs[j].notes !== "") {returnstring += "<br>Notes:<br>" + fs[j].notes;}
        returnstring += "<hr>";
    }
    return returnstring;
}