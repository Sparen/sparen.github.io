// Documentation for Touhou Danmakufu ph3, in a really shitty JavaScript / JSON file

/* Types: 
 * real (for numbers) will be noted as 'number' or 'Object ID'. numbers that are specifically floating points will be referred to as 'float' in types
 * char (for strings) will be noted as 'char' or 'string'
 */

var dnhph3docs_system = {
    "categories": [
        {
            "catname": "Player Main Functions",
            "fxns": [
                {
                    "fname": "CreatePlayerShotA1",
                    "args": ["xcoord : number", "ycoord : number", "speed : number", "angle : number (degrees)", "damage : number", "penetration : number (int)", "graphic : number (int)"],
                    "returnv": "",
                    "description": "Fires a player shot with the specified position, speed, angle, damage, penetration, and graphic ID from the player shotsheet.",
                    "notes": "If the player is not permitted to shoot, then this function returns void."
                },
                {
                    "fname": "CallSpell",
                    "args": [],
                    "returnv": "",
                    "description": "If the conditions to use a spell card are met, uses a spell card.",
                    "notes": "If the player is not permitted to shoot, then this function returns void."
                },
                {
                    "fname": "LoadPlayerShotData",
                    "args": ["shotsheetpath : string (path)"],
                    "returnv": "",
                    "description": "Loads the shot data image file, allowing usage of the specified shot IDs within the player script.",
                    "notes": "If called several times, loads each file in succession as long as the IDs are different.<br>A file cannot be loaded multiple times in a row."
                },
                {
                    "fname": "ReloadPlayerShotData",
                    "args": ["shotsheetpath : string (path)"],
                    "returnv": "",
                    "description": "Reloads the shot data image file, allowing usage of the specified shot IDs within the player script.",
                    "notes": "A file can be loaded several times with this function.<br>Can be used without loading through LoadPlayerShotData first."
                },
                {
                    "fname": "GetSpellManageObject",
                    "args": [],
                    "returnv": "array of spell manage object IDs : number (Object ID) []",
                    "description": "Returns an array of spell card management object IDs.",
                    "notes": "At the end of the spell card you need to delete this object with ObjDelete."
                }
            ]
        },
        {
            "catname": "Player Spell Functions",
            "fxns": [
                {
                    "fname": "ObjSpell_Create",
                    "args": [],
                    "returnv": "object ID of new spell object : number (Object ID)",
                    "description": "Creates a spell object and returns its ID.",
                    "notes": ""
                },
                {
                    "fname": "ObjSpell_Regist",
                    "args": ["objID : number (Object ID)"],
                    "returnv": "",
                    "description": "Invokes the spell object associated with objID.",
                    "notes": ""
                },
                {
                    "fname": "ObjSpell_SetDamage",
                    "args": ["objID : number (Object ID)", "damage : number"],
                    "returnv": "",
                    "description": "Sets the damage of the spell object associated with objID.",
                    "notes": ""
                },
                {
                    "fname": "ObjSpell_SetEraseShot",
                    "args": ["objID : number (Object ID)", "eraseshot : bool"],
                    "returnv": "",
                    "description": "Determines whether the spell object associated with objID can delete enemy bullets.",
                    "notes": "Defaults to true."
                },
                {
                    "fname": "ObjSpell_SetIntersectionCircle",
                    "args": ["objID : number (Object ID)", "xcoord : number", "ycoord : number", "radius : number"],
                    "returnv": "",
                    "description": "Sets the collision circle of the spell object associated with objID.",
                    "notes": ""
                },
                {
                    "fname": "ObjSpell_SetIntersectionLine",
                    "args": ["objID : number (Object ID)", "startxcoord : number", "startycoord : number", "endxcoord : number", "endycoord : number", "width : number"],
                    "returnv": "",
                    "description": "Sets the collision line of the spell object associated with objID.",
                    "notes": ""
                }
            ]
        },
        {
            "catname": "Private System Functions",
            "fxns": [
                {
                    "fname": "SetPauseScriptPath",
                    "args": ["scriptpath : string (path)"],
                    "returnv": "",
                    "description": "Defines a script to be executed when the game is paused.",
                    "notes": ""
                },
                {
                    "fname": "SetEndSceneScriptPath",
                    "args": ["scriptpath : string (path)"],
                    "returnv": "",
                    "description": "Defines a script to be executed when the game (Single/Plural/Stage) finishes.",
                    "notes": ""
                },
                {
                    "fname": "SetReplaySaveSceneScriptPath",
                    "args": ["scriptpath : string (path)"],
                    "returnv": "",
                    "description": "Defines a script to be executed when the player chooses to save a replay of the game.",
                    "notes": ""
                },
                {
                    "fname": "GetTransitionRenderTargetName",
                    "args": [],
                    "returnv": "transition render target : string (path)",
                    "description": "Gets the name of the render target from the frame before a menu script was executed.",
                    "notes": "Specifically to be used by menu scripts such as the pause script.<br>This can be used to create a texture of the previous frame just before the game is paused.<br>This allows for effects to be applied such as fading to a blur.<br>Example: <code>let target = GetTransitionRenderTargetName(); ObjPrim_SetTexture(obj, target);</code>"
                }
            ]
        },
        {
            "catname": "Custom Script Functions",
            "fxns": [
                {
                    "fname": "SetShotDeleteEventEnable",
                    "args": ["eventtype : const", "register : bool"],
                    "returnv": "",
                    "description": "Sets whether the bullet deletion event is allowed to occur.",
                    "notes": "Event types are:<br>EV_DELETE_SHOT_IMMEDIATE (event will delete the shot immediately)<br>EV_DELETE_SHOT_FADE (event will fade out the shot)<br>Default is false for both event types."
                }
            ]
        },
        {
            "catname": "Package Functions",
            "fxns": [
                {
                    "fname": "ClosePackage",
                    "args": [],
                    "returnv": "",
                    "description": "Ends the package script.",
                    "notes": ""
                },
                {
                    "fname": "InitializeStageScene",
                    "args": [],
                    "returnv": "",
                    "description": "Performs the initial processing for the stage script.",
                    "notes": "Called only once before the start of a stage script."
                },
                {
                    "fname": "FinalizeStageScene",
                    "args": [],
                    "returnv": "",
                    "description": "Terminates processing of the stage script.",
                    "notes": "Called only once at the end of a stage script.<br>Defines the end point of replays.<br>Throws an error if the stage script is not yet closed."
                },
                {
                    "fname": "StartStageScene",
                    "args": [],
                    "returnv": "",
                    "description": "Starts the stage script.",
                    "notes": ""
                },
                {
                    "fname": "SetStageIndex",
                    "args": ["stageindex : number (int)"],
                    "returnv": "",
                    "description": "Defines the index of the stage to be started next.",
                    "notes": "The value does not need to be sequential.<br>Specifying an already specified index results in an error."
                },
                {
                    "fname": "SetStageMainScript",
                    "args": ["scriptpath : string (path)"],
                    "returnv": "",
                    "description": "Defines the stage script to be started next.",
                    "notes": ""
                },
                {
                    "fname": "SetStagePlayerScript",
                    "args": ["scriptpath : string (path)"],
                    "returnv": "",
                    "description": "Defines the player script to be used in the stage.",
                    "notes": "This player must have been declared in the #Player header of the package.<br>If #Player is empty, you can specify all players under /script/player/folder."
                },
                {
                    "fname": "SetStageReplayFile",
                    "args": ["scriptpath : string (path)"],
                    "returnv": "",
                    "description": "Runs the stage script once with the replay replaying all virtual key presses (including player shots, movement, etc).",
                    "notes": "Can only be called after InitializeStageScene.<br>Since the replay file holds information for each stage, in a multi-stage replay, you can begin playback from a middle stage without having to start from the first stage."
                },
                {
                    "fname": "GetStageSceneState",
                    "args": ["infotype : const"],
                    "returnv": "results of query : bool",
                    "description": "Returns status information about the currently running stage script.",
                    "notes": "Only available infotype is STAGE_STATE_FINISHED (returns true if the stage is finished)."
                },
                {
                    "fname": "GetStageSceneResult",
                    "args": [],
                    "returnv": "reason why stage finished : const",
                    "description": "Returns the reason why the stage script finished.",
                    "notes": "Available return values are:<br>STAGE_RESULT_CLEARED (stage was cleared)<br>STAGE_RESULT_PLAYER_DOWN (player ran out of lives)<br>STAGE_RESULT_BREAK_OFF (stage ended prematurely; was terminated by player)"
                },
                {
                    "fname": "PauseStageScene",
                    "args": ["pause : bool"],
                    "returnv": "",
                    "description": "Pauses or resumes the stage script.",
                    "notes": ""
                },
                {
                    "fname": "TerminateStageScene",
                    "args": [],
                    "returnv": "",
                    "description": "Exits out of the currently running stage script.",
                    "notes": ""
                },
                {
                    "fname": "GetLoadFreePlayerScriptList",
                    "args": [],
                    "returnv": "list of available player scripts : string (path) []",
                    "description": "Returns a list of the player scripts available in the /script/player/ folder.",
                    "notes": ""
                },
                {
                    "fname": "GetFreePlayerScriptCount",
                    "args": [],
                    "returnv": "number of player scripts available : number (int)",
                    "description": "Returns the number of player scripts available in the /script/player/ folder.",
                    "notes": ""
                },
                {
                    "fname": "GetFreePlayerScriptInfo",
                    "args": ["playerscriptindex : number (int)", "infotype : const"],
                    "returnv": "results of query : string",
                    "description": "Returns various information from the header of the player script with the given index.",
                    "notes": "Available infotypes are<br>INFO_SCRIPT_PATH (player script path)<br>INFO_SCRIPT_ID (player script's #ID)<br>INFO_SCRIPT_TITLE (player script's #Title)<br>INFO_SCRIPT_TEXT (player script's #Text)<br>INFO_SCRIPT_IMAGE (player script's #Image)<br>INFO_SCRIPT_REPLAY_NAME (player script's #ReplayName)"
                },
                {
                    "fname": "LoadReplayList",
                    "args": [],
                    "returnv": "",
                    "description": "Loads the list of the available replays for the current script.",
                    "notes": ""
                },
                {
                    "fname": "GetValidReplayIndices",
                    "args": [],
                    "returnv": "list of indices for current script's available replays : number (int) []",
                    "description": "Loads a list of indices for the current script's available replays.",
                    "notes": ""
                },
                {
                    "fname": "IsValidReplayIndex",
                    "args": ["replayindex : number (int)"],
                    "returnv": "true if valid replay index; false otherwise : bool",
                    "description": "Returns true or false depending on the index chosen is valid to be used in GetReplayInfo.",
                    "notes": ""
                },
                {
                    "fname": "GetReplayInfo",
                    "args": ["replayindex : number (int)", "infotype : const"],
                    "returnv": "results of query : varies",
                    "description": "Returns various information about the replay with the given index.",
                    "notes": "Available infotypes are<br>REPLAY_FILE_PATH (replay file path)<br>REPLAY_DATE_TIME (date and time at which the replay was saved)<br>REPLAY_USER_NAME (player's name)<br>REPLAY_TOTAL_SCORE (final score)<br>REPLAY_FPS_AVERAGE (average framerate)<br>REPLAY_PLAYER_NAME (player script name)<br>REPLAY_STAGE_INDEX_LIST (list of stage indices that the replay used)<br>REPLAY_STAGE_START_SCORE_LIST (List of score indices at the start of each stage (the order of the stage indices is from REPLAY_STAGE_INDEX_LIST))<br>REPLAY_STAGE_LAST_SCORE_LIST (List of score indices at the end of each stage (the order of the stage indices is from REPLAY_STAGE_INDEX_LIST))<br>REPLAY_COMMENT (comment set arbitrarily using SetReplayInfo)"
                },
                {
                    "fname": "SetReplayInfo",
                    "args": ["infotype : const", "data : free"],
                    "returnv": "",
                    "description": "Sets replay information",
                    "notes": "Only possible infotype is REPLAY_COMMENT, which takes a string.<br>It is recommended to use delimited strings to save information that can be retrieved with SplitString."
                },
                {
                    "fname": "SaveReplay",
                    "args": ["replayfileindex : number (int)"],
                    "returnv": "",
                    "description": "Saves a replay to the specified replay index.",
                    "notes": ""
                }
            ]
        }
    ]
};
