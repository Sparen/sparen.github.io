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
                    "notes": ""
                },
                {
                    "fname": "IntToString",
                    "args": ["value : number"],
                    "returnv": "value as a string : string",
                    "description": "Returns the value as a string.",
                    "notes": "Omits any decimal places if a floating point value is provided."
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
                    "notes": "If the string does not represent a valid number, then 0 will be returned."
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
                    "args": ["date : string"],
                    "returnv": "string containing the current date and time : string (date)",
                    "description": "Returns a string containing the current date and time.",
                    "notes": "Example: If the current date is 2012/09/16 12:34:56, then \"20120916123456\" will be returned.<br>To convert to a number use atoi like so: <code>let year = atoi(GetCurrentDateTimeS[0..4]);</code>"
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
                    "description": "NO_TRANSLATION_FOUND",
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
                    "returnv": "",
                    "description": "NO_TRANSLATION_FOUND",
                    "notes": "Index in range 0-2."
                },
                {
                    "fname": "CreateRenderTarget",
                    "args": ["targetname : string"],
                    "returnv": "true if successfully created; false otherwise : bool",
                    "description": "Can create a custom render target outside of the reserved ones.",
                    "notes": "To use, ObjPrim_SetTexture must have the name of the render target as a string."
                },
                {
                    "fname": "RenderToTextureA1",
                    "args": ["targetname : string", "start : number", "end : number", "rendertargetclear : bool"],
                    "returnv": "",
                    "description": "Renders the specified range of invalid render priority drawings to a texture.",
                    "notes": "TODO: What does rendertargetclear do?"
                },
                {
                    "fname": "RenderToTextureB1",
                    "args": ["targetname : string", "obj : number (Object ID)", "rendertargetclear : bool"],
                    "returnv": "",
                    "description": "Renders the specified object to texture.",
                    "notes": "TODO: What does rendertargetclear do?"
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
                    "description": "NO_TRANSLATION_FOUND",
                    "notes": ""
                },
                {
                    "fname": "SetShaderI",
                    "args": ["objshader : number (Object ID)", "rpriority1 : number", "rpriority2 : number"],
                    "returnv": "",
                    "description": "NO_TRANSLATION_FOUND",
                    "notes": ""
                },
                {
                    "fname": "ResetShader",
                    "args": ["rpriority1 : number", "rpriority2 : number"],
                    "returnv": "",
                    "description": "NO_TRANSLATION_FOUND",
                    "notes": ""
                },
                {
                    "fname": "ResetShaderI",
                    "args": ["rpriority1 : number", "rpriority2 : number"],
                    "returnv": "",
                    "description": "NO_TRANSLATION_FOUND",
                    "notes": ""
                }
            ]
        },
        {
            "catname": "3D Camera Functions",
            "fxns": [
                {
                    "fname": "SetCameraFocusX",
                    "args": [],
                    "returnv": "",
                    "description": "",
                    "notes": ""
                },
                {
                    "fname": "SetCameraFocusY",
                    "args": [],
                    "returnv": "",
                    "description": "",
                    "notes": ""
                },
                {
                    "fname": "SetCameraFocusZ",
                    "args": [],
                    "returnv": "",
                    "description": "",
                    "notes": ""
                },
                {
                    "fname": "SetCameraFocusXYZ",
                    "args": [],
                    "returnv": "",
                    "description": "",
                    "notes": ""
                },
                {
                    "fname": "SetCameraRadius",
                    "args": [],
                    "returnv": "",
                    "description": "",
                    "notes": ""
                },
                {
                    "fname": "SetCameraAzimuthAngle",
                    "args": [],
                    "returnv": "",
                    "description": "",
                    "notes": ""
                },
                {
                    "fname": "SetCameraElevationAngle",
                    "args": [],
                    "returnv": "",
                    "description": "",
                    "notes": ""
                },
                {
                    "fname": "SetCameraYaw",
                    "args": [],
                    "returnv": "",
                    "description": "",
                    "notes": ""
                },
                {
                    "fname": "SetCameraPitch",
                    "args": [],
                    "returnv": "",
                    "description": "",
                    "notes": ""
                },
                {
                    "fname": "SetCameraRoll",
                    "args": [],
                    "returnv": "",
                    "description": "",
                    "notes": ""
                },
                {
                    "fname": "GetCameraX",
                    "args": [],
                    "returnv": "",
                    "description": "",
                    "notes": ""
                },
                {
                    "fname": "GetCameraY",
                    "args": [],
                    "returnv": "",
                    "description": "",
                    "notes": ""
                },
                {
                    "fname": "GetCameraZ",
                    "args": [],
                    "returnv": "",
                    "description": "",
                    "notes": ""
                },
                {
                    "fname": "GetCameraFocusX",
                    "args": [],
                    "returnv": "",
                    "description": "",
                    "notes": ""
                },
                {
                    "fname": "GetCameraFocusY",
                    "args": [],
                    "returnv": "",
                    "description": "",
                    "notes": ""
                },
                {
                    "fname": "GetCameraFocusZ",
                    "args": [],
                    "returnv": "",
                    "description": "",
                    "notes": ""
                },
                {
                    "fname": "GetCameraRadius",
                    "args": [],
                    "returnv": "",
                    "description": "",
                    "notes": ""
                },
                {
                    "fname": "GetCameraAzimuthAngle",
                    "args": [],
                    "returnv": "",
                    "description": "",
                    "notes": ""
                },
                {
                    "fname": "GetCameraElevationAngle",
                    "args": [],
                    "returnv": "",
                    "description": "",
                    "notes": ""
                },
                {
                    "fname": "GetCameraYaw",
                    "args": [],
                    "returnv": "",
                    "description": "",
                    "notes": ""
                },
                {
                    "fname": "GetCameraPitch",
                    "args": [],
                    "returnv": "",
                    "description": "",
                    "notes": ""
                },
                {
                    "fname": "GetCameraRoll",
                    "args": [],
                    "returnv": "",
                    "description": "",
                    "notes": ""
                },
                {
                    "fname": "SetCameraPerspectiveClip",
                    "args": [],
                    "returnv": "",
                    "description": "",
                    "notes": ""
                }
            ]
        },
        {
            "catname": "2D Camera Functions",
            "fxns": [
                {
                    "fname": "Set2DCameraFocusX",
                    "args": [],
                    "returnv": "",
                    "description": "",
                    "notes": ""
                },
                {
                    "fname": "Set2DCameraFocusY",
                    "args": [],
                    "returnv": "",
                    "description": "",
                    "notes": ""
                },
                {
                    "fname": "Set2DCameraFocusZ",
                    "args": [],
                    "returnv": "",
                    "description": "",
                    "notes": ""
                },
                {
                    "fname": "Set2DCameraRatio",
                    "args": [],
                    "returnv": "",
                    "description": "",
                    "notes": ""
                },
                {
                    "fname": "Set2DCameraRatioX",
                    "args": [],
                    "returnv": "",
                    "description": "",
                    "notes": ""
                },
                {
                    "fname": "Set2DCameraRatioY",
                    "args": [],
                    "returnv": "",
                    "description": "",
                    "notes": ""
                },
                {
                    "fname": "Reset2DCamera",
                    "args": [],
                    "returnv": "",
                    "description": "",
                    "notes": ""
                },
                {
                    "fname": "Get2DCameraX",
                    "args": [],
                    "returnv": "",
                    "description": "",
                    "notes": ""
                },
                {
                    "fname": "Get2DCameraY",
                    "args": [],
                    "returnv": "",
                    "description": "",
                    "notes": ""
                },
                {
                    "fname": "Get2DCameraAngleZ",
                    "args": [],
                    "returnv": "",
                    "description": "",
                    "notes": ""
                },
                {
                    "fname": "Get2DCameraRatio",
                    "args": [],
                    "returnv": "",
                    "description": "",
                    "notes": ""
                },
                {
                    "fname": "Get2DCameraRatioX",
                    "args": [],
                    "returnv": "",
                    "description": "",
                    "notes": ""
                },
                {
                    "fname": "Get2DCameraRatioY",
                    "args": [],
                    "returnv": "",
                    "description": "",
                    "notes": ""
                }
            ]
        },
        {
            "catname": "Script Functions",
            "fxns": [
                {
                    "fname": "LoadScript",
                    "args": [],
                    "returnv": "",
                    "description": "",
                    "notes": ""
                },
                {
                    "fname": "LoadScriptInThread",
                    "args": [],
                    "returnv": "",
                    "description": "",
                    "notes": ""
                },
                {
                    "fname": "StartScript",
                    "args": [],
                    "returnv": "",
                    "description": "",
                    "notes": ""
                },
                {
                    "fname": "CloseScript",
                    "args": [],
                    "returnv": "",
                    "description": "",
                    "notes": ""
                },
                {
                    "fname": "IsCloseScript",
                    "args": [],
                    "returnv": "",
                    "description": "",
                    "notes": ""
                },
                {
                    "fname": "SetScriptArgument",
                    "args": [],
                    "returnv": "",
                    "description": "",
                    "notes": ""
                },
                {
                    "fname": "GetScriptArgument",
                    "args": [],
                    "returnv": "",
                    "description": "",
                    "notes": ""
                },
                {
                    "fname": "GetScriptArgumentCount",
                    "args": [],
                    "returnv": "",
                    "description": "",
                    "notes": ""
                },
                {
                    "fname": "CloseStgScene",
                    "args": [],
                    "returnv": "",
                    "description": "",
                    "notes": ""
                },
                {
                    "fname": "GetOwnScriptID",
                    "args": [],
                    "returnv": "",
                    "description": "",
                    "notes": ""
                },
                {
                    "fname": "GetEventType",
                    "args": [],
                    "returnv": "",
                    "description": "",
                    "notes": ""
                },
                {
                    "fname": "GetEventArgument",
                    "args": [],
                    "returnv": "",
                    "description": "",
                    "notes": ""
                },
                {
                    "fname": "SetScriptResult",
                    "args": [],
                    "returnv": "",
                    "description": "",
                    "notes": ""
                },
                {
                    "fname": "GetScriptResult",
                    "args": [],
                    "returnv": "",
                    "description": "",
                    "notes": ""
                },
                {
                    "fname": "SetAutoDeleteObject",
                    "args": [],
                    "returnv": "",
                    "description": "",
                    "notes": ""
                },
                {
                    "fname": "NotifyEvent",
                    "args": [],
                    "returnv": "",
                    "description": "",
                    "notes": ""
                },
                {
                    "fname": "NotifyEventAll",
                    "args": [],
                    "returnv": "",
                    "description": "",
                    "notes": ""
                },
                {
                    "fname": "GetScriptInfoA1",
                    "args": [],
                    "returnv": "",
                    "description": "",
                    "notes": ""
                }
            ]
        },
        {
            "catname": "System Functions",
            "fxns": [
                {
                    "fname": "SetStgFrame",
                    "args": [],
                    "returnv": "",
                    "description": "",
                    "notes": ""
                },
                {
                    "fname": "GetScore",
                    "args": [],
                    "returnv": "",
                    "description": "",
                    "notes": ""
                },
                {
                    "fname": "AddScore",
                    "args": [],
                    "returnv": "",
                    "description": "",
                    "notes": ""
                },
                {
                    "fname": "GetGraze",
                    "args": [],
                    "returnv": "",
                    "description": "",
                    "notes": ""
                },
                {
                    "fname": "AddGraze",
                    "args": [],
                    "returnv": "",
                    "description": "",
                    "notes": ""
                },
                {
                    "fname": "GetPoint",
                    "args": [],
                    "returnv": "",
                    "description": "",
                    "notes": ""
                },
                {
                    "fname": "AddPoint",
                    "args": [],
                    "returnv": "",
                    "description": "",
                    "notes": ""
                },
                {
                    "fname": "SetItemRenderPriorityI",
                    "args": [],
                    "returnv": "",
                    "description": "",
                    "notes": ""
                },
                {
                    "fname": "SetShotRenderPriorityI",
                    "args": [],
                    "returnv": "",
                    "description": "",
                    "notes": ""
                },
                {
                    "fname": "GetStgFrameRenderPriorityMinI",
                    "args": [],
                    "returnv": "",
                    "description": "",
                    "notes": ""
                },
                {
                    "fname": "GetStgFrameRenderPriorityMaxI",
                    "args": [],
                    "returnv": "",
                    "description": "",
                    "notes": ""
                },
                {
                    "fname": "GetItemRenderPriorityI",
                    "args": [],
                    "returnv": "",
                    "description": "",
                    "notes": ""
                },
                {
                    "fname": "GetShotRenderPriorityI",
                    "args": [],
                    "returnv": "",
                    "description": "",
                    "notes": ""
                },
                {
                    "fname": "GetPlayerRenderPriorityI",
                    "args": [],
                    "returnv": "",
                    "description": "",
                    "notes": ""
                },
                {
                    "fname": "GetCameraFocusPermitPriorityI",
                    "args": [],
                    "returnv": "",
                    "description": "",
                    "notes": ""
                },
                {
                    "fname": "GetStgFrameLeft",
                    "args": [],
                    "returnv": "",
                    "description": "",
                    "notes": ""
                },
                {
                    "fname": "GetStgFrameTop",
                    "args": [],
                    "returnv": "",
                    "description": "",
                    "notes": ""
                },
                {
                    "fname": "GetStgFrameWidth",
                    "args": [],
                    "returnv": "",
                    "description": "",
                    "notes": ""
                },
                {
                    "fname": "GetStgFrameHeight",
                    "args": [],
                    "returnv": "",
                    "description": "",
                    "notes": ""
                },
                {
                    "fname": "GetScreenWidth",
                    "args": [],
                    "returnv": "",
                    "description": "",
                    "notes": ""
                },
                {
                    "fname": "GetScreenHeight",
                    "args": [],
                    "returnv": "",
                    "description": "",
                    "notes": ""
                },
                {
                    "fname": "IsReplay",
                    "args": [],
                    "returnv": "",
                    "description": "",
                    "notes": ""
                },
                {
                    "fname": "AddArchiveFile",
                    "args": [],
                    "returnv": "",
                    "description": "",
                    "notes": ""
                }
            ]
        }
    ]
};
