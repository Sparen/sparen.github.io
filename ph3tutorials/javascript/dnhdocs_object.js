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
                    "description": "Deletes object associated with objID.",
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
                    "description": "Sets visibility of object associated with objID.",
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
        },
        {
            "catname": "Render Object Functions",
            "fxns": [
                {
                    "fname": "ObjRender_SetX",
                    "args": ["objID : number (Object ID)", "xcoord : number"],
                    "returnv": "",
                    "description": "Sets the x coordinate of the object associated with objID.",
                    "notes": ""
                },
                {
                    "fname": "ObjRender_SetY",
                    "args": ["objID : number (Object ID)", "ycoord : number"],
                    "returnv": "",
                    "description": "Sets the y coordinate of the object associated with objID.",
                    "notes": ""
                },
                {
                    "fname": "ObjRender_SetZ",
                    "args": ["objID : number (Object ID)", "zcoord : number"],
                    "returnv": "",
                    "description": "Sets the z coordinate of the object associated with objID.",
                    "notes": ""
                },
                {
                    "fname": "ObjRender_SetPosition",
                    "args": ["objID : number (Object ID)", "xcoord : number", "ycoord : number", "zcoord : number"],
                    "returnv": "",
                    "description": "Sets the x, y, and z coordinates of the object associated with objID.",
                    "notes": ""
                },
                {
                    "fname": "ObjRender_SetAngleX",
                    "args": ["objID : number (Object ID)", "xangle : number (degrees)"],
                    "returnv": "",
                    "description": "Sets the x angle of the object associated with objID.",
                    "notes": ""
                },
                {
                    "fname": "ObjRender_SetAngleY",
                    "args": ["objID : number (Object ID)", "yangle : number (degrees)"],
                    "returnv": "",
                    "description": "Sets the y angle of the object associated with objID.",
                    "notes": ""
                },
                {
                    "fname": "ObjRender_SetAngleZ",
                    "args": ["objID : number (Object ID)", "zangle : number (degrees)"],
                    "returnv": "",
                    "description": "Sets the z angle of the object associated with objID.",
                    "notes": ""
                },
                {
                    "fname": "ObjRender_SetAngleXYZ",
                    "args": ["objID : number (Object ID)", "xangle : number (degrees)", "yangle : number (degrees)", "zangle : number (degrees)"],
                    "returnv": "",
                    "description": "Sets the x, y, and z angles of the object associated with objID.",
                    "notes": ""
                },
                {
                    "fname": "ObjRender_SetScaleX",
                    "args": ["objID : number (Object ID)", "xscale : number"],
                    "returnv": "",
                    "description": "Sets the x scale of the object associated with objID.",
                    "notes": ""
                },
                {
                    "fname": "ObjRender_SetScaleY",
                    "args": ["objID : number (Object ID)", "zscale : number"],
                    "returnv": "",
                    "description": "Sets the y scale of the object associated with objID.",
                    "notes": ""
                },
                {
                    "fname": "ObjRender_SetScaleZ",
                    "args": ["objID : number (Object ID)", "zscale : number"],
                    "returnv": "",
                    "description": "Sets the z scale of the object associated with objID.",
                    "notes": ""
                },
                {
                    "fname": "ObjRender_SetScaleXYZ",
                    "args": ["objID : number (Object ID)", "xscale : number", "yscale : number", "zscale : number"],
                    "returnv": "",
                    "description": "Sets the x, y, and z scales of the object associated with objID.",
                    "notes": ""
                },
                {
                    "fname": "ObjRender_SetColor",
                    "args": ["objID : number (Object ID)", "red : number (int)", "green : number (int)", "blue : number (int)"],
                    "returnv": "",
                    "description": "Sets the color of the object associated with objID using RGB on a 0-255 scale.",
                    "notes": ""
                },
                {
                    "fname": "ObjRender_SetColorHSV",
                    "args": ["objID : number (Object ID)", "hue : number", "saturation : number", "value : number"],
                    "returnv": "",
                    "description": "Sets the Hue (0-359 scale), Saturation (0-255 scale), and Value (0-255 scale) of the object associated with objID.",
                    "notes": ""
                },
                {
                    "fname": "ObjRender_SetAlpha",
                    "args": ["objID : number (Object ID)", "alpha : number"],
                    "returnv": "",
                    "description": "Sets the alpha value of the object associated with objID.",
                    "notes": "A value of 0 will make the object invisible.<br>A value of 255 will give the object full opacity.<br>This function has no effect on an object using BLEND_ADD_RGB - use BLEND_ADD_ARGB instead."
                },
                {
                    "fname": "ObjRender_SetBlendType",
                    "args": ["objID : number (Object ID)", "blendtype : const"],
                    "returnv": "",
                    "description": "Sets the blend type for the specified object.",
                    "notes": "Available blend types are:<br>BLEND_ALPHA - Overlays the image on top of the background, using the image's alpha values to determine transparency of individual pixels.<br>BLEND_ADD_RGB - Adds the image's pixel values to those of the background, resulting in a brighter image.<br>BLEND_MULTIPLY - Multiplies the image's pixel values with those of the background, as a ratio from 0 to 255.<br>BLEND_SUBTRACT - Subtracts the image's pixel values from those of the background, resulting in a darker image.<br>BLEND_ADD_ARGB - Adds the image's pixel values to those of the background, using the image's alpha values to determine transparency of individual pixels.<br>BLEND_INV_DESTRGB - Inverts the color of the background in relation to the intensity of the image's pixel values. Also known as exclusion blending.<br>BLEND_SHADOW (undocumented) - Inverts the image's pixel values, then applies multiply-blend with the background."
                },
                {
                    "fname": "ObjRender_GetX",
                    "args": ["objID : number (Object ID)"],
                    "returnv": "x coordinate of the object associated with objID : number",
                    "description": "Returns the x coordinate of the object associated with objID.",
                    "notes": ""
                },
                {
                    "fname": "ObjRender_GetY",
                    "args": ["objID : number (Object ID)"],
                    "returnv": "y coordinate of the object associated with objID : number",
                    "description": "Returns the y coordinate of the object associated with objID.",
                    "notes": ""
                },
                {
                    "fname": "ObjRender_GetZ",
                    "args": ["objID : number (Object ID)"],
                    "returnv": "z coordinate of the object associated with objID : number",
                    "description": "Returns the z coordinate of the object associated with objID.",
                    "notes": ""
                },
                {
                    "fname": "ObjRender_GetAngleX",
                    "args": ["objID : number (Object ID)"],
                    "returnv": "x angle of the object associated with objID : number",
                    "description": "Returns the x angle of the object associated with objID.",
                    "notes": ""
                },
                {
                    "fname": "ObjRender_GetAngleY",
                    "args": ["objID : number (Object ID)"],
                    "returnv": "y angle of the object associated with objID : number",
                    "description": "Returns the y angle of the object associated with objID.",
                    "notes": ""
                },
                {
                    "fname": "ObjRender_GetAngleZ",
                    "args": ["objID : number (Object ID)"],
                    "returnv": "z angle of the object associated with objID : number",
                    "description": "Returns the z angle of the object associated with objID.",
                    "notes": ""
                },
                {
                    "fname": "ObjRender_GetScaleX",
                    "args": ["objID : number (Object ID)"],
                    "returnv": "x scale of the object associated with objID : number",
                    "description": "Returns the x scale of the object associated with objID.",
                    "notes": ""
                },
                {
                    "fname": "ObjRender_GetScaleY",
                    "args": ["objID : number (Object ID)"],
                    "returnv": "y scale of the object associated with objID : number",
                    "description": "Returns the y scale of the object associated with objID.",
                    "notes": ""
                },
                {
                    "fname": "ObjRender_GetScaleZ",
                    "args": ["objID : number (Object ID)"],
                    "returnv": "z scale of the object associated with objID : number",
                    "description": "Returns the z scale of the object associated with objID.",
                    "notes": ""
                },
                {
                    "fname": "ObjRender_GetBlendType",
                    "args": ["objID : number (Object ID)"],
                    "returnv": "blend type of the object associated with objID : number",
                    "description": "Returns the blend type of the object associated with objID.",
                    "notes": "Available blend types are:<br>BLEND_ALPHA, BLEND_ADD_RGB, BLEND_MULTIPLY, BLEND_SUBTRACT, BLEND_ADD_ARGB, BLEND_INV_DESTRGB, and BLEND_SHADOW (undocumented)"
                },
                {
                    "fname": "ObjRender_SetZWrite",
                    "args": ["objID : number (Object ID)", "zwrite : bool"],
                    "returnv": "",
                    "description": "Allows or prevents the object from writing in the Z-buffer.",
                    "notes": ""
                },
                {
                    "fname": "ObjRender_SetZTest",
                    "args": ["objID : number (Object ID)", "ztest : bool"],
                    "returnv": "",
                    "description": "Sets whether or not the object uses the Z-buffer.",
                    "notes": ""
                },
                {
                    "fname": "ObjRender_SetFogEnable",
                    "args": ["objID : number (Object ID)", "fogenable : bool"],
                    "returnv": "",
                    "description": "Allows or prevents the object from being affected by the fog.",
                    "notes": "Defaults to true."
                },
                {
                    "fname": "ObjRender_SetPermitCamera",
                    "args": ["objID : number (Object ID)", "permitcamera : bool"],
                    "returnv": "",
                    "description": "Determines whether the object is affected by the 2D camera.",
                    "notes": "If set to false, the object will not be affected by the camera regardless of render priority."
                }
            ]
        }
    ]
};
