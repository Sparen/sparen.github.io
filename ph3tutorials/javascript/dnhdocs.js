// Documentation for Touhou Danmakufu ph3, in a really shitty JavaScript / JSON file

/* Types: 
 * real (for numbers) will be noted as 'number' or 'Object ID'. numbers that are specifically floating points will be referred to as 'float' in types
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
                    "notes": "dividend % divisor.<br>Remainder or % will always return a value with the same sign as the divisor.<br>For example, -7 % 4 equals 1 and 7 % -4 equals -1."
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
                    "args": ["ang : number (degrees)"],
                    "returnv": "cosine of ang : number",
                    "notes": "Cosine is a value between -1 and 1 that corresponds to the x-value in a coordinate plane."
                },
                {
                    "fname": "sin",
                    "args": ["ang : number (degrees)"],
                    "returnv": "sine of ang : number",
                    "notes": "Sine is a value between -1 and 1 that corresponds to the y-value in a coordinate plane."
                },
                {
                    "fname": "tan",
                    "args": ["ang : number (degrees)"],
                    "returnv": "tangent of ang : number",
                    "notes": "Tangent is the slope of the line created by the angle (x/y)."
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
                    "returnv": "v as an integer : number (int)",
                    "notes": "Values of 0.5 or greater are rounded up; otherwise they are rounded down."
                },
                {
                    "fname": "truncate",
                    "args": ["v : number"],
                    "returnv": "v with decimal component removed : number (int)",
                    "notes": "Example: truncate(1.123) -> 1<br>The shortened name trunc can also be used to refer to this function."
                },
                {
                    "fname": "ceil",
                    "args": ["v : number"],
                    "returnv": "v rounded up to next integer : number (int)",
                    "notes": ""
                },
                {
                    "fname": "floor",
                    "args": ["v : number"],
                    "returnv": "v rounded down to next integer : number (int)",
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
                    "returnv": "value of pi : number",
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
        },
        {
            "catname": "Text Functions",
            "fxns": [
                {
                    "fname": "InstallFont",
                    "args": ["path : string (path)"],
                    "returnv": "true if loading succeeded, false otherwise : bool",
                    "notes": "Loads the given font specified with the file path, which can be used with ObjText_SetFontType, allowing for usage of fonts that are not installed on the player's computer."
                },
                {
                    "fname": "ToString",
                    "args": ["v : number"],
                    "returnv": "v as a string : string",
                    "notes": ""
                },
                {
                    "fname": "IntToString",
                    "args": ["v : number"],
                    "returnv": "v as a string : string",
                    "notes": "Omits any decimal places."
                },
                {
                    "fname": "itoa",
                    "args": ["v : number (int)"],
                    "returnv": "v as an array : string",
                    "notes": "Converts an integer value to an string form, but leaves out decimal places.<br>Example: rtoa(12.34) -> ['1', '2']<br>This function might behave identically to IntToString."
                },
                {
                    "fname": "rtoa",
                    "args": ["v : number"],
                    "returnv": "v as an array : string",
                    "notes": "Converts any real number to an string form.<br>Example: rtoa(12.34) -> ['1', '2', '.', '3', '4']"
                },
                {
                    "fname": "rtos",
                    "args": ["format : string", "v : number"],
                    "returnv": "v as a string, with filtering options : string",
                    "notes": "The format is presented as a string that determines how many digits will be shown.<br>It can contain any combination of the following three characters: 0, ., #.<br>0 is a slot for a digit.<br>. represents the decimal place in the string.<br># creates a space in the string.<br>Example: rtos(\"000.000\", 1.23) = \"001.230\", and rtos(\"#00\", 1.23) = \" 01\"."
                },
                {
                    "fname": "vtos",
                    "args": ["format : string", "v : number"],
                    "returnv": "v as a string, with filtering options : string",
                    "notes": "The format is presented as a string.<br>Format String: First, the number of digits on each side of the decimal are specified (000.00 is 3.2 in the format string).<br>Unused digits will be filled with spaces.<br>If preceded by a \"-\", the digits will be right-justified, adding blank spaces to the right instead of the left.<br>If preceded by a \"0\", all digits not occupied by the value will be filled by zeroes.<br>If ended with a \"d\", the value will be presented as an integer.<br>If ended with an \"f\", the value will be presented as a real/floating point number.<br>If ended with an \"s\", this indicates the value given was in the form of a string.<br>Example: vtos(\"03d\", 1.23) = \"001\", vtos(\"3d\", 1.23) = \"　1\", vtos(\"-3d\", 1.23) = \"1　\", and vtos(\"03.5f\", 1.23) = \"001.23000\"."
                },
                {
                    "fname": "atoi",
                    "args": ["v : string"],
                    "returnv": "v as an integer : number (int)",
                    "notes": "If there is a decimal part, then it will be truncated.<br>If the string does not represent a valid number, then 0 will be returned."
                },
                {
                    "fname": "ator",
                    "args": ["v : string"],
                    "returnv": "v as an real/floating point : number (float)",
                    "notes": "If the string does not represent a valid number, then 0 will be returned."
                },
                {
                    "fname": "TrimString",
                    "args": ["v : string"],
                    "returnv": "v without preceding and trailing whitespace : string",
                    "notes": "Example: TrimString(\" ABC \") will return \"ABC\"."
                },
                {
                    "fname": "SplitString",
                    "args": ["v : string", "d : string"],
                    "returnv": "Array consisting of v split by delimiter d : string []",
                    "notes": "Example: SplitString(\"A/123/BCD\", \"/\") will return [\"A\", \"123\", \"BCD\"]."
                }
            ]
        },
        {
            "catname": "Path Functions",
            "fxns": [
                {
                    "fname": "GetFileDirectory",
                    "args": ["path : string (path)"],
                    "returnv": "directory of the specified file path : string (path)",
                    "notes": "Specifically, returns the input string up to the rightmost forward slash, with backslashes removed."
                },
                {
                    "fname": "GetFilePathList",
                    "args": ["path : string (path)"],
                    "returnv": "array of files in the directory of the specified file/directory path : string (path) []",
                    "notes": ""
                },
                {
                    "fname": "GetDirectoryList",
                    "args": ["path : string (path)"],
                    "returnv": "array of the directories available within the directory of the specified path : string (path) []",
                    "notes": ""
                },
                {
                    "fname": "GetModuleDirectory",
                    "args": [],
                    "returnv": "the directory containing the running th_dnh.exe file : string (path)",
                    "notes": ""
                },
                {
                    "fname": "GetMainStgScriptPath",
                    "args": [],
                    "returnv": "the path to the current running stage script : string (path)",
                    "notes": ""
                },
                {
                    "fname": "GetMainPackageScriptPath",
                    "args": [],
                    "returnv": "the path to the current running package script : string (path)",
                    "notes": ""
                },
                {
                    "fname": "GetMainStgScriptDirectory",
                    "args": [],
                    "returnv": "the directory of the current running stage script : string (path)",
                    "notes": ""
                },
                {
                    "fname": "GetCurrentScriptDirectory",
                    "args": [],
                    "returnv": "the directory of the current running script (the file in which this function was called) : string (path)",
                    "notes": ""
                },
                {
                    "fname": "GetScriptPathList",
                    "args": ["path : string (path)", "scripttype : number (const)"],
                    "returnv": "array of paths to available (selectable at selection screen) scripts of the specified type within the directory of the specified path : string (path) []",
                    "notes": "Script type is TYPE_SCRIPT_* where * is one of the following: ALL, PLAYER, SINGLE, PLURAL, STAGE, or PACKAGE."
                }
            ]
        },
        {
            "catname": "Time Functions",
            "fxns": [
                {
                    "fname": "GetCurrentDateTimeS",
                    "args": ["date : string"],
                    "returnv": "string containing the current date and time : string (date)",
                    "notes": "Example: If the current date is 2012/09/16 12:34:56, then \"20120916123456\" will be returned.<br>To convert to a number use atoi like so: <code>let year = atoi(GetCurrentDateTimeS[0..4]);</code>"
                },
                {
                    "fname": "GetStageTime",
                    "args": [],
                    "returnv": "amount of time that has elapsed since the start of the main script in milliseconds : number (int)",
                    "notes": ""
                },
                {
                    "fname": "GetPackageTime",
                    "args": [],
                    "returnv": "amount of time that has elapsed since the start of the main package in milliseconds : number (int)",
                    "notes": ""
                },
                {
                    "fname": "GetCurrentFps",
                    "args": [],
                    "returnv": "current FPS : number (float)",
                    "notes": ""
                },
                {
                    "fname": "GetReplayFps",
                    "args": [],
                    "returnv": "replay FPS at the current time point : number (int)",
                    "notes": "This value refreshes as a much slower rate than GetCurrentFps."
                }
            ]
        },
        {
            "catname": "Debug Functions",
            "fxns": [
                {
                    "fname": "WriteLog",
                    "args": ["value : free"],
                    "returnv": "",
                    "notes": "Outputs given value to log window."
                },
                {
                    "fname": "RaiseError",
                    "args": ["err : string"],
                    "returnv": "",
                    "notes": "Creates an error box with the specified err string.<br>Execution of the script is stopped, closing the script."
                },
                {
                    "fname": "assert",
                    "args": ["condition : bool", "value : free"],
                    "returnv": "",
                    "notes": "Raises an error with the specified value and terminates the script if the condition is false."
                }
            ]
        },
        {
            "catname": "Common Data Functions",
            "fxns": [
                {
                    "fname": "SetCommonData",
                    "args": ["key : string", "value : free"],
                    "returnv": "",
                    "notes": "Maps the given key to the given value in common data. Uses the default common data area.<br>The value can be returned by using GetCommonData with the corresponding key."
                },
                {
                    "fname": "GetCommonData",
                    "args": ["key : string", "defaultvalue : free"],
                    "returnv": "The value associated with the given key in the default common data area, or defaultvalue if no mapping exists : free",
                    "notes": ""
                },
                {
                    "fname": "ClearCommonData",
                    "args": [],
                    "returnv": "",
                    "notes": "Removes all of the common data in the default common data area."
                },
                {
                    "fname": "DeleteCommonData",
                    "args": ["key : string"],
                    "returnv": "",
                    "notes": "Removes the common data mapping with the specified key from the default common data area."
                },
                {
                    "fname": "SetAreaCommonData",
                    "args": ["area : string", "key : string", "value : free"],
                    "returnv": "",
                    "notes": "Maps the given key to the given value in common data. Uses the specified common data area.<br>The value can be returned by using GetAreaCommonData with the corresponding area key."
                },
                {
                    "fname": "GetAreaCommonData",
                    "args": ["area : string", "key : string", "defaultvalue : free"],
                    "returnv": "The value associated with the given key in the specified common data area, or defaultvalue if no mapping exists : free",
                    "notes": ""
                },
                {
                    "fname": "ClearAreaCommonData",
                    "args": ["area : string"],
                    "returnv": "",
                    "notes": "Removes all of the common data in the specified common data area."
                },
                {
                    "fname": "DeleteAreaCommonData",
                    "args": ["area : string", "key : string"],
                    "returnv": "",
                    "notes": "Removes the common data mapping with the specified key from the specified common data area."
                },
                {
                    "fname": "CreateCommonDataArea",
                    "args": ["area : string"],
                    "returnv": "",
                    "notes": "Creates a common data area with the provided area name, in which various common data can be stored."
                },
                {
                    "fname": "IsCommonDataAreaExists",
                    "args": ["area : string"],
                    "returnv": "true if the area name corresponds to an existing common data area; false otherwise : bool",
                    "notes": ""
                },
                {
                    "fname": "CopyCommonDataArea",
                    "args": ["destarea : string", "sourcearea : string"],
                    "returnv": "",
                    "notes": "Copies the common data in the source area to the destination area.<br>If the source common data area is invalid, nothing will happen."
                },
                {
                    "fname": "GetCommonDataAreaKeyList",
                    "args": [],
                    "returnv": "Array of all common data area names : string []",
                    "notes": ""
                },
                {
                    "fname": "GetCommonDataValueKeyList",
                    "args": ["area : string"],
                    "returnv": "Array of the keys in the specified common data area. : string []",
                    "notes": ""
                },
                {
                    "fname": "SaveCommonDataAreaA1",
                    "args": ["area : string"],
                    "returnv": "true if successful; false otherwise : bool",
                    "notes": "Saves everything in the specified common data area to a data file."
                },
                {
                    "fname": "LoadCommonDataAreaA1",
                    "args": ["area : string"],
                    "returnv": "true if successful; false otherwise : bool",
                    "notes": "Loads everything in the specified common data area from the saved data file."
                },
                {
                    "fname": "SaveCommonDataAreaA2",
                    "args": ["area : string", "path : string (path)"],
                    "returnv": "true if successful; false otherwise : bool",
                    "notes": "Saves everything in the specified common data area to a data file at the specified path."
                },
                {
                    "fname": "LoadCommonDataAreaA2",
                    "args": ["area : string", "path : string (path)"],
                    "returnv": "true if successful; false otherwise : bool",
                    "notes": "Loads everything in the specified common data area from the saved data file at the specified path."
                },
                {
                    "fname": "SaveCommonDataAreaToReplayFile",
                    "args": ["area : string"],
                    "returnv": "true if successful; false otherwise : bool",
                    "notes": "Saves the specified common data area to the replay file.<br>Do not call this function during a replay."
                },
                {
                    "fname": "LoadCommonDataAreaFromReplayFile",
                    "args": ["area : string"],
                    "returnv": "true if successful; false otherwise : bool",
                    "notes": "Loads everything in the specified common data area from the replay file.<br>Do not call this function during a replay."
                }
            ]
        },
        {
            "catname": "Audio Functions",
            "fxns": [
                {
                    "fname": "LoadSound",
                    "args": ["path : string (path)"],
                    "returnv": "",
                    "notes": "Loads specified sound file.<br>Required before using PlayBGM or PlaySE in the same script as these two functions are called on the respective paths."
                },
                {
                    "fname": "RemoveSound",
                    "args": ["path : string (path)"],
                    "returnv": "",
                    "notes": "Unloads specified sound file."
                },
                {
                    "fname": "PlayBGM",
                    "args": ["path : string (path)", "loopstart : number (seconds)", "loopend : number (seconds)"],
                    "returnv": "",
                    "notes": "Plays the specified sound file as a looping BGM.<br>You can be more precise by using decimals.<br>BGM will play from start until end of track or loopend, whichever is first, and then play from loopstart."
                },
                {
                    "fname": "PlaySE",
                    "args": ["path : string (path)"],
                    "returnv": "",
                    "notes": "Plays the specified sound file as a sound effect."
                },
                {
                    "fname": "StopSound",
                    "args": ["path : string (path)"],
                    "returnv": "",
                    "notes": "Stops specified sound file."
                }
            ]
        },{
            "catname": "Input Functions",
            "fxns": [
                {
                    "fname": "GetVirtualKeyState",
                    "args": ["vkname : string"],
                    "returnv": "key state of specified virtual key : number (const)",
                    "notes": ""
                },
                {
                    "fname": "SetVirtualKeyState",
                    "args": ["vkname : string", "state : number (const)"],
                    "returnv": "",
                    "notes": "Sets the given virtual key to the given state.<br>The virtual key will be restored to its true state a frame after you stop calling this function.<br>Keep in mind that if you set it to KEY_HOLD it will not go to KEY_PULL or KEY_PUSH."
                },
                {
                    "fname": "AddVirtualKey",
                    "args": ["vkname : string", "keyname : number (const)", "padkey : number (const)"],
                    "returnv": "key state of specified virtual key : number (const)",
                    "notes": "Registers the given virtual key with the given key.<br>You may map any number of virtual keys to a single key, but virtual keys may only be mapped to a single key.<br>Use KEY_INVALID if you do not want pad input.<br>Note that this function OVERWRITES any existing mappings.<br>IE: If you were to use <code>AddVirtualKey(VK_SHOT, KEY_UP, KEY_INVALID);</code>, whenever you press the up arrow key, the virtual shot key will be pressed.<br>However, you will no longer be able to move up, so to fix this, you add AddVirtualKey(VK_UP, KEY_UP, KEY_INVALID);. You will now shoot and move up at the same time."
                },
                {
                    "fname": "AddReplayTargetVirtualKey",
                    "args": ["vkname : string"],
                    "returnv": "",
                    "notes": "Registers the given key id to the replay file.<br>This key id should be one that you have already registered with AddVirtualKey."
                },
                {
                    "fname": "GetKeyState",
                    "args": ["keyname : number (const)"],
                    "returnv": "key state of specified key : number (const)",
                    "notes": ""
                },
                {
                    "fname": "GetMouseState",
                    "args": ["mousebutton : number (const)"],
                    "returnv": "state of specified mouse button : number (const)",
                    "notes": "Use MOUSE_LEFT, MOUSE_RIGHT, and MOUSE_MIDDLE for the argument."
                },
                {
                    "fname": "GetMouseX",
                    "args": [],
                    "returnv": "mouse x position : number",
                    "notes": "The origin for the mouse coordinates is the upper left of the Danmakufu window (0, 0).<br>Mouse coordinates will be properly adjusted according to the resizing of Danmakufu's window."
                },
                {
                    "fname": "GetMouseY",
                    "args": [],
                    "returnv": "mouse y position : number",
                    "notes": "The origin for the mouse coordinates is the upper left of the Danmakufu window (0, 0).<br>Mouse coordinates will be properly adjusted according to the resizing of Danmakufu's window."
                },
                {
                    "fname": "GetMouseMoveZ",
                    "args": [],
                    "returnv": "amount of change that has occurred to the mouse's Z axis : number",
                    "notes": "The Z axis is normally the middle mouse wheel. If there is no mouse wheel, the value will be 0.<br>The value returned will be negative if the wheel was moved back, and positive if the wheel moved forward."
                },
                {
                    "fname": "SetSkipModeKey",
                    "args": ["keyname : number (const)"],
                    "returnv": "",
                    "notes": "Specifies the key to use for fast playback mode.<br>The default key is KEY_LCONTROL.<br>Specify KEY_INVALID if you do not wish to enable fast playback."
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
    if (fxn.returnv !== "") {str += "<code>Return: " + fxn.returnv + "</code><br>";}
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
    document.getElementById("text_fxns").innerHTML = loadDocsByCategory("Text Functions");
    document.getElementById("path_fxns").innerHTML = loadDocsByCategory("Path Functions");
    document.getElementById("time_fxns").innerHTML = loadDocsByCategory("Time Functions");
    document.getElementById("debug_fxns").innerHTML = loadDocsByCategory("Debug Functions");
    document.getElementById("cdata_fxns").innerHTML = loadDocsByCategory("Common Data Functions");
    document.getElementById("audio_fxns").innerHTML = loadDocsByCategory("Audio Functions");
    document.getElementById("input_fxns").innerHTML = loadDocsByCategory("Input Functions");
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
        returnstring += "<code style='font-size: 20px'>" + fs[j].fname + "()</code><br>";
        var k;
        for (k = 1; k <= fs[j].args.length; k += 1) {
            returnstring += "<code>&nbsp;&nbsp;&nbsp;&nbsp;" + k.toString() + ") " + fs[j].args[k - 1] + "</code><br>";
        }
        if (fs[j].returnv !== "") {returnstring += "<code>Return: " + fs[j].returnv + "</code><br>";}
        if (fs[j].notes !== "") {returnstring += "<br>Notes:<br>" + fs[j].notes;}
        returnstring += "<hr>";
    }
    return returnstring;
}