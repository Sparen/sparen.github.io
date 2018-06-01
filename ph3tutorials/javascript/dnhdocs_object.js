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
                    "description": "Allows or prevents the object associated with objID from writing in the Z-buffer.",
                    "notes": ""
                },
                {
                    "fname": "ObjRender_SetZTest",
                    "args": ["objID : number (Object ID)", "ztest : bool"],
                    "returnv": "",
                    "description": "Sets whether or not the object associated with objID uses the Z-buffer.",
                    "notes": ""
                },
                {
                    "fname": "ObjRender_SetFogEnable",
                    "args": ["objID : number (Object ID)", "fogenable : bool"],
                    "returnv": "",
                    "description": "Allows or prevents the object associated with objID from being affected by the fog.",
                    "notes": "Defaults to true."
                },
                {
                    "fname": "ObjRender_SetPermitCamera",
                    "args": ["objID : number (Object ID)", "permitcamera : bool"],
                    "returnv": "",
                    "description": "Determines whether the object associated with objID is affected by the 2D camera.",
                    "notes": "If set to false, the object will not be affected by the camera regardless of render priority."
                }
            ]
        },
        {
            "catname": "Primitive Object Functions",
            "fxns": [
                {
                    "fname": "ObjPrim_Create",
                    "args": ["objtype : const"],
                    "returnv": "object ID of new primitive object : number (Object ID)",
                    "description": "Creates a Primitive object and returns its ID.",
                    "notes": "Object types are:<br>OBJ_PRIMITIVE_2D (primitive (triangle) in the 2D space)<br>OBJ_SPRITE_2D (rectangle in the 2D space (usable by the ObjSprite2D_ functions))<br>OBJ_SPRITE_LIST_2D (list of rectangles in the 2D space (usable by the ObjSpriteList2D_ functions))<br>OBJ_PRIMITIVE_3D (primitive (triangle) in the 3D space)<br>OBJ_SPRITE_3D (rectangle in the 3D space (usable by the ObjSprite3D_ functions))"
                },
                {
                    "fname": "ObjPrim_SetPrimitiveType",
                    "args": ["objID : number (Object ID)", "primitivetype : bool"],
                    "returnv": "",
                    "description": "Sets the vertex layout for the object associated with objID.",
                    "notes": "Primitive Types are:<br>PRIMITIVE_TRIANGLELIST, PRIMITIVE_TRIANGLESTRIP, PRIMITIVE_TRIANGLEFAN, PRIMITIVE_LINELIST (undocumented), PRIMITIVE_LINESTRIP (undocumented), and PRIMITIVE_POINT_LIST (undocumented)."
                },
                {
                    "fname": "ObjPrim_SetVertexCount",
                    "args": ["objID : number (Object ID)", "vertexcount : number (int)"],
                    "returnv": "",
                    "description": "Sets the number of vertices the object associated with objID contains.",
                    "notes": ""
                },
                {
                    "fname": "ObjPrim_GetVertexCount",
                    "args": ["objID : number (Object ID)"],
                    "returnv": "the number of vertices the object associated with objID contains : number (int)",
                    "description": "Returns the number of vertices the object associated with objID contains.",
                    "notes": ""
                },
                {
                    "fname": "ObjPrim_SetTexture",
                    "args": ["objID : number (Object ID)", "texpath : string (path)"],
                    "returnv": "",
                    "description": "Sets the specified texture on the object associated with objID.",
                    "notes": "Loads the texture file if it has not already been loaded."
                },
                {
                    "fname": "ObjPrim_SetVertexPosition",
                    "args": ["objID : number (Object ID)", "vertexindex : number (int)", "xcoord : number", "ycoord : number", "zcoord : number"],
                    "returnv": "",
                    "description": "Sets the position of the specified vertex for the object associated with objID.",
                    "notes": ""
                },
                {
                    "fname": "ObjPrim_GetVertexPosition",
                    "args": ["objID : number (Object ID)", "vertexindex : number (int)"],
                    "returnv": "coordinates of the specified vertex : number []",
                    "description": "Returns the position of the specified vertex in an array",
                    "notes": "Return format is [x, y, z]."
                },
                {
                    "fname": "ObjPrim_SetVertexUV",
                    "args": ["objID : number (Object ID)", "vertexindex : number (int)", "texturex : number", "texturey : number"],
                    "returnv": "",
                    "description": "Sets the UV coordinates for the specified vertex for the object associated with objID.",
                    "notes": "The value for the coordinates must be in the range (0.0-1.0).<br>For instance, if you want a vertex to be at the center-top of a 512*512 texture, you have to set x to 0.5 and y to 1.0.<br>As it may be troublesome to convert pixels into a 0.0-1.0 value, ObjPrim_SetVertexUVT is recommended."
                },
                {
                    "fname": "ObjPrim_SetVertexUVT",
                    "args": ["objID : number (Object ID)", "vertexindex : number (int)", "texturex : number", "texturey : number"],
                    "returnv": "",
                    "description": "Sets the UV coordinates for the specified vertex for the object associated with objID.",
                    "notes": "You must set the object's texture using ObjPrim_SetTexture beforehand."
                },
                {
                    "fname": "ObjPrim_SetVertexColor",
                    "args": ["objID : number (Object ID)", "vertexindex : number (int)", "red : number", "green : number", "blue : number"],
                    "returnv": "",
                    "description": "Sets the rgb color of the specified vertex on a 0-255 scale.",
                    "notes": ""
                },
                {
                    "fname": "ObjPrim_SetVertexAlpha",
                    "args": ["objID : number (Object ID)", "vertexindex : number (int)", "alpha : number"],
                    "returnv": "",
                    "description": "Sets the alpha of the specified vertex on a 0-255 scale.",
                    "notes": ""
                }
            ]
        },
        {
            "catname": "2D Sprite Object Functions",
            "fxns": [
                {
                    "fname": "ObjSprite2D_SetSourceRect",
                    "args": ["objID : number (Object ID)", "texleftcoord : number", "textopcoord : number", "texrightcoord : number", "texbottomcoord : number"],
                    "returnv": "",
                    "description": "Sets the texture rectangle for the sprite. This is the rectangle on the original texture from which the sprite will be drawn.",
                    "notes": ""
                },
                {
                    "fname": "ObjSprite2D_SetDestRect",
                    "args": ["objID : number (Object ID)", "left : number", "top : number", "right : number", "bottom : number"],
                    "returnv": "",
                    "description": "Sets the drawing rectangle for the sprite. This is the rectangle where the sprite will be drawn.",
                    "notes": ""
                },
                {
                    "fname": "ObjSprite2D_SetDestCenter",
                    "args": ["objID : number (Object ID)"],
                    "returnv": "",
                    "description": "Sets the drawing rectangle for the sprite by mapping the center of the source rectangle to (0, 0).",
                    "notes": "For instance, if the rectangle set with ObjSprite2D_SetSourceRect is (24, 32, 48, 46) (which is 24 wide and 14 high), the destination rectangle becomes (-12, -7, 12, 7)."
                }
            ]
        },
        {
            "catname": "2D Sprite List Object Functions",
            "fxns": [
                {
                    "fname": "ObjSpriteList2D_SetSourceRect",
                    "args": ["objID : number (Object ID)", "texleftcoord : number", "textopcoord : number", "texrightcoord : number", "texbottomcoord : number"],
                    "returnv": "",
                    "description": "Sets the texture rectangle for the next sprite to be added. This is the rectangle on the original texture from which the sprite will be drawn.",
                    "notes": ""
                },
                {
                    "fname": "ObjSpriteList2D_SetDestRect",
                    "args": ["objID : number (Object ID)", "left : number", "top : number", "right : number", "bottom : number"],
                    "returnv": "",
                    "description": "Sets the drawing rectangle for the next sprite to be added. This is the rectangle where the sprite will be drawn.",
                    "notes": ""
                },
                {
                    "fname": "ObjSpriteList2D_SetDestCenter",
                    "args": ["objID : number (Object ID)"],
                    "returnv": "",
                    "description": "Sets the drawing rectangle for the next sprite to be added by mapping the center of the source rectangle to (0, 0).",
                    "notes": "For instance, if the rectangle set with ObjSprite2D_SetSourceRect is (24, 32, 48, 46) (which is 24 wide and 14 high), the destination rectangle becomes (-12, -7, 12, 7)."
                },
                {
                    "fname": "ObjSpriteList2D_AddVertex",
                    "args": ["objID : number (Object ID)"],
                    "returnv": "",
                    "description": "Adds a sprite vertex to the specified object; the current sprite is finalized and added to the list to be drawn.",
                    "notes": "After using this function, using functions to modify the 2D sprite list object will target the next sprite to be added."
                },
                {
                    "fname": "ObjSpriteList2D_CloseVertex",
                    "args": ["objID : number (Object ID)"],
                    "returnv": "",
                    "description": "Finalizes the object by preventing more sprites from being added to the list to be drawn.",
                    "notes": "After using this function, using ObjRender_ functions to transform coordinates (e.g. position, angle, scale, etc) will affect all added sprites in the 2D sprite list as a group."
                },
                {
                    "fname": "ObjSpriteList2D_ClearVertexCount",
                    "args": ["objID : number (Object ID)"],
                    "returnv": "",
                    "description": "Clears the sprite vertices for the specified object; removes all of the sprites previously added.",
                    "notes": ""
                }
            ]
        },
        {
            "catname": "3D Sprite Object Functions",
            "fxns": [
                {
                    "fname": "ObjSprite3D_SetSourceRect",
                    "args": ["objID : number (Object ID)", "texleftcoord : number", "textopcoord : number", "texrightcoord : number", "texbottomcoord : number"],
                    "returnv": "",
                    "description": "Sets the texture rectangle for the sprite. This is the rectangle on the original texture from which the sprite will be drawn.",
                    "notes": ""
                },
                {
                    "fname": "ObjSprite3D_SetDestRect",
                    "args": ["objID : number (Object ID)", "left : number", "top : number", "right : number", "bottom : number"],
                    "returnv": "",
                    "description": "Sets the drawing rectangle for the sprite. This is the rectangle where the sprite will be drawn.",
                    "notes": ""
                },
                {
                    "fname": "ObjSprite3D_SetSourceDestRect",
                    "args": ["objID : number (Object ID)"],
                    "returnv": "",
                    "description": "Sets the texture rectangle for the sprite, and maps the center of the rectangle to the destination coordinates (0, 0).",
                    "notes": ""
                },
                {
                    "fname": "ObjSprite3D_SetBillboard",
                    "args": ["objID : number (Object ID)", "billboard : bool"],
                    "returnv": "",
                    "description": "Sets the billboard toggle for the sprite.",
                    "notes": "If set to true, the object associated with objID will always be facing the camera."
                }
            ]
        },
        {
            "catname": "Mesh Object Functions",
            "fxns": [
                {
                    "fname": "ObjMesh_Create",
                    "args": [],
                    "returnv": "object ID of new mesh object : number (Object ID)",
                    "description": "Creates a 3D mesh object and returns its ID.",
                    "notes": ""
                },
                {
                    "fname": "ObjMesh_Load",
                    "args": ["objID : number (Object ID)", "meshpath : string (path)"],
                    "returnv": "",
                    "description": "Loads a 3D mesh file into the mesh object associated with objID.",
                    "notes": "Supported Mesh file types are either .mqo (Metasequoia) or .elem (Elfreina)."
                },
                {
                    "fname": "ObjMesh_SetColor",
                    "args": ["objID : number (Object ID)", "red : number (int)", "green : number (int)", "blue : number (int)"],
                    "returnv": "",
                    "description": "Sets the color of the mesh object associated with objID using RGB on a 0-255 scale.",
                    "notes": ""
                },
                {
                    "fname": "ObjMesh_SetAlpha",
                    "args": ["objID : number (Object ID)", "alpha : number (int)"],
                    "returnv": "",
                    "description": "Sets the alpha of the mesh object associated with objID on a 0-255 scale.",
                    "notes": ""
                },
                {
                    "fname": "ObjMesh_SetAnimation",
                    "args": ["objID : number (Object ID)", "animname : string", "animframe : number"],
                    "returnv": "",
                    "description": "Sets the animation of the mesh object associated with objID.<br>The animation frame of the specified animation name is drawn.",
                    "notes": ""
                },
                {
                    "fname": "ObjMesh_SetCoordinate2D",
                    "args": ["objID : number (Object ID)", "2dcoord : bool"],
                    "returnv": "",
                    "description": "When set to true, allows the mesh object associated with objID to be positioned using 2D coordinates.",
                    "notes": ""
                }
            ]
        }
    ]
};
