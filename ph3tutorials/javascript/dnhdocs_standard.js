// Documentation for Touhou Danmakufu ph3, in a really shitty JavaScript / JSON file

/* Types: 
 * real (for numbers) will be noted as 'number' or 'Object ID'. numbers that are specifically floating points will be referred to as 'float' in types
 * char (for strings) will be noted as 'char' or 'string'
 */

var dnhph3docs_standard = {
    "categories": [
        {
            "catname": "Math Functions",
            "fxns": [
                {
                    "fname": "add",
                    "args": ["value1 : number", "value2 : number"],
                    "returnv": "sum of value1 and value2 : number",
                    "description": "Adds the two values and returns the sum.",
                    "notes": "Long form for value1 + value2.<br>If using add()/+ operator with strings, the result is incompatible with ordinary strings and requires ToString() to be called on it in order to be used with regular strings."
                },
                {
                    "fname": "subtract",
                    "args": ["value1 : number", "value2 : number"],
                    "returnv": "difference of value1 and value2 : number",
                    "description": "Subtracts the two values and returns the difference.",
                    "notes": "value1 - value2.<br>If using subtract()/- operator with strings, the result is incompatible with ordinary strings and requires ToString() to be called on it in order to be used with regular strings."
                },
                {
                    "fname": "multiply",
                    "args": ["value1 : number", "value2 : number"],
                    "returnv": "product of value1 and value2 : number",
                    "description": "Multiplies the two values and returns the product.",
                    "notes": "Long form for value1 * value2"
                },
                {
                    "fname": "divide",
                    "args": ["value1 : number", "value2 : number"],
                    "returnv": "quotient of value1 and value2 : number",
                    "description": "Divides the two values and returns the quotient (as a decimal).",
                    "notes": "Long form for value1 / value2"
                },
                {
                    "fname": "remainder",
                    "args": ["dividend : number", "divisor : number"],
                    "returnv": "modulo (remainder of a quotient) of two values : number",
                    "description": "Divides the two values and returns the remainder.",
                    "notes": "Long form for dividend % divisor.<br>Remainder or % will always return a value with the same sign as the divisor.<br>For example, -7 % 4 equals 1 and 7 % -4 equals -1."
                },
                {
                    "fname": "power",
                    "args": ["base : number", "exponent : number"],
                    "returnv": "base raised to the power of the exponent : number",
                    "description": "Raises the base to the power of the exponent and returns the result.",
                    "notes": "Long form for base ^ exponent"
                },
                {
                    "fname": "min",
                    "args": ["value1 : number", "value2 : number"],
                    "returnv": "lesser of value1 and value2 : number",
                    "description": "Returns the lesser of value1 and value2.",
                    "notes": ""
                },
                {
                    "fname": "max",
                    "args": ["value1 : number", "value2 : number"],
                    "returnv": "greater of value1 and value2 : number",
                    "description": "Returns the greater of value1 and value2.",
                    "notes": ""
                },
                {
                    "fname": "log",
                    "args": ["value : number"],
                    "returnv": "natural log (base e) of value : number",
                    "description": "Returns the natural log of the value.",
                    "notes": ""
                },
                {
                    "fname": "log10",
                    "args": ["value : number"],
                    "returnv": "common log (base 10) of value : number",
                    "description": "Returns the common log of the value.",
                    "notes": ""
                },
                {
                    "fname": "cos",
                    "args": ["angle : number (degrees)"],
                    "returnv": "cosine of angle : number",
                    "description": "Returns the cosine of the angle (in degrees).",
                    "notes": "Cosine is a value between -1 and 1 that corresponds to the x-value in a coordinate plane."
                },
                {
                    "fname": "sin",
                    "args": ["angle : number (degrees)"],
                    "returnv": "sine of angle : number",
                    "description": "Returns the sine of the angle (in degrees).",
                    "notes": "Sine is a value between -1 and 1 that corresponds to the y-value in a coordinate plane."
                },
                {
                    "fname": "tan",
                    "args": ["angle : number (degrees)"],
                    "returnv": "tangent of angle : number",
                    "description": "Returns the tangent of the angle (in degrees).",
                    "notes": "Tangent is the slope of the line created by the angle (x/y)."
                },
                {
                    "fname": "acos",
                    "args": ["value : number"],
                    "returnv": "arccosine of value : number",
                    "description": "Returns the arccosine of the value.",
                    "notes": "Argument must be in range [-1, 1].<br>acos(cos(x)) = x, if x is between 0 and 180."
                },
                {
                    "fname": "asin",
                    "args": ["value : number"],
                    "returnv": "arcsine of value : number",
                    "description": "Returns the arcsine of the value.",
                    "notes": "Argument must be in range [-1, 1].<br>asin(sin(x)) = x, if x is between -90 and 90."
                },
                {
                    "fname": "atan",
                    "args": ["value : number"],
                    "returnv": "arctangent of value : number",
                    "description": "Returns the arctangent of the value.",
                    "notes": "atan(tan(x)) = x, if x is between -90 and 90."
                },
                {
                    "fname": "atan2",
                    "args": ["y : number", "x : number"],
                    "returnv": "arctangent of y/x, which is the angle from (0, 0) to (x, y) : number",
                    "description": "Returns the arctangent of y/x.",
                    "notes": "The angle will be in the range -180 < a <= 180, where a is the returned value.<br>Useful for getting the angle from one point to another point.<br>For example, the angle from the boss to the player is atan2(player y - boss y, player x - boss x)."
                },
                {
                    "fname": "rand",
                    "args": ["min : number", "max : number"],
                    "returnv": "random floating point value in range (min, max) : number",
                    "description": "Returns a random floating point between min and max.",
                    "notes": "This function has an extremely low chance of returning the actual min and max as-is."
                },
                {
                    "fname": "round",
                    "args": ["value : number"],
                    "returnv": "value as an integer : number (int)",
                    "description": "Rounds the value up or down to the nearest integer using standard conventions and returns the new value.",
                    "notes": "Values of 0.5 or greater are rounded up; otherwise they are rounded down."
                },
                {
                    "fname": "truncate",
                    "args": ["value : number"],
                    "returnv": "value with decimal component removed : number (int)",
                    "description": "Returns the value with the decimal component truncated.",
                    "notes": "Example: truncate(1.123) -> 1<br>The shortened name trunc can also be used to refer to this function."
                },
                {
                    "fname": "ceil",
                    "args": ["value : number"],
                    "returnv": "value rounded up to next integer : number (int)",
                    "description": "Returns the value rounded up to the next integer.",
                    "notes": ""
                },
                {
                    "fname": "floor",
                    "args": ["value : number"],
                    "returnv": "value rounded down to next integer : number (int)",
                    "description": "Returns the value rounded down to the previous integer.",
                    "notes": ""
                },
                {
                    "fname": "absolute",
                    "args": ["value : number"],
                    "returnv": "absolute value of value : number",
                    "description": "Returns the absolute value of the value (IE makes negative values positive).",
                    "notes": ""
                },
                {
                    "fname": "modc",
                    "args": ["value1 : number", "value2 : number"],
                    "returnv": "modulus of value1 : number",
                    "description": "Returns the modulus of value1 with respect to value2.",
                    "notes": "Unlike remainder, modc returns a value with the same sign as the dividend.<br>Example: modc(-7, 4) equals -3 and modc(7, -4) equals 3."
                },
                {
                    "fname": "pi",
                    "args": [],
                    "returnv": "value of pi : number",
                    "description": "Returns the constant pi.",
                    "notes": ""
                },
                {
                    "fname": "successor",
                    "args": ["value : number"],
                    "returnv": "value + 1 : number",
                    "description": "Adds 1 to the value, then returns it.",
                    "notes": "value++"
                },
                {
                    "fname": "predecessor",
                    "args": ["value : number"],
                    "returnv": "value - 1 : number",
                    "description": "Subtracts 1 from the value, then returns it.",
                    "notes": "Long form for value--"
                },
                {
                    "fname": "negative",
                    "args": ["value : number"],
                    "returnv": "value * -1 : number",
                    "description": "Multiplies -1 to the value, then returns it.",
                    "notes": "Long form for -value"
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
                    "description": "Loads the given font specified with the file path and returns true on success, false otherwise.",
                    "notes": "This function can be used with ObjText_SetFontType, allowing for usage of fonts that are not installed on the player's computer."
                },
                {
                    "fname": "ToString",
                    "args": ["value : number"],
                    "returnv": "value as a string : string",
                    "description": "Returns the value as a string.",
                    "notes": "Example: ToString(1) -> '1.000000'<br>Example: ToString(\"Cat\" ~ ToString(1.5)) -> 'Cat1.500000'"
                },
                {
                    "fname": "IntToString",
                    "args": ["value : number"],
                    "returnv": "value as a string : string",
                    "description": "Returns the value as a string.",
                    "notes": "Omits any decimal places if a floating point value is provided.<br>Example: IntToString(1) -> '1'"
                },
                {
                    "fname": "itoa",
                    "args": ["value : number (int)"],
                    "returnv": "value as an array : string",
                    "description": "Converts an integer value to an string form and returns the string, but leaves out decimal places.",
                    "notes": "Example: rtoa(12.34) -> ['1', '2']<br>This function might behave identically to IntToString."
                },
                {
                    "fname": "rtoa",
                    "args": ["value : number"],
                    "returnv": "value as an array : string",
                    "description": "Converts any real number to an string form and returns the string.",
                    "notes": "Example: rtoa(12.34) -> ['1', '2', '.', '3', '4']"
                },
                {
                    "fname": "rtos",
                    "args": ["format : string", "value : number"],
                    "returnv": "value as a string, with filtering options : string",
                    "description": "Converts the value to a string form with the provided filtering options and then returns the string.",
                    "notes": "The format is presented as a string that determines how many digits will be shown.<br>It can contain any combination of the following three characters: 0, ., #.<br>0 is a slot for a digit.<br>. represents the decimal place in the string.<br># creates a space in the string.<br>Example: rtos(\"000.000\", 1.23) = \"001.230\", and rtos(\"#00\", 1.23) = \" 01\"."
                },
                {
                    "fname": "vtos",
                    "args": ["format : string", "value : number"],
                    "returnv": "value as a string, with filtering options : string",
                    "description": "Converts the value to a string form with the provided formatting options and then returns the string.",
                    "notes": "The format is presented as a string.<br>Format String: First, the number of digits on each side of the decimal are specified (000.00 is 3.2 in the format string).<br>Unused digits will be filled with spaces.<br>If preceded by a \"-\", the digits will be right-justified, adding blank spaces to the right instead of the left.<br>If preceded by a \"0\", all digits not occupied by the value will be filled by zeroes.<br>If ended with a \"d\", the value will be presented as an integer.<br>If ended with an \"f\", the value will be presented as a real/floating point number.<br>If ended with an \"s\", this indicates the value given was in the form of a string.<br>Example: vtos(\"03d\", 1.23) = \"001\", vtos(\"3d\", 1.23) = \"　1\", vtos(\"-3d\", 1.23) = \"1　\", and vtos(\"03.5f\", 1.23) = \"001.23000\"."
                },
                {
                    "fname": "atoi",
                    "args": ["value : string"],
                    "returnv": "value as an integer : number (int)",
                    "description": "Parses the string to an integer, truncating decimal components, and returns the integer.",
                    "notes": "If the string does not represent a valid number, then 0 will be returned.<br>Only works within limits of an int32 - for arbitrarily large numbers, use ator()"
                },
                {
                    "fname": "ator",
                    "args": ["value : string"],
                    "returnv": "value as an real/floating point : number (float)",
                    "description": "Parses the string to a floating point number, and returns the number.",
                    "notes": "If the string does not represent a valid number, then 0 will be returned."
                },
                {
                    "fname": "TrimString",
                    "args": ["value : string"],
                    "returnv": "value without preceding and trailing whitespace : string",
                    "description": "Returns the string without preceding and trailing whitespace.",
                    "notes": "Example: TrimString(\" ABC \") will return \"ABC\"."
                },
                {
                    "fname": "SplitString",
                    "args": ["value : string", "delimiter : string"],
                    "returnv": "Array consisting of value split by delimiter : string []",
                    "description": "Splits the string via the delimiter and returns the array of delimited substrings.",
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
                    "description": "Returns the input string up to the rightmost forward slash, with backslashes removed.",
                    "notes": ""
                },
                {
                    "fname": "GetFilePathList",
                    "args": ["path : string (path)"],
                    "returnv": "array of files in the directory of the specified file/directory path : string (path) []",
                    "description": "Returns an array of files in the directory of the specified file/directory path.",
                    "notes": ""
                },
                {
                    "fname": "GetDirectoryList",
                    "args": ["path : string (path)"],
                    "returnv": "array of the directories available within the directory of the specified path : string (path) []",
                    "description": "Returns an array of the directories available within the directory of the specified path.",
                    "notes": ""
                },
                {
                    "fname": "GetModuleDirectory",
                    "args": [],
                    "returnv": "the directory containing the running th_dnh.exe file : string (path)",
                    "description": "Returns the directory containing the running th_dnh.exe file.",
                    "notes": ""
                },
                {
                    "fname": "GetMainStgScriptPath",
                    "args": [],
                    "returnv": "the path to the current running stage script : string (path)",
                    "description": "Returns the path to the current running stage script.",
                    "notes": ""
                },
                {
                    "fname": "GetMainPackageScriptPath",
                    "args": [],
                    "returnv": "the path to the current running package script : string (path)",
                    "description": "Returns the path to the current running package script.",
                    "notes": ""
                },
                {
                    "fname": "GetMainStgScriptDirectory",
                    "args": [],
                    "returnv": "the directory of the current running stage script : string (path)",
                    "description": "Returns the directory of the current running stage script.",
                    "notes": ""
                },
                {
                    "fname": "GetCurrentScriptDirectory",
                    "args": [],
                    "returnv": "the directory of the current running script : string (path)",
                    "description": "Returns the directory of the current running script (the file in which this function was called).",
                    "notes": ""
                },
                {
                    "fname": "GetScriptPathList",
                    "args": ["path : string (path)", "scripttype : number (const)"],
                    "returnv": "array of paths to available scripts of the specified type within the directory of the specified path : string (path) []",
                    "description": "Returns an array of paths to available (selectable at selection screen) scripts of the specified type within the directory of the specified path.",
                    "notes": "Script type is TYPE_SCRIPT_* where * is one of the following: ALL, PLAYER, SINGLE, PLURAL, STAGE, or PACKAGE."
                }
            ]
        },
        {
            "catname": "Time Functions",
            "fxns": [
                {
                    "fname": "GetCurrentDateTimeS",
                    "args": [],
                    "returnv": "string containing the current date and time : string (date)",
                    "description": "Returns a string containing the current date and time.",
                    "notes": "Example: If the current date is 2012/09/16 12:34:56, then \"20120916123456\" will be returned.<br>To convert to a number use atoi like so: <code>let year = atoi(GetCurrentDateTimeS()[0..4]);</code>"
                },
                {
                    "fname": "GetStageTime",
                    "args": [],
                    "returnv": "amount of time that has elapsed since the start of the main script in milliseconds : number (int)",
                    "description": "Returns the amount of time that has elapsed since the start of the main script in milliseconds.",
                    "notes": ""
                },
                {
                    "fname": "GetPackageTime",
                    "args": [],
                    "returnv": "amount of time that has elapsed since the start of the main package in milliseconds : number (int)",
                    "description": "Returns the amount of time that has elapsed since the start of the main package in milliseconds",
                    "notes": ""
                },
                {
                    "fname": "GetCurrentFps",
                    "args": [],
                    "returnv": "current FPS : number (float)",
                    "description": "Returns the current FPS.",
                    "notes": ""
                },
                {
                    "fname": "GetReplayFps",
                    "args": [],
                    "returnv": "replay FPS at the current time point : number (int)",
                    "description": "Returns the replay FPS at the current time point.",
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
                    "description": "Outputs given value to log window.",
                    "notes": ""
                },
                {
                    "fname": "RaiseError",
                    "args": ["err : string"],
                    "returnv": "",
                    "description": "Creates an error box with the specified err string.",
                    "notes": "Execution of the script is stopped, closing the script."
                },
                {
                    "fname": "assert",
                    "args": ["condition : bool", "value : free"],
                    "returnv": "",
                    "description": "Raises an error with the specified value and terminates the script if the condition is false.",
                    "notes": ""
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
                    "description": "Maps the given key to the given value in common data.",
                    "notes": "Uses the default common data area.<br>The value can be returned by using GetCommonData with the corresponding key."
                },
                {
                    "fname": "GetCommonData",
                    "args": ["key : string", "defaultvalue : free"],
                    "returnv": "the value associated with the given key in the default common data area, or defaultvalue if no mapping exists : free",
                    "description": "Returns the value associated with the given key in the default common data area, or defaultvalue if no mapping exists.",
                    "notes": ""
                },
                {
                    "fname": "ClearCommonData",
                    "args": [],
                    "returnv": "",
                    "description": "Removes all of the common data in the default common data area.",
                    "notes": ""
                },
                {
                    "fname": "DeleteCommonData",
                    "args": ["key : string"],
                    "returnv": "",
                    "description": "Removes the common data mapping with the specified key from the default common data area.",
                    "notes": ""
                },
                {
                    "fname": "SetAreaCommonData",
                    "args": ["area : string", "key : string", "value : free"],
                    "returnv": "",
                    "description": "Maps the given key to the given value in common data.",
                    "notes": "Uses the specified common data area.<br>The value can be returned by using GetAreaCommonData with the corresponding area key."
                },
                {
                    "fname": "GetAreaCommonData",
                    "args": ["area : string", "key : string", "defaultvalue : free"],
                    "returnv": "the value associated with the given key in the specified common data area, or defaultvalue if no mapping exists : free",
                    "description": "Returns the value associated with the given key in the specified common data area, or defaultvalue if no mapping exists.",
                    "notes": ""
                },
                {
                    "fname": "ClearAreaCommonData",
                    "args": ["area : string"],
                    "returnv": "",
                    "description": "Removes all of the common data in the specified common data area.",
                    "notes": ""
                },
                {
                    "fname": "DeleteAreaCommonData",
                    "args": ["area : string", "key : string"],
                    "returnv": "",
                    "description": "Removes the common data mapping with the specified key from the specified common data area.",
                    "notes": ""
                },
                {
                    "fname": "CreateCommonDataArea",
                    "args": ["area : string"],
                    "returnv": "",
                    "description": "Creates a common data area with the provided area name, in which various common data can be stored.",
                    "notes": ""
                },
                {
                    "fname": "IsCommonDataAreaExists",
                    "args": ["area : string"],
                    "returnv": "true if the area name corresponds to an existing common data area; false otherwise : bool",
                    "description": "Returns true if the area name corresponds to an existing common data area; false otherwise",
                    "notes": ""
                },
                {
                    "fname": "CopyCommonDataArea",
                    "args": ["destarea : string", "sourcearea : string"],
                    "returnv": "",
                    "description": "Copies the common data in the source area to the destination area.",
                    "notes": "If the source common data area is invalid, nothing will happen."
                },
                {
                    "fname": "GetCommonDataAreaKeyList",
                    "args": [],
                    "returnv": "array of all common data area names : string []",
                    "description": "Returns an array of all common data area names.",
                    "notes": ""
                },
                {
                    "fname": "GetCommonDataValueKeyList",
                    "args": ["area : string"],
                    "returnv": "array of the keys in the specified common data area : string []",
                    "description": "Returns an array of the keys in the specified common data area",
                    "notes": ""
                },
                {
                    "fname": "SaveCommonDataAreaA1",
                    "args": ["area : string"],
                    "returnv": "true if successful; false otherwise : bool",
                    "description": "Saves everything in the specified common data area to a data file.",
                    "notes": ""
                },
                {
                    "fname": "LoadCommonDataAreaA1",
                    "args": ["area : string"],
                    "returnv": "true if successful; false otherwise : bool",
                    "description": "Loads everything in the specified common data area from the saved data file.",
                    "notes": ""
                },
                {
                    "fname": "SaveCommonDataAreaA2",
                    "args": ["area : string", "path : string (path)"],
                    "returnv": "true if successful; false otherwise : bool",
                    "description": "Saves everything in the specified common data area to a data file at the specified path.",
                    "notes": ""
                },
                {
                    "fname": "LoadCommonDataAreaA2",
                    "args": ["area : string", "path : string (path)"],
                    "returnv": "true if successful; false otherwise : bool",
                    "description": "Loads everything in the specified common data area from the saved data file at the specified path.",
                    "notes": ""
                },
                {
                    "fname": "SaveCommonDataAreaToReplayFile",
                    "args": ["area : string"],
                    "returnv": "true if successful; false otherwise : bool",
                    "description": "Saves the specified common data area to the replay file.",
                    "notes": "Do not call this function during a replay."
                },
                {
                    "fname": "LoadCommonDataAreaFromReplayFile",
                    "args": ["area : string"],
                    "returnv": "true if successful; false otherwise : bool",
                    "description": "Loads everything in the specified common data area from the replay file.",
                    "notes": "Do not call this function during a replay."
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
                    "description": "Loads specified sound file.",
                    "notes": "Required before using PlayBGM or PlaySE in the same script as these two functions are called on the respective paths."
                },
                {
                    "fname": "RemoveSound",
                    "args": ["path : string (path)"],
                    "returnv": "",
                    "description": "Unloads specified sound file.",
                    "notes": ""
                },
                {
                    "fname": "PlayBGM",
                    "args": ["path : string (path)", "loopstart : number (seconds)", "loopend : number (seconds)"],
                    "returnv": "",
                    "description": "Plays the specified sound file as a looping BGM.",
                    "notes": "You can be more precise by using decimals.<br>BGM will play from start until end of track or loopend, whichever is first, and then play from loopstart."
                },
                {
                    "fname": "PlaySE",
                    "args": ["path : string (path)"],
                    "returnv": "",
                    "description": "Plays the specified sound file as a sound effect.",
                    "notes": ""
                },
                {
                    "fname": "StopSound",
                    "args": ["path : string (path)"],
                    "returnv": "",
                    "description": "Stops playing of specified sound file.",
                    "notes": ""
                }
            ]
        },
        {
            "catname": "Input Functions",
            "fxns": [
                {
                    "fname": "GetVirtualKeyState",
                    "args": ["vkname : string"],
                    "returnv": "key state of specified virtual key : number (const)",
                    "description": "Returns the key state of the specified virtual key.",
                    "notes": ""
                },
                {
                    "fname": "SetVirtualKeyState",
                    "args": ["vkname : string", "state : number (const)"],
                    "returnv": "",
                    "description": "Sets the given virtual key to the given state.",
                    "notes": "The virtual key will be restored to its true state a frame after you stop calling this function.<br>Keep in mind that if you set it to KEY_HOLD it will not go to KEY_PULL or KEY_PUSH."
                },
                {
                    "fname": "AddVirtualKey",
                    "args": ["vkname : string", "keyname : number (const)", "padkey : number (const)"],
                    "returnv": "",
                    "description": "Registers the given virtual key with the given key.",
                    "notes": "You may map any number of virtual keys to a single key, but virtual keys may only be mapped to a single key.<br>Use KEY_INVALID if you do not want pad input.<br>Note that this function OVERWRITES any existing mappings.<br>IE: If you were to use <code>AddVirtualKey(VK_SHOT, KEY_UP, KEY_INVALID);</code>, whenever you press the up arrow key, the virtual shot key will be pressed.<br>However, you will no longer be able to move up, so to fix this, you add AddVirtualKey(VK_UP, KEY_UP, KEY_INVALID);. You will now shoot and move up at the same time."
                },
                {
                    "fname": "AddReplayTargetVirtualKey",
                    "args": ["vkname : string"],
                    "returnv": "",
                    "description": "Registers the given key id to the replay file.",
                    "notes": "This key id should be one that you have already registered with AddVirtualKey."
                },
                {
                    "fname": "GetKeyState",
                    "args": ["keyname : number (const)"],
                    "returnv": "key state of specified key : number (const)",
                    "description": "Returns the key state of the specified key.",
                    "notes": ""
                },
                {
                    "fname": "GetMouseState",
                    "args": ["mousebutton : number (const)"],
                    "returnv": "state of specified mouse button : number (const)",
                    "description": "Returns the state of the specified mouse button.",
                    "notes": "Use MOUSE_LEFT, MOUSE_RIGHT, and MOUSE_MIDDLE for the argument."
                },
                {
                    "fname": "GetMouseX",
                    "args": [],
                    "returnv": "mouse x position : number",
                    "description": "Returns the current mouse x position.",
                    "notes": "The origin for the mouse coordinates is the upper left of the Danmakufu window (0, 0).<br>Mouse coordinates will be properly adjusted according to the resizing of Danmakufu's window."
                },
                {
                    "fname": "GetMouseY",
                    "args": [],
                    "returnv": "mouse y position : number",
                    "description": "Returns the current mouse y position.",
                    "notes": "The origin for the mouse coordinates is the upper left of the Danmakufu window (0, 0).<br>Mouse coordinates will be properly adjusted according to the resizing of Danmakufu's window."
                },
                {
                    "fname": "GetMouseMoveZ",
                    "args": [],
                    "returnv": "amount of change that has occurred to the mouse's Z axis : number",
                    "description": "Returns the amount of change that has occurred to the mouse's Z axis.",
                    "notes": "The Z axis is normally the middle mouse wheel. If there is no mouse wheel, the value will be 0.<br>The value returned will be negative if the wheel was moved back, and positive if the wheel moved forward."
                },
                {
                    "fname": "SetSkipModeKey",
                    "args": ["keyname : number (const)"],
                    "returnv": "",
                    "description": "Specifies the key to use for fast playback mode.",
                    "notes": "The default key is KEY_LCONTROL.<br>Specify KEY_INVALID if you do not wish to enable fast playback."
                }
            ]
        },
        {
            "catname": "Render Functions",
            "fxns": [
                {
                    "fname": "LoadTexture",
                    "args": ["path : string (path)"],
                    "returnv": "",
                    "description": "Loads specified image file to Danmakufu as a texture.",
                    "notes": ""
                },
                {
                    "fname": "LoadTextureInLoadThread",
                    "args": ["path : string (path)"],
                    "returnv": "",
                    "description": "Loads specified image file to Danmakufu as a texture in a separate thread.",
                    "notes": "Using this function inside @Loading is the same as using LoadTexture.<br>When using large images, the script will freeze until the image has finished loading."
                },
                {
                    "fname": "RemoveTexture",
                    "args": ["path : string (path)"],
                    "returnv": "",
                    "description": "Removes specified texture file from Danmakufu.",
                    "notes": ""
                },
                {
                    "fname": "GetTextureWidth",
                    "args": ["path : string (path)"],
                    "returnv": "width of image file : number (int)",
                    "description": "Returns the width of the specified image file.",
                    "notes": ""
                },
                {
                    "fname": "GetTextureHeight",
                    "args": ["path : string (path)"],
                    "returnv": "height of image file : number (int)",
                    "description": "Returns the height of the specified image file.",
                    "notes": ""
                },
                {
                    "fname": "SetFogEnable",
                    "args": ["enable : bool"],
                    "returnv": "",
                    "description": "Enables or disables fog.",
                    "notes": ""
                },
                {
                    "fname": "SetFogParam",
                    "args": ["start : number", "end : number", "red : number (int)", "green : number (int)", "blue : number (int)"],
                    "returnv": "",
                    "description": "Sets the fog parameters with the start and end distances from the player and the rgb values.",
                    "notes": "RGB on 0-255 scale.<br>To turn the screen dark around the player, for example, you can use SetFogParam(250, 700, 0, 0, 0)."
                },
                {
                    "fname": "ClearInvalidRenderPriority",
                    "args": [],
                    "returnv": "",
                    "description": "Clear invalid render priorities set with SetInvalidRenderPriorityA1.",
                    "notes": ""
                },
                {
                    "fname": "SetInvalidRenderPriorityA1",
                    "args": ["start : number (int)", "end : number (int)"],
                    "returnv": "",
                    "description": "Sets invalid render priority between start and end render priorities.",
                    "notes": "Drawing within the specified range is disabled by this function."
                },
                {
                    "fname": "GetReservedRenderTargetName",
                    "args": ["index : number"],
                    "returnv": "render target texture name : string",
                    "description": "Returns the name of the render target texture set at the time of Danmakufu startup.",
                    "notes": "Index in range 0-2.<br>There is always a texture that can be obtained with this function."
                },
                {
                    "fname": "CreateRenderTarget",
                    "args": ["targetname : string"],
                    "returnv": "true if successfully created; false otherwise : bool",
                    "description": "Creates a custom render target outside of the reserved ones.",
                    "notes": "To use, ObjPrim_SetTexture must have the name of the render target as a string.<br>Textures created with this function can be used for RenderToTextureA1 and other similar functions."
                },
                {
                    "fname": "RenderToTextureA1",
                    "args": ["targetname : string", "start : number", "end : number", "rendertargetclear : bool"],
                    "returnv": "",
                    "description": "Renders the specified range of invalid render priority drawings to a texture.<br>Set rendertargetclear to true in order to clear the render target after each frame. If set to false, the render target will remain into the next frame.",
                    "notes": ""
                },
                {
                    "fname": "RenderToTextureB1",
                    "args": ["targetname : string", "obj : number (Object ID)", "rendertargetclear : bool"],
                    "returnv": "",
                    "description": "Renders the specified object to texture.<br>Set rendertargetclear to true in order to clear the render target after each frame. If set to false, the render target will remain into the next frame.",
                    "notes": ""
                },
                {
                    "fname": "SaveRenderedTextureA1",
                    "args": ["targetname : string", "filename : string (path)"],
                    "returnv": "",
                    "description": "Saves rendered texture to file.",
                    "notes": "The image file created by this function can be used immediately after its execution."
                },
                {
                    "fname": "SaveRenderedTextureA2",
                    "args": ["targetname : string", "filename : string (path)", "left : number", "top : number", "right : number", "bottom : number"],
                    "returnv": "",
                    "description": "Saves rendered texture to file, given left/top/right/bottom bounds of the region to capture.",
                    "notes": "The image file created by this function can be used immediately after its execution."
                },
                {
                    "fname": "SaveSnapShotA1",
                    "args": ["filename : string (path)"],
                    "returnv": "",
                    "description": "Saves a picture of the game to file.",
                    "notes": "The image file created by this function can be used immediately after its execution."
                },
                {
                    "fname": "SaveSnapShotA2",
                    "args": ["filename : string (path)", "left : number", "top : number", "right : number", "bottom : number"],
                    "returnv": "",
                    "description": "Saves a picture of the game to file, given left/top/right/bottom bounds of the region to capture.",
                    "notes": "The image file created by this function can be used immediately after its execution."
                },
                {
                    "fname": "IsPixelShaderSupported",
                    "args": ["majorversion : number (int)", "minorversion : number (int)"],
                    "returnv": "true if supported; false otherwise : bool",
                    "description": "Checks your whether or not your GPU supports the specified pixel shader version and returns true if supported.",
                    "notes": "Example: <code>IsPixelShaderSupported(3,0);</code> checks for Pixel Shader version 3.0."
                },
                {
                    "fname": "SetShader",
                    "args": ["objshader : number (Object ID)", "rpriority1 : number", "rpriority2 : number"],
                    "returnv": "",
                    "description": "Sets the shader object associated with objshader to affect render priorities between rpriority1 and rpriority2.",
                    "notes": "Render priorities are on a 0-1 scale."
                },
                {
                    "fname": "SetShaderI",
                    "args": ["objshader : number (Object ID)", "rpriority1 : number", "rpriority2 : number"],
                    "returnv": "",
                    "description": "Sets the shader object associated with objshader to affect render priorities between rpriority1 and rpriority2.",
                    "notes": "Render priorities are on a 0-100 scale."
                },
                {
                    "fname": "ResetShader",
                    "args": ["rpriority1 : number", "rpriority2 : number"],
                    "returnv": "",
                    "description": "Sets the shader object associated with objshader to stop affecting render priorities between rpriority1 and rpriority2.",
                    "notes": "Render priorities are on a 0-1 scale."
                },
                {
                    "fname": "ResetShaderI",
                    "args": ["rpriority1 : number", "rpriority2 : number"],
                    "returnv": "",
                    "description": "Sets the shader object associated with objshader to stop affecting render priorities between rpriority1 and rpriority2.",
                    "notes": "Render priorities are on a 0-100 scale."
                }
            ]
        },
        {
            "catname": "3D Camera Functions",
            "fxns": [
                {
                    "fname": "SetCameraFocusX",
                    "args": ["xcoord : number"],
                    "returnv": "",
                    "description": "Sets the x coordinate of the camera focus.",
                    "notes": ""
                },
                {
                    "fname": "SetCameraFocusY",
                    "args": ["ycoord : number"],
                    "returnv": "",
                    "description": "Sets the y coordinate of the camera focus.",
                    "notes": ""
                },
                {
                    "fname": "SetCameraFocusZ",
                    "args": ["zcoord : number"],
                    "returnv": "",
                    "description": "Sets the z coordinate of the camera focus.",
                    "notes": ""
                },
                {
                    "fname": "SetCameraFocusXYZ",
                    "args": ["xcoord : number", "ycoord : number", "zcoord : number"],
                    "returnv": "",
                    "description": "Sets the x, y, and z coordinates of the camera focus.",
                    "notes": ""
                },
                {
                    "fname": "SetCameraRadius",
                    "args": ["distance : number"],
                    "returnv": "",
                    "description": "Sets the distance of the camera to the focus point.",
                    "notes": ""
                },
                {
                    "fname": "SetCameraAzimuthAngle",
                    "args": ["azimuth : number (degrees)"],
                    "returnv": "",
                    "description": "Sets the azimuth angle from the focus point.",
                    "notes": ""
                },
                {
                    "fname": "SetCameraElevationAngle",
                    "args": ["elevation : number (degrees)"],
                    "returnv": "",
                    "description": "Sets the elevation angle from the focus point.",
                    "notes": ""
                },
                {
                    "fname": "SetCameraYaw",
                    "args": ["yaw : number"],
                    "returnv": "",
                    "description": "Sets the horizontal Yaw angle of the camera.",
                    "notes": ""
                },
                {
                    "fname": "SetCameraPitch",
                    "args": ["pitch : number"],
                    "returnv": "",
                    "description": "Sets the vertical Pitch angle of the camera.",
                    "notes": ""
                },
                {
                    "fname": "SetCameraRoll",
                    "args": ["roll : number"],
                    "returnv": "",
                    "description": "Sets the rotational Roll angle of the camera.",
                    "notes": ""
                },
                {
                    "fname": "GetCameraX",
                    "args": [],
                    "returnv": "camera x coordinate : number",
                    "description": "Returns the x coordinate of the camera.",
                    "notes": ""
                },
                {
                    "fname": "GetCameraY",
                    "args": [],
                    "returnv": "camera y coordinate : number",
                    "description": "Returns the y coordinate of the camera.",
                    "notes": ""
                },
                {
                    "fname": "GetCameraZ",
                    "args": [],
                    "returnv": "camera z coordinate : number",
                    "description": "Returns the z coordinate of the camera.",
                    "notes": ""
                },
                {
                    "fname": "GetCameraFocusX",
                    "args": [],
                    "returnv": "camera focus x coordinate : number",
                    "description": "Returns the x coordinate of the camera focus point.",
                    "notes": ""
                },
                {
                    "fname": "GetCameraFocusY",
                    "args": [],
                    "returnv": "camera focus y coordinate : number",
                    "description": "Returns the y coordinate of the camera focus point.",
                    "notes": ""
                },
                {
                    "fname": "GetCameraFocusZ",
                    "args": [],
                    "returnv": "camera focus z coordinate : number",
                    "description": "Returns the z coordinate of the camera focus point.",
                    "notes": ""
                },
                {
                    "fname": "GetCameraRadius",
                    "args": [],
                    "returnv": "distance from focus point to camera : number",
                    "description": "Returns the distance from the focus point to the camera.",
                    "notes": ""
                },
                {
                    "fname": "GetCameraAzimuthAngle",
                    "args": [],
                    "returnv": "azimuth angle from focus point to camera : number (degrees)",
                    "description": "Returns the azimuth angle from the focus point to the camera.",
                    "notes": ""
                },
                {
                    "fname": "GetCameraElevationAngle",
                    "args": [],
                    "returnv": "elevation angle from focus point to camera : number (degrees)",
                    "description": "Returns the elevation angle from the focus point to the camera.",
                    "notes": ""
                },
                {
                    "fname": "GetCameraYaw",
                    "args": [],
                    "returnv": "camera yaw angle : number",
                    "description": "Returns the horizontal Yaw angle of the camera.",
                    "notes": ""
                },
                {
                    "fname": "GetCameraPitch",
                    "args": [],
                    "returnv": "camera pitch angle : number",
                    "description": "Returns the vertical Pitch angle of the camera.",
                    "notes": ""
                },
                {
                    "fname": "GetCameraRoll",
                    "args": [],
                    "returnv": "camera roll angle : number",
                    "description": "Returns the rotational Roll angle of the camera.",
                    "notes": ""
                },
                {
                    "fname": "SetCameraPerspectiveClip",
                    "args": ["nearclip : number", "farclip : number"],
                    "returnv": "",
                    "description": "Sets camera clipping distances.<br>Objects that are further or nearer than the clipping distance will not be drawn.",
                    "notes": ""
                }
            ]
        },
        {
            "catname": "2D Camera Functions",
            "fxns": [
                {
                    "fname": "Set2DCameraFocusX",
                    "args": ["xcoord : number"],
                    "returnv": "",
                    "description": "Sets the x coordinate of the focus point.",
                    "notes": "Defaults to center of the playing field."
                },
                {
                    "fname": "Set2DCameraFocusY",
                    "args": ["ycoord : number"],
                    "returnv": "",
                    "description": "Sets the x coordinate of the focus point.",
                    "notes": "Defaults to center of the playing field."
                },
                {
                    "fname": "Set2DCameraAngleZ",
                    "args": ["rotation : number (degrees)"],
                    "returnv": "",
                    "description": "Sets the z angle (rotation) of the 2D Camera.",
                    "notes": ""
                },
                {
                    "fname": "Set2DCameraRatio",
                    "args": ["zoom : number"],
                    "returnv": "",
                    "description": "Sets the zoom of the camera (centered on the focus point).",
                    "notes": "Defaults to 1."
                },
                {
                    "fname": "Set2DCameraRatioX",
                    "args": ["xzoom : number"],
                    "returnv": "",
                    "description": "Sets the magnification of the x axis of the 2D camera (centered on the focus point).",
                    "notes": "For example, if you set this value to 2, the x axis will be doubled in size.<br>Defaults to 1.<br>If you specify a negative value, the x axis will be flipped."
                },
                {
                    "fname": "Set2DCameraRatioY",
                    "args": ["yzoom : number"],
                    "returnv": "",
                    "description": "Sets the magnification of the y axis of the 2D camera (centered on the focus point).",
                    "notes": "For example, if you set this value to 2, the y axis will be doubled in size.<br>Defaults to 1.<br>If you specify a negative value, the y axis will be flipped."
                },
                {
                    "fname": "Reset2DCamera",
                    "args": [],
                    "returnv": "",
                    "description": "Resets both the focus point and the zoom ratio, respectively, to the center of the screen and 1.",
                    "notes": ""
                },
                {
                    "fname": "Get2DCameraX",
                    "args": [],
                    "returnv": "camera x coordinate : number",
                    "description": "Returns the x coordinate of the camera.",
                    "notes": ""
                },
                {
                    "fname": "Get2DCameraY",
                    "args": [],
                    "returnv": "camera y coordinate : number",
                    "description": "Returns the y coordinate of the camera.",
                    "notes": ""
                },
                {
                    "fname": "Get2DCameraAngleZ",
                    "args": [],
                    "returnv": "camera rotation angle : number (degrees)",
                    "description": "Returns the z angle (rotation) of the camera.",
                    "notes": ""
                },
                {
                    "fname": "Get2DCameraRatio",
                    "args": [],
                    "returnv": "zoom ratio : number",
                    "description": "Returns the zoom ratio of the camera.",
                    "notes": ""
                },
                {
                    "fname": "Get2DCameraRatioX",
                    "args": [],
                    "returnv": "x zoom ratio : number",
                    "description": "Returns the x zoom ratio of the camera.",
                    "notes": ""
                },
                {
                    "fname": "Get2DCameraRatioY",
                    "args": [],
                    "returnv": "y zoom ratio : number",
                    "description": "Returns the y zoom ratio of the camera.",
                    "notes": ""
                }
            ]
        },
        {
            "catname": "Script Functions",
            "fxns": [
                {
                    "fname": "LoadScript",
                    "args": ["scriptpath : string (path)"],
                    "returnv": "script ID of loaded script : number (Script ID)",
                    "description": "Loads and compiles the specified script, and returns its script ID.<br>Also calls @Loading and initializes global variables in the script.",
                    "notes": ""
                },
                {
                    "fname": "LoadScriptInThread",
                    "args": ["scriptpath : string (path)"],
                    "returnv": "script ID of loaded script : number (Script ID)",
                    "description": "Loads and compiles the specified script in a different thread, and returns its script ID.<br>Also calls @Loading and initializes global variables in the script.",
                    "notes": ""
                },
                {
                    "fname": "StartScript",
                    "args": ["scriptID : number (Script ID)"],
                    "returnv": "",
                    "description": "Starts the specified script.<br>Calls @Initialize and starts @MainLoop in the script.",
                    "notes": ""
                },
                {
                    "fname": "CloseScript",
                    "args": ["scriptID : number (Script ID)"],
                    "returnv": "",
                    "description": "Stops the specified script.",
                    "notes": "Until this function is called, the script will continue to run."
                },
                {
                    "fname": "IsCloseScript",
                    "args": ["scriptID : number (Script ID)"],
                    "returnv": "true if script associated with scriptID is not running; false otherwise : bool",
                    "description": "Returns whether the specified script has been stopped.<br>Returns true if the script is not running.",
                    "notes": ""
                },
                {
                    "fname": "SetScriptArgument",
                    "args": ["scriptID : number (Script ID)", "argindex : number", "value : free"],
                    "returnv": "",
                    "description": "Before starting the given script with StartScript, sets a value that is to be passed to the given script upon starting.",
                    "notes": "This value can be retrieved in the started script with GetScriptArgument."
                },
                {
                    "fname": "GetScriptArgument",
                    "args": ["argindex : number"],
                    "returnv": "script value associated with argument index : free",
                    "description": "Returns the value of the specified argument, previously set by SetScriptArgument before the script was started.",
                    "notes": ""
                },
                {
                    "fname": "GetScriptArgumentCount",
                    "args": [],
                    "returnv": "number of script arguments : number (int)",
                    "description": "Returns the number of arguments set by SetScriptArgument before the script was started.",
                    "notes": ""
                },
                {
                    "fname": "CloseStgScene",
                    "args": [],
                    "returnv": "",
                    "description": "Ends the current scene (returns to script selection screen).",
                    "notes": ""
                },
                {
                    "fname": "GetOwnScriptID",
                    "args": [],
                    "returnv": "ID of script the function is called in : number (Script ID)",
                    "description": "Returns the script's own ID.",
                    "notes": ""
                },
                {
                    "fname": "GetEventType",
                    "args": [],
                    "returnv": "event type : const",
                    "description": "Returns the event type currently triggered in @Event.",
                    "notes": ""
                },
                {
                    "fname": "GetEventArgument",
                    "args": ["argindex : number"],
                    "returnv": "event argument of event currently triggered in @Event : free",
                    "description": "Returns the argument of the event currently triggered in @Event.",
                    "notes": "Can be an arbitrary value."
                },
                {
                    "fname": "SetScriptResult",
                    "args": ["result : free"],
                    "returnv": "",
                    "description": "Sets the result of the event in @Event, which can then be retrieved by GetScriptResult.",
                    "notes": ""
                },
                {
                    "fname": "GetScriptResult",
                    "args": ["scriptID : number (Script ID)"],
                    "returnv": "event result : free",
                    "description": "Returns the event result from SetScriptResult.",
                    "notes": "Can be an arbitrary value."
                },
                {
                    "fname": "SetAutoDeleteObject",
                    "args": ["enable : bool"],
                    "returnv": "",
                    "description": "Sets whether to delete all existing objects that were created in the current script at its termination.",
                    "notes": "If set to true, the current script's objects will be deleted.<br>The default value is false."
                },
                {
                    "fname": "NotifyEvent",
                    "args": ["scriptID : number (Script ID)", "eventtype : const", "value : free"],
                    "returnv": "",
                    "description": "Calls the @Event of the script with the specified ID, triggering the specified event.",
                    "notes": "The event type may use a value greater than EV_USER."
                },
                {
                    "fname": "NotifyEventAll",
                    "args": ["eventtype : const", "value : free"],
                    "returnv": "",
                    "description": "Calls the @Event of all scripts, triggering the specified event in all scripts listening for it.",
                    "notes": "The event type may use a value greater than EV_USER."
                },
                {
                    "fname": "GetScriptInfoA1",
                    "args": ["scriptpath : string (path)", "infotype : const"],
                    "returnv": "specified return value : varies",
                    "description": "Parses and returns information from the script file's header.",
                    "notes": "Constants for infotype are as follows:<br>INFO_SCRIPT_TYPE: Returns the script type (const): one of TYPE_SCRIPT_PLAYER: Player script, TYPE_SCRIPT_SINGLE: Single script, TYPE_SCRIPT_PLURAL: Plural script, TYPE_SCRIPT_STAGE: Stage script, or TYPE_SCRIPT_PACKAGE: Package script.<br>INFO_SCRIPT_PATH: Returns the script path (string).<br>INFO_SCRIPT_ID: Returns the script #ID (int).<br>INFO_SCRIPT_TITLE: Returns the script #Title (string).<br>INFO_SCRIPT_TEXT: Returns the script #Text (string).<br>INFO_SCRIPT_IMAGE: Returns the script #Image (string).<br>INFO_SCRIPT_REPLAY_NAME: Returns the script #ReplayName (string)."
                }
            ]
        },
        {
            "catname": "System Functions",
            "fxns": [
                {
                    "fname": "SetStgFrame",
                    "args": ["left : number", "top : number", "right : number", "bottom : number", "minrpriority : number", "maxrpriority : number"],
                    "returnv": "",
                    "description": "Sets the STG space frame given the left/top/right/bottom values in the Danmakufu window and the minimum and maximum render priorities provided.",
                    "notes": "Default values are (32, 16, 416, 464, 20, 80)."
                },
                {
                    "fname": "GetScore",
                    "args": [],
                    "returnv": "current score : number",
                    "description": "Returns the current score.",
                    "notes": ""
                },
                {
                    "fname": "AddScore",
                    "args": ["score : number"],
                    "returnv": "",
                    "description": "Adds the given value to the score.",
                    "notes": ""
                },
                {
                    "fname": "GetGraze",
                    "args": [],
                    "returnv": "current graze : number",
                    "description": "Returns the current amount of graze.",
                    "notes": ""
                },
                {
                    "fname": "AddGraze",
                    "args": ["graze : number"],
                    "returnv": "",
                    "description": "Adds the given value to the graze count.",
                    "notes": ""
                },
                {
                    "fname": "GetPoint",
                    "args": [],
                    "returnv": "current amount of collected point items : number",
                    "description": "Returns the current amount of point items collected",
                    "notes": ""
                },
                {
                    "fname": "AddPoint",
                    "args": ["point : number"],
                    "returnv": "",
                    "description": "Adds the given value to the point count.",
                    "notes": ""
                },
                {
                    "fname": "SetItemRenderPriorityI",
                    "args": ["rpriority : number (int)"],
                    "returnv": "",
                    "description": "Sets the render priority for items, on a 0 to 100 scale.",
                    "notes": "Default is 60."
                },
                {
                    "fname": "SetShotRenderPriorityI",
                    "args": ["rpriority : number (int)"],
                    "returnv": "",
                    "description": "Sets the render priority for bullets, on a 0 to 100 scale.",
                    "notes": "Default is 50."
                },
                {
                    "fname": "GetStgFrameRenderPriorityMinI",
                    "args": [],
                    "returnv": "minimum render priority for STG frame : number (int)",
                    "description": "Returns the lowest render priority for the STG frame, on a 0 to 100 scale.",
                    "notes": "Default is 20."
                },
                {
                    "fname": "GetStgFrameRenderPriorityMaxI",
                    "args": [],
                    "returnv": "maximum render priority for STG frame : number (int)",
                    "description": "Returns the highest render priority for the STG frame, on a 0 to 100 scale.",
                    "notes": "Default is 80."
                },
                {
                    "fname": "GetItemRenderPriorityI",
                    "args": [],
                    "returnv": "render priority for items : number (int)",
                    "description": "Returns the render priority for items, on a 0 to 100 scale.",
                    "notes": ""
                },
                {
                    "fname": "GetShotRenderPriorityI",
                    "args": [],
                    "returnv": "render priority for shots : number (int)",
                    "description": "Returns the render priority for shots, on a 0 to 100 scale.",
                    "notes": ""
                },
                {
                    "fname": "GetPlayerRenderPriorityI",
                    "args": [],
                    "returnv": "render priority for the player : number (int)",
                    "description": "Returns the render priority for the player, on a 0 to 100 scale.",
                    "notes": ""
                },
                {
                    "fname": "GetCameraFocusPermitPriorityI",
                    "args": [],
                    "returnv": "max 2D camera render priority : number (int)",
                    "description": "Returns the highest render priority the 2D camera can affect, on a 0 to 100 scale.",
                    "notes": "Default is 79."
                },
                {
                    "fname": "GetStgFrameLeft",
                    "args": [],
                    "returnv": "STG frame left : number (int)",
                    "description": "Returns the leftmost coordinate of the STG frame (playing field).",
                    "notes": "Default is 32."
                },
                {
                    "fname": "GetStgFrameTop",
                    "args": [],
                    "returnv": "STG frame top : number (int)",
                    "description": "Returns the topmost coordinate of the STG frame (playing field).",
                    "notes": "Default is 16."
                },
                {
                    "fname": "GetStgFrameWidth",
                    "args": [],
                    "returnv": "STG frame width : number (int)",
                    "description": "Returns the width of the STG frame (playing field).",
                    "notes": "Default is 384."
                },
                {
                    "fname": "GetStgFrameHeight",
                    "args": [],
                    "returnv": "STG frame height : number (int)",
                    "description": "Returns the height of the STG frame (playing field).",
                    "notes": "Default is 448."
                },
                {
                    "fname": "GetScreenWidth",
                    "args": [],
                    "returnv": "danmakufu window width : number (int)",
                    "description": "Returns the width of Danmakufu's window.",
                    "notes": "Default is 640 unless overwritten in a .def file."
                },
                {
                    "fname": "GetScreenHeight",
                    "args": [],
                    "returnv": "danmakufu window height : number (int)",
                    "description": "Returns the height of Danmakufu's window.",
                    "notes": "Default is 480 unless overwritten in a .def file."
                },
                {
                    "fname": "IsReplay",
                    "args": [],
                    "returnv": "true if called in a replay; false otherwise : bool",
                    "description": "Returns true if a replay is playing, false otherwise.",
                    "notes": ""
                },
                {
                    "fname": "AddArchiveFile",
                    "args": ["archivepath : string (path)"],
                    "returnv": "true if the archive was successfully read, false otherwise.",
                    "description": "Adds the path to use when reading images or sounds from an archive file.<br>Returns true if the archive was successfully read, false otherwise.",
                    "notes": ""
                }
            ]
        },
        {
            "catname": "Player Functions",
            "fxns": [
                {
                    "fname": "GetPlayerObjectID",
                    "args": [],
                    "returnv": "player object ID : number (Object ID)",
                    "description": "Returns Player Object ID.",
                    "notes": ""
                },
                {
                    "fname": "GetPlayerScriptID",
                    "args": [],
                    "returnv": "player script ID : number (Script ID)",
                    "description": "Returns Player Script ID.",
                    "notes": ""
                },
                {
                    "fname": "SetPlayerSpeed",
                    "args": ["normal : number", "focus : number"],
                    "returnv": "",
                    "description": "Sets the normal speed and focus speed of the player.",
                    "notes": ""
                },
                {
                    "fname": "SetPlayerClip",
                    "args": ["left : number", "top : number", "right : number", "bottom : number"],
                    "returnv": "",
                    "description": "Sets the area within which the player can move.",
                    "notes": ""
                },
                {
                    "fname": "SetPlayerLife",
                    "args": ["value : number"],
                    "returnv": "",
                    "description": "Sets number of lives for the player.",
                    "notes": "Can be a non-integer value."
                },
                {
                    "fname": "SetPlayerSpell",
                    "args": ["value : number"],
                    "returnv": "",
                    "description": "Sets number of spells/bombs for the player.",
                    "notes": "Can be a non-integer value."
                },
                {
                    "fname": "SetPlayerPower",
                    "args": ["value : number"],
                    "returnv": "",
                    "description": "Sets power value for the player.",
                    "notes": "Can be a non-integer value."
                },
                {
                    "fname": "SetPlayerInvincibilityFrame",
                    "args": ["invulnframe : number (int)"],
                    "returnv": "",
                    "description": "Sets the number of frames for player invincibility.",
                    "notes": ""
                },
                {
                    "fname": "SetPlayerDownStateFrame",
                    "args": ["downstateframe : number (int)"],
                    "returnv": "",
                    "description": "Sets the number of frames before respawning the player after player death.",
                    "notes": ""
                },
                {
                    "fname": "SetPlayerRebirthFrame",
                    "args": ["rebirthframe : number (int)"],
                    "returnv": "",
                    "description": "Sets the number of frames during the player can deathbomb after being hit.",
                    "notes": "Default is 15 frames."
                },
                {
                    "fname": "SetPlayerRebirthLossFrame",
                    "args": ["rebirthlossframe : number (int)"],
                    "returnv": "",
                    "description": "Sets the number of deathbomb frames the player loses per deathbomb.",
                    "notes": "Default is 3 frames."
                },
                {
                    "fname": "SetPlayerAutoItemCollectLine",
                    "args": ["y : number"],
                    "returnv": "",
                    "description": "Sets the y coordinate of the auto collect line.",
                    "notes": "A negative value removes the line.<br>Default is no autocollect line."
                },
                {
                    "fname": "SetForbidPlayerShot",
                    "args": ["forbid : bool"],
                    "returnv": "",
                    "description": "When set to true, the player cannot use normal shots.",
                    "notes": ""
                },
                {
                    "fname": "SetForbidPlayerSpell",
                    "args": ["forbid : bool"],
                    "returnv": "",
                    "description": "When set to true, the player cannot use bombs.",
                    "notes": ""
                },
                {
                    "fname": "GetPlayerX",
                    "args": [],
                    "returnv": "player x : number",
                    "description": "Returns the x coordinate of the player.",
                    "notes": ""
                },
                {
                    "fname": "GetPlayerY",
                    "args": [],
                    "returnv": "player y : number",
                    "description": "Returns the y coordinate of the player.",
                    "notes": ""
                },
                {
                    "fname": "GetPlayerState",
                    "args": [],
                    "returnv": "player state : const",
                    "description": "Returns the player state.",
                    "notes": "State is one of:<br>STATE_NORMAL (player is alive)<br>STATE_HIT (after being hit, during counter bomb frames)<br>STATE_DOWN (after being hit, before reappearing)<br>STATE_END (game over)"
                },
                {
                    "fname": "GetPlayerSpeed",
                    "args": [],
                    "returnv": "player speed : number []",
                    "description": "Returns the player movement speed as an array.",
                    "notes": "Array is [unfocused speed, focused speed]."
                },
                {
                    "fname": "GetPlayerClip",
                    "args": [],
                    "returnv": "player clip : number []",
                    "description": "Gets the player's clip as an array.",
                    "notes": "Array is [left, top, right, bottom]."
                },
                {
                    "fname": "GetPlayerLife",
                    "args": [],
                    "returnv": "player lives : number",
                    "description": "Returns the number of player lives.",
                    "notes": ""
                },
                {
                    "fname": "GetPlayerSpell",
                    "args": [],
                    "returnv": "player bombs : number",
                    "description": "Returns the number of player bombs.",
                    "notes": ""
                },
                {
                    "fname": "GetPlayerPower",
                    "args": [],
                    "returnv": "player power : number",
                    "description": "Returns the amount of player power.",
                    "notes": ""
                },
                {
                    "fname": "GetPlayerInvincibilityFrame",
                    "args": [],
                    "returnv": "player invincibility frames : number (int)",
                    "description": "Returns the number of frames during which the player is invincible.",
                    "notes": ""
                },
                {
                    "fname": "GetPlayerDownStateFrame",
                    "args": [],
                    "returnv": "player down state frames : number (int)",
                    "description": "Returns the number of frames during which the player is respawning.",
                    "notes": ""
                },
                {
                    "fname": "GetPlayerRebirthFrame",
                    "args": [],
                    "returnv": "player rebirth frames : number (int)",
                    "description": "Returns the number of frames during which the player can deathbomb.",
                    "notes": ""
                },
                {
                    "fname": "GetAngleToPlayer",
                    "args": ["obj : number (Object ID)"],
                    "returnv": "angle from obj to player : number (degrees)",
                    "description": "Returns the angle from the provided object to the player.",
                    "notes": ""
                },
                {
                    "fname": "IsPermitPlayerShot",
                    "args": [],
                    "returnv": "true if the player can shoot; false otherwise : bool",
                    "description": "Returns true if the player can use normal shots, false otherwise.",
                    "notes": ""
                },
                {
                    "fname": "IsPermitPlayerSpell",
                    "args": [],
                    "returnv": "true if the player can bomb; false otherwise : bool",
                    "description": "Returns true if the player can use bombs, false otherwise.",
                    "notes": "The returned value may differ from a previously set SetForbidPlayerSpell. For instance, it is forced to false during a LastSpell."
                },
                {
                    "fname": "IsPlayerLastSpellWait",
                    "args": [],
                    "returnv": "true if the player is currently deathbombing; false otherwise : bool",
                    "description": "Returns true if the player is deathbombing, false otherwise.",
                    "notes": ""
                },
                {
                    "fname": "IsPlayerSpellActive",
                    "args": [],
                    "returnv": "true if the player is currently bombing; false otherwise : bool",
                    "description": "Returns true if the player is utilizing a bomb, false otherwise.",
                    "notes": ""
                },
                {
                    "fname": "GetPlayerID",
                    "args": [],
                    "returnv": "player script id : string",
                    "description": "Returns the system ID of the player script.",
                    "notes": "This value is defined inside the player script in the #ID header."
                },
                {
                    "fname": "GetPlayerReplayName",
                    "args": [],
                    "returnv": "player script replay name : string",
                    "description": "Returns the replay ID of the player.",
                    "notes": "This value is defined inside the player script in the #ReplayName header."
                }
            ]
        },
        {
            "catname": "Enemy Functions",
            "fxns": [
                {
                    "fname": "GetEnemyBossSceneObjectID",
                    "args": [],
                    "returnv": "boss scene object ID : number (Object ID)",
                    "description": "Returns the boss scene object ID or ID_INVALID when not in a boss scene.",
                    "notes": ""
                },
                {
                    "fname": "GetEnemyBossObjectID",
                    "args": [],
                    "returnv": "array of boss object IDs : number (Object ID) []",
                    "description": "Returns an array consisting of the Object ID of the boss present on the screen.",
                    "notes": ""
                },
                {
                    "fname": "GetAllEnemyID",
                    "args": [],
                    "returnv": "array of enemy object IDs : number (Object ID) []",
                    "description": "Returns an array consisting of the Object ID of every enemy present on the screen.",
                    "notes": ""
                },
                {
                    "fname": "GetIntersectionRegistedEnemyID",
                    "args": [],
                    "returnv": "array of enemy object IDs : number (Object ID) []",
                    "description": "Returns an array consisting of the Object ID of all enemies with a registered hitbox to player shots (via ObjEnemy_SetIntersectionCircleToShot()).",
                    "notes": ""
                },
                {
                    "fname": "GetAllEnemyIntersectionPosition",
                    "args": [],
                    "returnv": "array of enemy positions : number [][]",
                    "description": "Returns the position of all enemies for which collision detection is true (currently intersecting) as a 2D array.",
                    "notes": "Return format is [index][&lt;x coordinate, y coordinate&gt;]."
                },
                {
                    "fname": "GetEnemyIntersectionPosition",
                    "args": ["xcoord : number", "ycoord : number", "acquisitionvalue : number (int)"],
                    "returnv": "array of enemy positions : number [][]",
                    "description": "Returns the enemy intersection position around the given position with acquisitionvalue priority as a 2D array.",
                    "notes": "Return format is [index][&lt;x coordinate, y coordinate&gt;].<br>The first possible acquisition value (index 0) corresponds to the nearest enemy to the provided x and y coordinates."
                },
                {
                    "fname": "GetEnemyIntersectionPositionByIdA1",
                    "args": ["enemyID : number (Object ID)"],
                    "returnv": "array of enemy positions : number [][]",
                    "description": "Returns all collision detection positions of the specified enemy as a 2D array.",
                    "notes": "Return format is [index][&lt;x coordinate, y coordinate&gt;].<br>"
                },
                {
                    "fname": "GetEnemyIntersectionPositionByIdA2",
                    "args": ["enemyID : number (Object ID)", "xcoord : number", "ycoord : number"],
                    "returnv": "boss scene object ID : number (Object ID)",
                    "description": "Returns the boss scene object ID or ID_INVALID when not in a boss scene.",
                    "notes": "Return format is [index][&lt;x coordinate, y coordinate&gt;].<br>The first index (index 0) corresponds to the nearest intersection position from the provided x and y coordinates."
                },
                {
                    "fname": "LoadEnemyShotData",
                    "args": ["filename : string (path)"],
                    "returnv": "",
                    "description": "Loads specified shot image file.",
                    "notes": "Files with the same name can only be loaded once."
                },
                {
                    "fname": "ReloadEnemyShotData",
                    "args": ["filename : string (path)"],
                    "returnv": "",
                    "description": "Reloads specified shot image file.",
                    "notes": "Unlike LoadEnemyShotData, this function can load the same file several times."
                }
            ]
        },
        {
            "catname": "Shot Functions",
            "fxns": [
                {
                    "fname": "DeleteShotAll",
                    "args": ["shottype : const", "deletetype : const"],
                    "returnv": "",
                    "description": "Deletes all shot objects on screen matching the criteria, utilizing the selected deletion type.",
                    "notes": "shottype can be:<br>TYPE_ALL (all shot objects)<br>TYPE_SHOT (shot objects without spell resistance)<br>TYPE_CHILD (shot objects fired from the currently running script)<br>deletetype can be:<br>TYPE_IMMEDIATE (immediately delete the bullets)<br>TYPE_FADE (slowly fade out the bullets)<br>TYPE_ITEM (turn the bullets into items according to the running item script)<br>Note: With TYPE_FADE, bullets will still be visible while fading out, but they will not have any collision."
                },
                {
                    "fname": "DeleteShotInCircle",
                    "args": ["shottype : const", "deletetype : const", "xcoord : number", "ycoord : number", "radius : number"],
                    "returnv": "",
                    "description": "Deletes all shot objects matching the criteria in the designated circle centered at (xcoord, ycoord) with provided radius, utilizing the selected deletion type.",
                    "notes": "type can be:<br>TYPE_ALL (all shot objects)<br>TYPE_SHOT (shot objects without spell resistance)<br>TYPE_CHILD (shot objects fired from the currently running script)<br>deletetype can be:<br>TYPE_IMMEDIATE (immediately delete the bullets)<br>TYPE_FADE (slowly fade out the bullets)<br>TYPE_ITEM (turn the bullets into items according to the running item script)<br>Note: With TYPE_FADE, bullets will still be visible while fading out, but they will not have any collision."
                },
                {
                    "fname": "CreateShotA1",
                    "args": ["xcoord : number", "ycoord : number", "speed : number", "angle : number (degrees)", "graphic : number (int)", "delay : number (int)"],
                    "returnv": "object ID of new shot : number (Object ID)",
                    "description": "Creates a basic bullet that will move at the angle and speed defined.",
                    "notes": "graphic is the image the bullet will have, while delay is the time in frames before the bullet will appear.<br>During it's delay, there will be a collisionless cloud that appears where the bullet will spawn.<br>Returns a void value in a player script if the player is unable to shoot."
                },
                {
                    "fname": "CreateShotA2",
                    "args": ["xcoord : number", "ycoord : number", "speed : number", "angle : number (degrees)", "accel : number", "maxspeed : number", "graphic : number (int)", "delay : number (int)"],
                    "returnv": "object ID of new shot : number (Object ID)",
                    "description": "Creates a bullet that will move at the angle and speed defined, incrementing its speed by acceleration every frame, capping at maxspeed.",
                    "notes": "graphic is the image the bullet will have, while delay is the time in frames before the bullet will appear.<br>During it's delay, there will be a collisionless cloud that appears where the bullet will spawn.<br>Returns a void value in a player script if the player is unable to shoot."
                },
                {
                    "fname": "CreateShotOA1",
                    "args": ["parentobj : number (Object ID)", "speed : number", "angle : number (degrees)", "graphic : number (int)", "delay : number (int)"],
                    "returnv": "object ID of new shot : number (Object ID)",
                    "description": "Creates a bullet that will spawn on the coordinates of the given object id and will move at the angle and speed defined.",
                    "notes": "graphic is the image the bullet will have, while delay is the time in frames before the bullet will appear.<br>During it's delay, there will be a collisionless cloud that appears where the bullet will spawn.<br>Returns a void value in a player script if the player is unable to shoot."
                },
                {
                    "fname": "CreateShotB1",
                    "args": ["xcoord : number", "ycoord : number", "xspeed : number", "yspeed : number", "graphic : number (int)", "delay : number (int)"],
                    "returnv": "object ID of new shot : number (Object ID)",
                    "description": "Creates a bullet that will move at the specified x and y speeds.",
                    "notes": "graphic is the image the bullet will have, while delay is the time in frames before the bullet will appear.<br>During it's delay, there will be a collisionless cloud that appears where the bullet will spawn.<br>Returns a void value in a player script if the player is unable to shoot."
                },
                {
                    "fname": "CreateShotB2",
                    "args": ["xcoord : number", "ycoord : number", "xspeed : number", "yspeed : number", "xaccel : number", "yaccel : number", "maxxspeed : number", "maxyspeed : number", "graphic : number (int)", "delay : number (int)"],
                    "returnv": "object ID of new shot : number (Object ID)",
                    "description": "Creates a bullet that will move at the specified x and y speeds, incrementing its speed components by the respective acceleration component every frame, capping at the maxspeed for each component.",
                    "notes": "graphic is the image the bullet will have, while delay is the time in frames before the bullet will appear.<br>During it's delay, there will be a collisionless cloud that appears where the bullet will spawn.<br>Returns a void value in a player script if the player is unable to shoot."
                },
                {
                    "fname": "CreateShotOB1",
                    "args": ["parentobj : number (Object ID)", "xspeed : number", "yspeed : number", "graphic : number (int)", "delay : number (int)"],
                    "returnv": "object ID of new shot : number (Object ID)",
                    "description": "Creates a bullet that will spawn on the coordinates of the given object id and will move at the specified x and y speeds.",
                    "notes": "graphic is the image the bullet will have, while delay is the time in frames before the bullet will appear.<br>During it's delay, there will be a collisionless cloud that appears where the bullet will spawn.<br>Returns a void value in a player script if the player is unable to shoot."
                },
                {
                    "fname": "CreateLooseLaserA1",
                    "args": ["xcoord : number", "ycoord : number", "speed : number", "angle : number (degrees)", "length : number", "width : number", "graphic : number (int)", "delay : number (int)"],
                    "returnv": "object ID of new loose laser : number (Object ID)",
                    "description": "Creates a loose (moving) laser that will move at the angle and speed defined, with its size defined by the length (in direction of travel) and width.",
                    "notes": "graphic is the image the bullet will have, while delay is the time in frames before the laser will appear.<br>During it's delay, there will be a collisionless cloud that appears where the laser will spawn.<br>Returns a void value in a player script if the player is unable to shoot.<br>This function can be used to create larger bullets."
                },
                {
                    "fname": "CreateStraightLaserA1",
                    "args": ["xcoord : number", "ycoord : number", "angle : number (degrees)", "length : number", "width : number", "deletetime : number (int)", "graphic : number (int)", "delay : number (int)"],
                    "returnv": "object ID of new straight laser : number (Object ID)",
                    "description": "Creates a straight laser mounted at the position provided, with its size defined by the length (in direction of travel) and width.",
                    "notes": "graphic is the image the bullet will have, while delay is the time in frames before the laser will appear.<br>The 'deletetime' argument determines how many frames until the laser disappears.<br>During the delay, the laser will appear as a very thin laser that has no collision (AKA delay laser) in order to give the player a warning.<br>Having no delay while using this function is not advisable, as the laser will spawn at full size the moment the delay is over.<br>Returns a void value in a player script if the player is unable to shoot."
                },
                {
                    "fname": "CreateCurveLaserA1",
                    "args": ["xcoord : number", "ycoord : number", "speed : number", "angle : number (degrees)", "length : number", "width : number", "graphic : number (int)", "delay : number (int)"],
                    "returnv": "object ID of new curve laser : number (Object ID)",
                    "description": "Creates a curve laser that will move at the angle and speed defined, with its size defined by the length (in direction of travel) and width.",
                    "notes": "graphic is the image the bullet will have, while delay is the time in frames before the laser will appear.<br>During it's delay, there will be a collisionless cloud that appears where the laser will spawn.<br>Returns a void value in a player script if the player is unable to shoot.<br>Use ObjMove_SetAngularVelocity to adjust the curve of this laser.<br>This function is heavy to process, so having many curve lasers on-screen at the same time is not recommended."
                },
                {
                    "fname": "SetShotIntersectionCircle",
                    "args": ["xcoord : number", "ycoord : number", "radius : number"],
                    "returnv": "",
                    "description": "Adds a circular player hitbox at the specified position with the provided radius.",
                    "notes": "Lasts one frame."
                },
                {
                    "fname": "SetShotIntersectionLine",
                    "args": ["startxcoord : number", "startycoord : number", "endxcoord : number", "endycoord : number", "width : number"],
                    "returnv": "",
                    "description": "Adds a linear player hitbox between the two specified positions with the provided width.",
                    "notes": "Lasts one frame."
                },
                {
                    "fname": "GetShotIdInCircleA1",
                    "args": ["xcoord : number", "ycoord : number", "radius : number"],
                    "returnv": "bullet object IDs within circle : number (Object ID) []",
                    "description": "Returns the object IDs of the bullets inside the given circle in an array.",
                    "notes": "Inside a player script, it will only return enemy bullet IDs, and vice versa."
                },
                {
                    "fname": "GetShotIdInCircleA2",
                    "args": ["xcoord : number", "ycoord : number", "radius : number", "target : const"],
                    "returnv": "bullet object IDs with specified target type within circle : number (Object ID) []",
                    "description": "Returns the object IDs of the bullets inside the given circle with the specified target type in an array.",
                    "notes": "Inside a player script, it will only return enemy bullet IDs, and vice versa.<br>target can be:<br>TARGET_ALL (all shots)<br>TARGET_ENEMY (enemy shots only)<br>TARGET_PLAYER (player shots only)"
                },
                {
                    "fname": "GetShotCount",
                    "args": ["target : const"],
                    "returnv": "number of bullets with specified target type : number (int)",
                    "description": "Returns the number of bullets with the specified target type",
                    "notes": "target can be:<br>TARGET_ALL (all shots)<br>TARGET_ENEMY (enemy shots only)<br>TARGET_PLAYER (player shots only)"
                },
                {
                    "fname": "SetShotAutoDeleteClip",
                    "args": ["left : number", "top : number", "right : number", "bottom : number"],
                    "returnv": "",
                    "description": "Sets at what point bullets will be automatically deleted when leaving the STG screen.",
                    "notes": "To override this auto deletion, use ObjShot_SetAutoDelete on the bullet you want to prevent from auto deleting.<br>Default is (64, 64, 64, 64)."
                },
                {
                    "fname": "GetShotDataInfoA1",
                    "args": ["graphic : number (int)", "targetshotsheet : const", "infotype : const"],
                    "returnv": "shotsheet information depending on infotype : varies",
                    "description": "Returns information from the shotsheet depending on the information requested.",
                    "notes": "target shotsheet can be TARGET_PLAYER or TARGET_ENEMY.<br>infotype can be:<br>INFO_RECT (returns [left, top, right, bottom] for the graphic)<br>INFO_DELAY_COLOR (returns [red, green, blue] for the graphic)<br>INFO_BLEND (returns blend type for the graphic)<br>INFO_COLLISION (returns radius of collision detection)<br>INFO_COLLISION_LIST (returns 2D array of collision hitbox radii and coordinates [radius, x, y])"
                },
                {
                    "fname": "StartShotScript",
                    "args": ["scriptpath : string (path)"],
                    "returnv": "",
                    "description": "Starts the specified shot script.",
                    "notes": ""
                }
            ]
        },
        {
            "catname": "Item Functions",
            "fxns": [
                {
                    "fname": "CreateItemA1",
                    "args": ["itemtype : const", "xcoord : number", "ycoord : number", "score : number"],
                    "returnv": "",
                    "description": "Creates an item of the provided itemtype and score value at the specified x and y coordinates.",
                    "notes": "itemtype can be one of the following:<br>ITEM_1UP and ITEM_1UP_S (lives), ITEM_SPELL and ITEM_SPELL_S (bombs), ITEM_POINT and ITEM_POINT_S (points), ITEM_POWER and ITEM_POWER_S (power), or ITEM_USER (user-defined).<br>The types ending in '_S' will create a smaller version of the specified item."
                },
                {
                    "fname": "CreateItemA2",
                    "args": ["itemtype : const", "xcoord : number", "ycoord : number", "xdest : number", "ydest : number", "score : number"],
                    "returnv": "",
                    "description": "Creates an item of the provided itemtype and score value at the specified x and y coordinates that moves to the provided x and y destination coordinates before falling down.",
                    "notes": "itemtype can be one of the following:<br>ITEM_1UP and ITEM_1UP_S (lives), ITEM_SPELL and ITEM_SPELL_S (bombs), ITEM_POINT and ITEM_POINT_S (points), ITEM_POWER and ITEM_POWER_S (power), or ITEM_USER (user-defined).<br>The types ending in '_S' will create a smaller version of the specified item."
                },
                {
                    "fname": "CreateItemU1",
                    "args": ["itemID : number (int)", "xcoord : number", "ycoord : number", "score : number"],
                    "returnv": "",
                    "description": "Creates a user-defined item with the provided item ID and score value at the specified x and y coordinates.",
                    "notes": ""
                },
                {
                    "fname": "CreateItemU2",
                    "args": ["itemtype : const", "xcoord : number", "ycoord : number", "xdest : number", "ydest : number", "score : number"],
                    "returnv": "",
                    "description": "Creates a user-defined item with the provided item ID and score value at the specified x and y coordinates that moves to the provided x and y destination coordinates before falling.",
                    "notes": ""
                },
                {
                    "fname": "CollectAllItems",
                    "args": [],
                    "returnv": "",
                    "description": "Makes all items fly towards the player.",
                    "notes": ""
                },
                {
                    "fname": "CollectItemsByType",
                    "args": ["itemtype : const"],
                    "returnv": "",
                    "description": "Makes all items of the specified type fly toward the player.",
                    "notes": "itemtype can be one of the following:<br>ITEM_1UP and ITEM_1UP_S (lives), ITEM_SPELL and ITEM_SPELL_S (bombs), ITEM_POINT and ITEM_POINT_S (points), ITEM_POWER and ITEM_POWER_S (power), or ITEM_USER (user-defined)."
                },
                {
                    "fname": "CollectItemsInCircle",
                    "args": ["xcoord : number", "ycoord : number", "radius : number"],
                    "returnv": "",
                    "description": "Makes all items within the circle fly toward the player.",
                    "notes": ""
                },
                {
                    "fname": "CancelCollectItems",
                    "args": [],
                    "returnv": "",
                    "description": "Cancels any items that were currently moving to the player for collection.",
                    "notes": "This function only works for items collected by the player auto item collection line (SetPlayerAutoItemCollectLine)."
                },
                {
                    "fname": "StartItemScript",
                    "args": ["scriptpath : string (path)"],
                    "returnv": "",
                    "description": "Starts the script at the provided path for processing user-defined items.",
                    "notes": ""
                },
                {
                    "fname": "SetDefaultBonusItemEnable",
                    "args": ["enable : bool"],
                    "returnv": "",
                    "description": "Sets whether or not to create the default autocollected bullet delete items when bullets are deleted to items.",
                    "notes": "True will create the items, false will not.<br>The default value is true."
                },
                {
                    "fname": "LoadItemData",
                    "args": ["scriptpath : string (path)"],
                    "returnv": "",
                    "description": "Loads the specified item data.",
                    "notes": "Can be called any amount of times, but currently existing IDs will be replaced by new ones of the same value.<br>You may not use the same file twice in this function; to do so, see ReloadItemData."
                },
                {
                    "fname": "ReloadItemData",
                    "args": ["scriptpath : string (path)"],
                    "returnv": "",
                    "description": "Reloads the specified item data.",
                    "notes": "Can be called any amount of times, but currently existing IDs will be replaced by new ones of the same value.<br>You do not need to use LoadItemData before using this function."
                }
            ]
        },
        {
            "catname": "Other Functions",
            "fxns": [
                {
                    "fname": "StartSlow",
                    "args": ["slowtarget : const", "fpsvalue : number"],
                    "returnv": "",
                    "description": "Creates a pseudo slow effect by forcing Danmakufu to run at the specified FPS value.",
                    "notes": "There is currently only one target available, TARGET_ALL.<br>Use StopSlow to stop this effect."
                },
                {
                    "fname": "StopSlow",
                    "args": ["slowtarget : const"],
                    "returnv": "",
                    "description": "Removes the pseudo slow from StartSlow, and restores Danmakufu to normal FPS.",
                    "notes": "There is currently only one target available, TARGET_ALL."
                },
                {
                    "fname": "IsIntersected_Line_Circle",
                    "args": ["startx : number", "starty : number", "endx : number", "endy : number", "width : number", "xcoord : number", "ycoord : number", "radius : number"],
                    "returnv": "true if the line and circle collide; false otherwise : bool",
                    "description": "Checks if the given line with given width is colliding with the given circle of given radius.<br>Returns true if there is a collision; if there is no collision, it returns false.",
                    "notes": ""
                },
                {
                    "fname": "IsIntersected_Obj_Obj",
                    "args": ["objID1 : number (Object ID)", "objID2 : number (Object ID)"],
                    "returnv": "true if the objects collide; false otherwise : bool",
                    "description": "Checks if the given objects are colliding with each other.<br>Returns true if there is a collision; if there is no collision, it returns false.",
                    "notes": "This function is currently only available on bullet and laser objects."
                },
                {
                    "fname": "GetObjectDistance",
                    "args": ["objID1 : number (Object ID)", "objID2 : number (Object ID)"],
                    "returnv": "distance between two objects : number",
                    "description": "Returns the distance between the two objects.",
                    "notes": "If one of the objects' ID is invalid, -1 will be returned."
                },
                {
                    "fname": "GetObject2dPosition",
                    "args": ["objID : number (Object ID)"],
                    "returnv": "2D coordinates of a 3D object projected onto the 2D window : number []",
                    "description": "Returns the 2D coordinates of a 3D object projected onto the 2D window.",
                    "notes": "The array is returned as [X, Y]."
                },
                {
                    "fname": "Get2dPosition",
                    "args": ["xcoord : number", "ycoord : number", "zcoord : number"],
                    "returnv": "2D location of the provided 3D coordinates projected onto the 2D window : number []",
                    "description": "Returns the 2D coordinates of the given 3D coordinates projected onto the 2D window.",
                    "notes": "The array is returned as [X, Y]."
                },
                {
                    "fname": "erase",
                    "args": ["array : free []", "index : number (int)"],
                    "returnv": "Array with element at index removed",
                    "description": "Returns a new array with the element at the given index in the provided array removed.",
                    "notes": ""
                },
                {
                    "fname": "length",
                    "args": ["array : free []"],
                    "returnv": "size of array : number (int)",
                    "description": "Returns the size of an array.",
                    "notes": ""
                },
                {
                    "fname": "concatenate",
                    "args": ["array1 : `a []", "array2 : `a []"],
                    "returnv": "merged array : `a []",
                    "description": "Concatenates the two provided arrays (of same type) and returns the new array.",
                    "notes": "Long form for ~.<br>Works on strings, as they are character arrays."
                },
                {
                    "fname": "slice",
                    "args": ["array : free []", "startcutoff : number (int)", "endcutoff : number (int)"],
                    "returnv": "indices in between the cutoff values : free []",
                    "description": "Cuts out a specific portion of an array.",
                    "notes": "Long form for Array[startcutoff..endcutoff].<br>Sliced portion includes startcutoff but not endcutoff."
                },
                {
                    "fname": "not",
                    "args": ["boolexpr : bool"],
                    "returnv": "logical negation of boolexpr : bool",
                    "description": "Returns the logical negation of the provided boolean expressing.",
                    "notes": "Long form for !."
                }
            ]
        }
    ]
};
