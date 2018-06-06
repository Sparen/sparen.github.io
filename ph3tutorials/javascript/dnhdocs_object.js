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
        },
        {
            "catname": "Text Object Functions",
            "fxns": [
                {
                    "fname": "ObjText_Create",
                    "args": [],
                    "returnv": "object ID of new text object : number (Object ID)",
                    "description": "Creates a text object and returns its ID.",
                    "notes": ""
                },
                {
                    "fname": "ObjText_SetText",
                    "args": ["objID : number (Object ID)", "text : string"],
                    "returnv": "",
                    "description": "Assigns the provided text string to the text object associated with objID.",
                    "notes": ""
                },
                {
                    "fname": "ObjText_SetFontType",
                    "args": ["objID : number (Object ID)", "fontname : string"],
                    "returnv": "",
                    "description": "Sets the font associated with the fontname to the text object associated with objID.",
                    "notes": ""
                },
                {
                    "fname": "ObjText_SetFontSize",
                    "args": ["objID : number (Object ID)", "fontsize : number (int)"],
                    "returnv": "",
                    "description": "Sets the size of the font for the text object associated with objID.",
                    "notes": ""
                },
                {
                    "fname": "ObjText_SetFontBold",
                    "args": ["objID : number (Object ID)", "bold : bool"],
                    "returnv": "",
                    "description": "If set to true, the text will be displayed in bold characters.",
                    "notes": ""
                },
                {
                    "fname": "ObjText_SetFontColorTop",
                    "args": ["objID : number (Object ID)", "red : number (int)", "green : number (int)", "blue : number (int)"],
                    "returnv": "",
                    "description": "Sets the top color of the text object associated with objID, on a 0-255 scale.",
                    "notes": "Danmakufu will form a gradient between the colors set with ObjText_SetFontColorTop and ObjText_SetFontColorBottom."
                },
                {
                    "fname": "ObjText_SetFontColorBottom",
                    "args": ["objID : number (Object ID)", "red : number (int)", "green : number (int)", "blue : number (int)"],
                    "returnv": "",
                    "description": "Sets the bottom color of the text object associated with objID, on a 0-255 scale.",
                    "notes": "Danmakufu will form a gradient between the colors set with ObjText_SetFontColorTop and ObjText_SetFontColorBottom."
                },
                {
                    "fname": "ObjText_SetFontBorderWidth",
                    "args": ["objID : number (Object ID)", "borderwidth : number (int)"],
                    "returnv": "",
                    "description": "Sets the width of the font border for the text object associated with objID.",
                    "notes": ""
                },
                {
                    "fname": "ObjText_SetFontBorderType",
                    "args": ["objID : number (Object ID)", "bordertype : const"],
                    "returnv": "",
                    "description": "Sets the type of the font border for the text object associated with objID.",
                    "notes": "Border types are:<br>BORDER_NONE (no border)<br>BORDER_FULL (full border)<br>BORDER_SHADOW (shadow at bottom right of text)"
                },
                {
                    "fname": "ObjText_SetFontBorderColor",
                    "args": ["objID : number (Object ID)", "red : number (int)", "green : number (int)", "blue : number (int)"],
                    "returnv": "",
                    "description": "Sets the color of the font border of the text object associated with objID, on a 0-255 scale.",
                    "notes": ""
                },
                {
                    "fname": "ObjText_SetMaxWidth",
                    "args": ["objID : number (Object ID)", "maxwidth : number"],
                    "returnv": "",
                    "description": "Sets the maximum width of the text object associated with objID.",
                    "notes": "The text will automatically create a new line whenever needed.<br>Note that font width changes depending on the rendering system, and that fonts will render differently on different platforms."
                },
                {
                    "fname": "ObjText_SetMaxHeight",
                    "args": ["objID : number (Object ID)", "maxheight : number"],
                    "returnv": "",
                    "description": "Sets the maximum height of the text object associated with objID.",
                    "notes": "Any part of the text exceeding this height will not be drawn."
                },
                {
                    "fname": "ObjText_SetLinePitch",
                    "args": ["objID : number (Object ID)", "linepitch : number"],
                    "returnv": "",
                    "description": "Sets the line pitch (space between lines) of the text object associated with objID.",
                    "notes": ""
                },
                {
                    "fname": "ObjText_SetSidePitch",
                    "args": ["objID : number (Object ID)", "sidepitch : number"],
                    "returnv": "",
                    "description": "Sets the side pitch (space between characters) of the text object associated with objID.",
                    "notes": ""
                },
                {
                    "fname": "ObjText_SetTransCenter",
                    "args": ["objID : number (Object ID)", "xcoord : number", "ycoord : number"],
                    "returnv": "",
                    "description": "Sets the given coordinates as the transformation center of the text object associated with objID.",
                    "notes": ""
                },
                {
                    "fname": "ObjText_SetAutoTransCenter",
                    "args": ["objID : number (Object ID)", "autocenter : bool"],
                    "returnv": "",
                    "description": "When true, sets the center of the text object associated with objID as its transformation center.",
                    "notes": "Default is true."
                },
                {
                    "fname": "ObjText_SetHorizontalAlignment",
                    "args": ["objID : number (Object ID)", "alignment : const"],
                    "returnv": "",
                    "description": "Sets the alignment of the text object associated with objID.",
                    "notes": "Defaults to ALIGNMENT_LEFT.<br>Horizontal Alignments are:<br>ALIGNMENT_LEFT, ALIGNMENT_CENTER, and ALIGNMENT_RIGHT.<br>To use center or right aligned text, you have to set the maximum width using ObjText_SetMaxWidth (in order to know where the right border is)."
                },
                {
                    "fname": "ObjText_SetSyntacticAnalysis",
                    "args": ["objID : number (Object ID)", "enabled : bool"],
                    "returnv": "",
                    "description": "Allows or prevents checking for the existence of bracket tags (such as line break or ruby text) within the text for the text object associated with objID.",
                    "notes": "Defaults to true"
                },
                {
                    "fname": "ObjText_GetTextLength",
                    "args": ["objID : number (Object ID)"],
                    "returnv": "text length : number",
                    "description": "Returns the length of the specified text object associated with objID.",
                    "notes": "When using Japanese characters, a half-width character counts as 1 and a full-width character counts as 2 characters."
                },
                {
                    "fname": "ObjText_GetTextLengthCU",
                    "args": ["objID : number (Object ID)"],
                    "returnv": "text length : number",
                    "description": "Returns the length of the specified text object associated with objID.",
                    "notes": "Newlines and ruby text are not counted when using this function, unlike with ObjText_GetTextLength.<br>When using Japanese characters, a half-width character counts as 1 and a full-width character counts as 2 characters."
                },
                {
                    "fname": "ObjText_GetTextLengthCUL",
                    "args": ["objID : number (Object ID)"],
                    "returnv": "array of text lengths : number []",
                    "description": "Returns an array of the lengths of each line of the specified text object associated with objID.",
                    "notes": "Newlines and ruby text are not counted when using this function.<br>When using Japanese characters, a half-width character counts as 1 and a full-width character counts as 2 characters."
                },
                {
                    "fname": "ObjText_GetTotalWidth",
                    "args": ["objID : number (Object ID)"],
                    "returnv": "width of rendered text : number",
                    "description": "Returns the overall width of all lines of the text object associated with objID.",
                    "notes": "Platform dependent."
                },
                {
                    "fname": "ObjText_GetTotalHeight",
                    "args": ["objID : number (Object ID)"],
                    "returnv": "height of rendered text : number",
                    "description": "Returns the combined height of all lines of the text object associated with objID.",
                    "notes": "This function's behavior appears to depend only on the number of newlines, as opposed to the number of lines actually displayed with word wrapping taken into account."
                }
            ]
        },
        {
            "catname": "Shader Object Functions",
            "fxns": [
                {
                    "fname": "ObjShader_Create",
                    "args": [],
                    "returnv": "object ID of new shader object : number (Object ID)",
                    "description": "Creates a shader object and returns its ID.",
                    "notes": ""
                },
                {
                    "fname": "ObjShader_SetShaderF",
                    "args": ["objID : number (Object ID)", "shaderfile : string (path)"],
                    "returnv": "true if successly set; false otherwise : bool",
                    "description": "Sets the path to the HLSL source for the shader object associated with objID.",
                    "notes": ""
                },
                {
                    "fname": "ObjShader_SetShaderO",
                    "args": ["objID : number (Object ID)", "shaderID : number (Object ID)"],
                    "returnv": "true if successly set; false otherwise : bool",
                    "description": "Applies the shader linked to the shader object associated with shaderID to the render object associated with objID.",
                    "notes": "Does not work with text objects, but you can render one to a render target."
                },
                {
                    "fname": "ObjShader_ResetShader",
                    "args": ["objID : number (Object ID)"],
                    "returnv": "",
                    "description": "Terminates application of all shaders to the render object associated with objID.",
                    "notes": ""
                },
                {
                    "fname": "ObjShader_SetTechnique",
                    "args": ["objID : number (Object ID)", "technique : string"],
                    "returnv": "",
                    "description": "Sets the technique that you want to run on the shader linked to the shader object associated with shaderID.",
                    "notes": ""
                },
                {
                    "fname": "ObjShader_SetVector",
                    "args": ["objID : number (Object ID)", "paramID : string", "float4x : number", "float4y : number", "float4z : number", "float4w : number"],
                    "returnv": "",
                    "description": "Sets a float4 parameter in the shader linked to the shader object associated with shaderID.",
                    "notes": ""
                },
                {
                    "fname": "ObjShader_SetFloat",
                    "args": ["objID : number (Object ID)", "paramID : string", "floatval : number"],
                    "returnv": "",
                    "description": "Sets a float parameter in the shader linked to the shader object associated with shaderID.",
                    "notes": ""
                },
                {
                    "fname": "ObjShader_SetFloatArray",
                    "args": ["objID : number (Object ID)", "paramID : string", "floatarr : number []"],
                    "returnv": "",
                    "description": "Sets a float array parameter in the shader linked to the shader object associated with shaderID.",
                    "notes": ""
                },
                {
                    "fname": "ObjShader_SetTexture",
                    "args": ["objID : number (Object ID)", "paramID : string", "filepath : string (path)"],
                    "returnv": "",
                    "description": "Sets a texture parameter, using the path to the appropriate image, in the shader linked to the shader object associated with shaderID.",
                    "notes": "You can call multiple textures."
                }
            ]
        },
        {
            "catname": "Sound Object Functions",
            "fxns": [
                {
                    "fname": "ObjSound_Create",
                    "args": [],
                    "returnv": "object ID of new sound object : number (Object ID)",
                    "description": "Creates a sound object and returns its ID.",
                    "notes": ""
                },
                {
                    "fname": "ObjSound_Load",
                    "args": ["objID : number (Object ID)", "filepath : string (path)"],
                    "returnv": "",
                    "description": "Loads the specified sound file and associates it with the sound object associated with objID.",
                    "notes": ""
                },
                {
                    "fname": "ObjSound_Play",
                    "args": ["objID : number (Object ID)"],
                    "returnv": "",
                    "description": "Plays the sound file associated with the sound object associated with objID.",
                    "notes": ""
                },
                {
                    "fname": "ObjSound_Stop",
                    "args": ["objID : number (Object ID)"],
                    "returnv": "",
                    "description": "Stops the sound file associated with the sound object associated with objID.",
                    "notes": ""
                },
                {
                    "fname": "ObjSound_SetVolumeRate",
                    "args": ["objID : number (Object ID)", "volume : number"],
                    "returnv": "",
                    "description": "Sets the volume of the sound object associated with objID, on a 0-100 scale.",
                    "notes": ""
                },
                {
                    "fname": "ObjSound_SetPanRate",
                    "args": ["objID : number (Object ID)", "panvolume : number"],
                    "returnv": "",
                    "description": "Sets the pan volume of the sound object associated with objID, on a -100-100 scale.",
                    "notes": "0 is neutral, -100 is left-side only, 100 is right-side only."
                },
                {
                    "fname": "ObjSound_SetFade",
                    "args": ["objID : number (Object ID)", "fade : number"],
                    "returnv": "",
                    "description": "Sets the fade time of the sound object associated with objID.",
                    "notes": "Fade value is how much the volume will decrease per second."
                },
                {
                    "fname": "ObjSound_SetLoopEnable",
                    "args": ["objID : number (Object ID)", "enable : bool"],
                    "returnv": "",
                    "description": "Sets whether the sound object associated with objID will loop.",
                    "notes": ""
                },
                {
                    "fname": "ObjSound_SetLoopTime",
                    "args": ["objID : number (Object ID)", "loopstart : number", "loopend : number"],
                    "returnv": "",
                    "description": "Sets the timing of the loop of the sound object associated with objID, in seconds.",
                    "notes": "Sound Object will play to end of track or loopend, whichever comes first, then loop back to loopstart."
                },
                {
                    "fname": "ObjSound_SetLoopSampleCount",
                    "args": ["objID : number (Object ID)", "loopsamplestart : number", "loopsampleend : number"],
                    "returnv": "",
                    "description": "Sets the timing of the loop of the sound object associated with objID, using the sample count.",
                    "notes": "Sound Object will play to end of track or loopsampleend, whichever comes first, then loop back to loopsamplestart."
                },
                {
                    "fname": "ObjSound_SetRestartEnable",
                    "args": ["objID : number (Object ID)", "enable : bool"],
                    "returnv": "",
                    "description": "When set to true, allows the sound object associated with objID to continue where it left off instead of restarting every time ObjSound_Play is called.",
                    "notes": ""
                },
                {
                    "fname": "ObjSound_SetSoundDivision",
                    "args": ["objID : number (Object ID)", "soundtype : const"],
                    "returnv": "",
                    "description": "Specifies whether the sound object associated with objID is a BGM or Sound Effect.",
                    "notes": "Values for soundtype are SOUND_BGM and SOUND_SE."
                },
                {
                    "fname": "ObjSound_IsPlaying",
                    "args": ["objID : number (Object ID)"],
                    "returnv": "true if currently playing; false otherwise : bool",
                    "description": "Returns true if the sound object associated with objID is playing its associated sound file.",
                    "notes": ""
                },
                {
                    "fname": "ObjSound_GetVolumeRate",
                    "args": ["objID : number (Object ID)"],
                    "returnv": "volume rate of sound object associated with objID : number",
                    "description": "Returns the volume of the sound object associated with objID, on a 0-100 scale.",
                    "notes": ""
                }
            ]
        },
        {
            "catname": "File Object Functions",
            "fxns": [
                {
                    "fname": "ObjFile_Create",
                    "args": ["objtype : const"],
                    "returnv": "object ID of new file object : number (Object ID)",
                    "description": "Creates a file object and returns its ID.",
                    "notes": "File Object types are OBJ_FILE_TEXT for text files and OBJ_FILE_BINARY for binary files."
                },
                {
                    "fname": "ObjFile_Open",
                    "args": ["objID : number (Object ID)", "filepath : string (path)"],
                    "returnv": "true on success; false otherwise : bool",
                    "description": "Opens a file for reading with the specified file path and binds the file object associated with objID to the opened file.",
                    "notes": "If this function is used for another file or the object is deleted, the file specified in the filepath is closed."
                },
                {
                    "fname": "ObjFile_OpenNW",
                    "args": ["objID : number (Object ID)", "filepath : string (path)"],
                    "returnv": "true on success; false otherwise : bool",
                    "description": "Opens a file for reading and writing with the specified file path and binds the file object associated with objID to the opened file.",
                    "notes": "If this function is used for another file or the object is deleted, the file specified in the filepath is closed.<br>If the directory of the specified path does not exist, it will be created.<br>The only paths that can be specified are those under the th_dnh.exe directory."
                },
                {
                    "fname": "ObjFile_Store",
                    "args": ["objID : number (Object ID)"],
                    "returnv": "",
                    "description": "Saves a file previously opened with ObjFile_OpenNW.",
                    "notes": "Must be called once after writing the data."
                },
                {
                    "fname": "ObjFile_GetSize",
                    "args": ["objID : number (Object ID)"],
                    "returnv": "file size of specified file object : number",
                    "description": "Returns the file size of specified file object associated with objID.",
                    "notes": ""
                }
            ]
        },
        {
            "catname": "Text File Object Functions",
            "fxns": [
                {
                    "fname": "ObjFileT_GetLineCount",
                    "args": ["objID : number (Object ID)"],
                    "returnv": "number of lines in the text file : number",
                    "description": "Returns the number of lines in the text file bound to the file object associated with objID.",
                    "notes": ""
                },
                {
                    "fname": "ObjFileT_GetLineText",
                    "args": ["objID : number (Object ID)", "lineindex : number (int)"],
                    "returnv": "contents of specified line : string",
                    "description": "Returns the character string of the specified line in the text file.",
                    "notes": "Lines are 1-indexed rather than 0-indexed."
                },
                {
                    "fname": "ObjFileT_AddLine",
                    "args": ["objID : number (Object ID)", "linetoadd : string"],
                    "returnv": "",
                    "description": "Prepare to write the specified linetoadd character string as one line at the end of the text file.",
                    "notes": "Must use ObjFile_Store to actually write to the file on disk; this function only writes to the file object."
                },
                {
                    "fname": "ObjFileT_ClearLine",
                    "args": ["objID : number (Object ID)"],
                    "returnv": "",
                    "description": "Clear the line added by ObjFileT_AddLine.",
                    "notes": "TODO: Does this clear the last line added or ALL lines added but not yet written to disk?"
                },
                {
                    "fname": "ObjFileT_SplitLineText",
                    "args": ["objID : number (Object ID)", "lineindex : number (int)", "delimiter : string"],
                    "returnv": "specified line in file delimited by delimiter : string []",
                    "description": "Returns a character string array obtained by dividing the specified line of the text file by the specified delimiter character.",
                    "notes": "Lines are 1-indexed rather than 0-indexed."
                }
            ]
        },
        {
            "catname": "Binary File Object Functions",
            "fxns": [
                {
                    "fname": "ObjFileB_SetByteOrder",
                    "args": ["objID : number (Object ID)", "byteorder : const"],
                    "returnv": "",
                    "description": "Sets the Byte Order of the file bound to the file object associated with objID.",
                    "notes": "Defaults to ENDIAN_LITTLE.<br>Possible byteorder values are ENDIAN_LITTLE for Little Endian and ENDIAN_BIG for Big Endian."
                },
                {
                    "fname": "ObjFileB_SetCharacterCode",
                    "args": ["objID : number (Object ID)", "charcode : const"],
                    "returnv": "",
                    "description": "Sets the Character Code of the file bound to the file object associated with objID.",
                    "notes": "Necessary for reading file contents with ObjFileB_ReadString.<br>Defaults to CODE_ACP.<br>Possible character codes supported by Danmakufu are:<br>CODE_ACP (ANSI/Shift-JIS), CODE_UTF8 (UTF-8), CODE_UTF16LE (UTF-16 Little Endian), and CODE_UTF16BE (UTF-16 Big Endian)."
                },
                {
                    "fname": "ObjFileB_GetPointer",
                    "args": ["objID : number (Object ID)"],
                    "returnv": "position of current file pointer : number (int)",
                    "description": "Returns the position of the current file pointer.",
                    "notes": ""
                },
                {
                    "fname": "ObjFileB_GetSeek",
                    "args": ["objID : number (Object ID)", "filepointer : number (int)"],
                    "returnv": "",
                    "description": "Sets the position of the current file pointer.",
                    "notes": ""
                },
                {
                    "fname": "ObjFileB_ReadBoolean",
                    "args": ["objID : number (Object ID)"],
                    "returnv": "next byte : bool",
                    "description": "Reads a byte from file and returns a Boolean value.",
                    "notes": "The file pointer advances one byte."
                },
                {
                    "fname": "ObjFileB_ReadByte",
                    "args": ["objID : number (Object ID)"],
                    "returnv": "next byte : number (int)",
                    "description": "Reads a byte from file and returns a Byte value (1-byte integer).",
                    "notes": "The file pointer advances one byte."
                },
                {
                    "fname": "ObjFileB_ReadShort",
                    "args": ["objID : number (Object ID)"],
                    "returnv": "next two bytes : number (int)",
                    "description": "Reads two bytes from file and returns a Short value (2-byte integer).",
                    "notes": "The file pointer advances two bytes."
                },
                {
                    "fname": "ObjFileB_ReadInteger",
                    "args": ["objID : number (Object ID)"],
                    "returnv": "next four bytes : number (int)",
                    "description": "Reads four bytes from file and returns an Integer value (4-byte integer).",
                    "notes": "The file pointer advances four bytes."
                },
                {
                    "fname": "ObjFileB_ReadLong",
                    "args": ["objID : number (Object ID)"],
                    "returnv": "next eight bytes : number (int)",
                    "description": "Reads eight bytes from file and returns a Long value (8-byte integer).",
                    "notes": "The file pointer advances eight bytes."
                },
                {
                    "fname": "ObjFileB_ReadFloat",
                    "args": ["objID : number (Object ID)"],
                    "returnv": "next four bytes : number (float)",
                    "description": "Reads four bytes from file and returns an Float value (4-byte floating point).",
                    "notes": "The file pointer advances four bytes."
                },
                {
                    "fname": "ObjFileB_ReadDouble",
                    "args": ["objID : number (Object ID)"],
                    "returnv": "next eight bytes : number (float)",
                    "description": "Reads eight bytes from file and returns a Double value (8-byte floating point).",
                    "notes": "The file pointer advances eight bytes."
                },
                {
                    "fname": "ObjFileB_ReadString",
                    "args": ["objID : number (Object ID)", "bytestoread : number (int)"],
                    "returnv": "next bytestoread bytes : string",
                    "description": "Given a specified number of bytes to read, reads a string from file and returns the string.",
                    "notes": "The file pointer advances by the specified number of bytestoread.<br>Due to a bug, this function will never return any characters outside of Shift-JIS."
                }
            ]
        },
        {
            "catname": "Move Object Functions",
            "fxns": [
                {
                    "fname": "ObjMove_SetX",
                    "args": ["objID : number (Object ID)", "xcoord : number"],
                    "returnv": "",
                    "description": "Sets the x coordinate of the object associated with objID.",
                    "notes": ""
                },
                {
                    "fname": "ObjMove_SetY",
                    "args": ["objID : number (Object ID)", "ycoord : number"],
                    "returnv": "",
                    "description": "Sets the y coordinate of the object associated with objID.",
                    "notes": ""
                },
                {
                    "fname": "ObjMove_SetPosition",
                    "args": ["objID : number (Object ID)", "xcoord : number", "ycoord : number"],
                    "returnv": "",
                    "description": "Sets the x and y coordinates of the object associated with objID.",
                    "notes": ""
                },
                {
                    "fname": "ObjMove_SetSpeed",
                    "args": ["objID : number (Object ID)", "speed : number"],
                    "returnv": "",
                    "description": "Sets the speed of the object associated with objID.",
                    "notes": ""
                },
                {
                    "fname": "ObjMove_SetAngle",
                    "args": ["objID : number (Object ID)", "angle : number (degrees)"],
                    "returnv": "",
                    "description": "Sets the angle of the object associated with objID.",
                    "notes": ""
                },
                {
                    "fname": "ObjMove_SetAcceleration",
                    "args": ["objID : number (Object ID)", "accel : number"],
                    "returnv": "",
                    "description": "Sets the acceleration of the object associated with objID.",
                    "notes": ""
                },
                {
                    "fname": "ObjMove_SetMaxSpeed",
                    "args": ["objID : number (Object ID)", "maxspeed : number"],
                    "returnv": "",
                    "description": "Sets the maximum/minimum speed the object associated with objID will approach using the ObjMove_SetAcceleration function.",
                    "notes": ""
                },
                {
                    "fname": "ObjMove_SetAngularVelocity",
                    "args": ["objID : number (Object ID)", "wvel : number"],
                    "returnv": "",
                    "description": "Sets the angular velocity (change in movement angle per frame) of the object associated with objID.",
                    "notes": ""
                },
                {
                    "fname": "ObjMove_SetDestAtSpeed",
                    "args": ["objID : number (Object ID)", "xcoord : number", "ycoord : number", "speed : number"],
                    "returnv": "",
                    "description": "Moves the object associated with objID towards the given coordinates at the speed specified.",
                    "notes": ""
                },
                {
                    "fname": "ObjMove_SetDestAtFrame",
                    "args": ["objID : number (Object ID)", "xcoord : number", "ycoord : number", "frames : number (int)"],
                    "returnv": "",
                    "description": "Moves the object associated with objID towards the given coordinates in the number of frames specified.",
                    "notes": ""
                },
                {
                    "fname": "ObjMove_SetDestAtWeight",
                    "args": ["objID : number (Object ID)", "xcoord : number", "ycoord : number", "weight : number", "maxspeed : number"],
                    "returnv": "",
                    "description": "Moves the object associated with objID towards the given coordinates. It will slow down near the end of the movement based on the weight specified.",
                    "notes": ""
                },
                {
                    "fname": "ObjMove_AddPatternA1",
                    "args": ["objID : number (Object ID)", "frame : number (int)", "speed : number", "angle : number (degrees)"],
                    "returnv": "",
                    "description": "After the specified number of frames, changes the speed and angle of the object associated with objID.",
                    "notes": "NO_CHANGE can be used to preserve the original speed or angle."
                },
                {
                    "fname": "ObjMove_AddPatternA2",
                    "args": ["objID : number (Object ID)", "frame : number (int)", "speed : number", "angle : number (degrees)", "accel : number", "wvel : number", "maxspeed : number"],
                    "returnv": "",
                    "description": "After the specified number of frames, changes the speed, angle, acceleration, angular velocity, and maximum/minimum speed of the object associated with objID.",
                    "notes": "NO_CHANGE can be used to preserve the original speed, angle, acceleration, angular velocity, or maximum/minimum speed."
                },
                {
                    "fname": "ObjMove_AddPatternA3",
                    "args": ["objID : number (Object ID)", "frame : number (int)", "speed : number", "angle : number (degrees)", "accel : number", "wvel : number", "maxspeed : number", "graphic : number (int)"],
                    "returnv": "",
                    "description": "After the specified number of frames, changes the speed, angle, acceleration, angular velocity, maximum/minimum speed, and bullet graphic of the object associated with objID.",
                    "notes": "NO_CHANGE can be used to preserve the original speed, angle, acceleration, angular velocity, maximum/minimum speed, or bullet graphic."
                },
                {
                    "fname": "ObjMove_AddPatternA4",
                    "args": ["objID : number (Object ID)", "frame : number (int)", "speed : number", "angle : number (degrees)", "accel : number", "wvel : number", "maxspeed : number", "targetID : number (Object ID)", "graphic : number (int)"],
                    "returnv": "",
                    "description": "After the specified number of frames, changes the speed, angle, acceleration, angular velocity, maximum/minimum speed, and bullet graphic of the object associated with objID, with angle being based off of the angle from the object to the object associated with targetID.",
                    "notes": "NO_CHANGE can be used to preserve the original speed, angle, acceleration, angular velocity, maximum/minimum speed, or bullet graphic.<br>The angle parameter is relative to the angle from the object to the target. For example, if GetPlayerObjectID is used as the target, an angle of 0 will cause the object to aim for the player."
                },
                {
                    "fname": "ObjMove_AddPatternB1",
                    "args": ["objID : number (Object ID)", "frame : number (int)", "xspeed : number", "yspeed : number"],
                    "returnv": "",
                    "description": "After the specified number of frames, changes the x and y speeds of the object associated with objID.",
                    "notes": "NO_CHANGE can be used to preserve the original x or y speeds."
                },
                {
                    "fname": "ObjMove_AddPatternB2",
                    "args": ["objID : number (Object ID)", "frame : number (int)", "xspeed : number", "yspeed : number", "xaccel : number", "yaccel : number", "maxxspeed : number", "maxyspeed : number"],
                    "returnv": "",
                    "description": "After the specified number of frames, changes the x and y speeds, accelerations, and maximum/minimum speeds of the object associated with objID.",
                    "notes": "NO_CHANGE can be used to preserve the original x or y speeds, accelerations, and maximum/minimum speeds."
                },
                {
                    "fname": "ObjMove_AddPatternB3",
                    "args": ["objID : number (Object ID)", "frame : number (int)", "xspeed : number", "yspeed : number", "xaccel : number", "yaccel : number", "maxxspeed : number", "maxyspeed : number", "graphic : number (int)"],
                    "returnv": "",
                    "description": "After the specified number of frames, changes the x and y speeds, accelerations, maximum/minimum speeds, and bullet graphic of the object associated with objID.",
                    "notes": "NO_CHANGE can be used to preserve the original x or y speeds, accelerations, maximum/minimum speeds, and bullet graphic."
                },
                {
                    "fname": "ObjMove_GetX",
                    "args": ["objID : number (Object ID)"],
                    "returnv": "x coordinate of the object associated with objID : number",
                    "description": "Returns the x coordinate of the object associated with objID.",
                    "notes": ""
                },
                {
                    "fname": "ObjMove_GetY",
                    "args": ["objID : number (Object ID)"],
                    "returnv": "y coordinate of the object associated with objID : number",
                    "description": "Returns the y coordinate of the object associated with objID.",
                    "notes": ""
                },
                {
                    "fname": "ObjMove_GetSpeed",
                    "args": ["objID : number (Object ID)"],
                    "returnv": "speed of the object associated with objID : number",
                    "description": "Returns the speed of the object associated with objID.",
                    "notes": ""
                },
                {
                    "fname": "ObjMove_GetAngle",
                    "args": ["objID : number (Object ID)"],
                    "returnv": "angle of the object associated with objID : number (degrees)",
                    "description": "Returns the angle of the object associated with objID.",
                    "notes": ""
                }
            ]
        },
        {
            "catname": "Enemy Object Functions",
            "fxns": [
                {
                    "fname": "ObjEnemy_Create",
                    "args": ["objtype : const"],
                    "returnv": "object ID of new enemy object : number (Object ID)",
                    "description": "Creates an enemy object and returns its ID.",
                    "notes": "Enemy Object types are OBJ_ENEMY for standard enemies and OBJ_ENEMY_BOSS for boss enemies.<br>In order to draw the enemy object and have it listed as an existing enemy, you have to register it using ObjEnemy_Regist.<br>If you want to create a boss enemy object, you have to create a boss scene object first."
                },
                {
                    "fname": "ObjEnemy_Regist",
                    "args": ["objID : number (Object ID)"],
                    "returnv": "",
                    "description": "Activates the enemy object associated with objID.",
                    "notes": "Required to utilize created enemy objects."
                },
                {
                    "fname": "ObjEnemy_GetInfo",
                    "args": ["objID : number (Object ID)", "infotype : const"],
                    "returnv": "results of query : number",
                    "description": "Returns data on the enemy object associated with objID based on the query.",
                    "notes": "Possible infotypes are:<br>INFO_LIFE - Returns the life points of the enemy<br>INFO_DAMAGE_RATE_SHOT - Returns the damage rate percentage of normal player shots set by ObjEnemy_SetDamageRate on a 0 to 100 scale<br>INFO_DAMAGE_RATE_SPELL - Returns the damage rate percentage of player bombs set by ObjEnemy_SetDamageRate on a 0 to 100 scale<br>INFO_SHOT_HIT_COUNT - Returns the amount of times the enemy was hit by player bullets in the previous frame"
                },
                {
                    "fname": "ObjEnemy_SetLife",
                    "args": ["objID : number (Object ID)", "life : number"],
                    "returnv": "",
                    "description": "Sets the life points of the enemy object associated with objID.",
                    "notes": ""
                },
                {
                    "fname": "ObjEnemy_AddLife",
                    "args": ["objID : number (Object ID)", "life : number"],
                    "returnv": "",
                    "description": "Adds the provided life points to the life points of the enemy object associated with objID.",
                    "notes": ""
                },
                {
                    "fname": "ObjEnemy_SetDamageRate",
                    "args": ["objID : number (Object ID)", "shotrate : number", "bombrate : number"],
                    "returnv": "",
                    "description": "Sets the damage rate of player attacks against the enemy object associated with objID.",
                    "notes": "Setting to 0 will cause the enemy to take no damage<br>Defaults to 100 (100%).<br>Values above 100 are possible.<br>Values below 0 are also possible, but may cause the boss health to overflow."
                },
                {
                    "fname": "ObjEnemy_SetIntersectionCircleToShot",
                    "args": ["objID : number (Object ID)", "xcoord : number", "ycoord : number", "radius : number"],
                    "returnv": "",
                    "description": "Sets the position and radius of the player shot collision hitbox of the enemy object associated with objID.",
                    "notes": "Any attack from the player colliding with the circle will damage the enemy."
                },
                {
                    "fname": "ObjEnemy_SetIntersectionCircleToPlayer",
                    "args": ["objID : number (Object ID)", "xcoord : number", "ycoord : number", "radius : number"],
                    "returnv": "",
                    "description": "Sets the position and radius of the player collision hitbox of the enemy object associated with objID.",
                    "notes": "Any collision with the circle will kill the character."
                }
            ]
        }
    ]
};
