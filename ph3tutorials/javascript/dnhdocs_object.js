// Documentation for Touhou Danmakufu ph3, in a really shitty JavaScript / JSON file

/* Types: 
 * real (for numbers) will be noted as 'number' or 'Object ID'. numbers that are specifically floating points will be referred to as 'float' in types
 * char (for strings) will be noted as 'char' or 'string'
 */

var dnhph3docs_object = {
    "categories": [
        {
            "catname": "Object Functions",
            "fxns": [
                {
                    "fname": "Obj_Delete",
                    "args": ["objID : number (Object ID)"],
                    "returnv": "",
                    "description": "Deletes object associated with provided object ID.",
                    "notes": ""
                },
                {
                    "fname": "Obj_IsDeleted",
                    "args": ["objID : number (Object ID)"],
                    "returnv": "true if object associated with objID has been deleted, false otherwise : bool",
                    "description": "Returns true if the object ID is not mapped to an object instance.",
                    "notes": ""
                },
                {
                    "fname": "Obj_SetVisible",
                    "args": ["objID : number (Object ID)", "visible : bool"],
                    "returnv": "",
                    "description": "Sets visibility of specified object.",
                    "notes": "If visible is set to false, the object will not be drawn."
                },
                {
                    "fname": "Obj_IsVisible",
                    "args": ["objID : number (Object ID)"],
                    "returnv": "true if object associated with objID is visible; false otherwise : bool",
                    "description": "Returns true if the specified object is visible.",
                    "notes": ""
                },
                {
                    "fname": "Obj_SetRenderPriority",
                    "args": ["objID : number (Object ID)", "rpriority : number"],
                    "returnv": "",
                    "description": "Sets the object's render priority on a 0.0-1.0 scale.",
                    "notes": ""
                },
                {
                    "fname": "Obj_SetRenderPriorityI",
                    "args": ["objID : number (Object ID)", "rpriority : number (int)"],
                    "returnv": "",
                    "description": "Sets the object's render priority on a 0-100 scale.",
                    "notes": ""
                },
                {
                    "fname": "Obj_GetRenderPriority",
                    "args": ["objID : number (Object ID)"],
                    "returnv": "render priority of object associated with objID : number",
                    "description": "Returns the object's render priority as an integer on a 0.0-1.0 scale.",
                    "notes": ""
                },
                {
                    "fname": "Obj_GetRenderPriorityI",
                    "args": ["objID : number (Object ID)"],
                    "returnv": "render priority of object associated with objID : number (int)",
                    "description": "Returns the object's render priority as an integer on a 0-100 scale.",
                    "notes": ""
                },
                {
                    "fname": "Obj_GetValue",
                    "args": ["objID : number (Object ID)", "key : string"],
                    "returnv": "value for associated key in object's values : free",
                    "description": "Returns the value associated with the given key for the given object, previously set by Obj_SetValue.",
                    "notes": "If the key-value pair does not exist or was deleted, attempting to access it will crash the program."
                },
                {
                    "fname": "Obj_GetValueD",
                    "args": ["objID : number (Object ID)", "key : string", "default : free"],
                    "returnv": "value for associated key in object's values : free",
                    "description": "Returns the value associated with the given key for the given object, previously set by Obj_SetValue.",
                    "notes": "If the key-value pair does not exist or was deleted, returns the provided default instead."
                },
                {
                    "fname": "Obj_SetValue",
                    "args": ["objID : number (Object ID)", "key : string", "value : free"],
                    "returnv": "",
                    "description": "For the given object, maps the given key to the given value.",
                    "notes": "The value can be returned by using Obj_GetValue with the corresponding key."
                },
                {
                    "fname": "Obj_DeleteValue",
                    "args": ["objID : number (Object ID)", "key : string"],
                    "returnv": "",
                    "description": "Deletes the key-value pair previously set by Obj_SetValue.",
                    "notes": ""
                },
                {
                    "fname": "Obj_IsValueExists",
                    "args": ["objID : number (Object ID)", "key : string"],
                    "returnv": "true if for the given object, the given is mapped; false otherwise : bool",
                    "description": "Returns true if the object has a key-value pair for the given key.",
                    "notes": ""
                },
                {
                    "fname": "Obj_GetType",
                    "args": ["objID : number (Object ID)"],
                    "returnv": "object type : const",
                    "description": "Retrieves the type of object.",
                    "notes": "Return type is one of the following:<br>OBJ_PRIMITIVE_2D, OBJ_SPRITE_2D, OBJ_SPRITE_LIST_2D, OBJ_PRIMITIVE_3D, OBJ_SPRITE_3D, OBJ_MESH, OBJ_TEXT, OBJ_SOUND, OBJ_FILE_TEXT, OBJ_FILE_BINARY, OBJ_PLAYER, OBJ_SPELL, OBJ_ENEMY, OBJ_ENEMY_BOSS_SCENE, OBJ_SHOT, OBJ_LOOSE_LASER, OBJ_STRAIGHT_LASER, OBJ_CURVE_LASER, or OBJ_ITEM."
                }
            ]
        }
    ]
};
