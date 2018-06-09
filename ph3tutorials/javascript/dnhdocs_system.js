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
            ]
        }
    ]
};
