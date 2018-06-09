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
            ]
        },
        {
            "catname": "Custom Script Functions",
            "fxns": [
            ]
        },
        {
            "catname": "Package Functions",
            "fxns": [
            ]
        }
    ]
};
