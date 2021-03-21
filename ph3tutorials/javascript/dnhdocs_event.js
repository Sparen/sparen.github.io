// Documentation for Touhou Danmakufu ph3, in a really shitty JavaScript / JSON file

/* Types: 
 * real (for numbers) will be noted as 'number' or 'Object ID'. numbers that are specifically floating points will be referred to as 'float' in types
 * char (for strings) will be noted as 'char' or 'string'
 */

var dnhph3docs_event = {
    "categories": [
        {
            "catname": "Danmakufu Events",
            "fxns": [
                {
                    "fname": "EV_REQUEST_LIFE",
                    "args": ["life : number"],
                    "returnv": "",
                    "description": "Sets the Boss Life.",
                    "notes": "Only used in enemy boss scripts (Single).",
                    "isEvent": true
                },
                {
                    "fname": "EV_REQUEST_TIMER",
                    "args": ["timer : number"],
                    "returnv": "",
                    "description": "Sets the Boss Timer in seconds.",
                    "notes": "Only used in enemy boss scripts (Single).",
                    "isEvent": true
                },
                {
                    "fname": "EV_REQUEST_IS_LAST_SPELL",
                    "args": ["value : bool"],
                    "returnv": "",
                    "description": "Sets if the attack is a Last Spell.",
                    "notes": "Only used in enemy boss scripts (Single).",
                    "isEvent": true
                },
                {
                    "fname": "EV_REQUEST_IS_DURABLE_SPELL",
                    "args": ["value : bool"],
                    "returnv": "",
                    "description": "Sets if the attack is a Survival Spell.",
                    "notes": "Only used in enemy boss scripts (Single).",
                    "isEvent": true
                },
                {
                    "fname": "EV_REQUEST_SPELL_SCORE",
                    "args": ["score : number"],
                    "returnv": "",
                    "description": "Sets the max Spellcard Bonus.",
                    "notes": "Only used in enemy boss scripts (Single).<br>Defaults to 0 if no value is set.",
                    "isEvent": true
                },
                {
                    "fname": "EV_TIMEOUT",
                    "args": [],
                    "returnv": "",
                    "description": "Enemy attack timeout notification.",
                    "notes": "All active scripts are notified.",
                    "isEvent": true
                },
                {
                    "fname": "EV_START_BOSS_SPELL",
                    "args": [],
                    "returnv": "",
                    "description": "Boss spell notification.",
                    "notes": "All active scripts are notified.",
                    "isEvent": true
                },
                {
                    "fname": "EV_GAIN_SPELL",
                    "args": [],
                    "returnv": "",
                    "description": "Spell capture notification.",
                    "notes": "All active scripts are notified.",
                    "isEvent": true
                },
                {
                    "fname": "EV_START_BOSS_STEP",
                    "args": [],
                    "returnv": "",
                    "description": "Boss step start notification (start of execution of a Single).",
                    "notes": "All active scripts are notified.",
                    "isEvent": true
                },
                {
                    "fname": "EV_END_BOSS_STEP",
                    "args": [],
                    "returnv": "",
                    "description": "Boss step start notification (end of execution of a Single).",
                    "notes": "All active scripts are notified.",
                    "isEvent": true
                },
                {
                    "fname": "EV_PLAYER_SHOOTDOWN",
                    "args": [],
                    "returnv": "",
                    "description": "Player death notification.",
                    "notes": "All active scripts are notified.<br>Deathbombs do not trigger this event. See EV_HIT.",
                    "isEvent": true
                },
                {
                    "fname": "EV_PLAYER_SPELL",
                    "args": [],
                    "returnv": "",
                    "description": "Player bomb notification.",
                    "notes": "All active scripts are notified.",
                    "isEvent": true
                },
                {
                    "fname": "EV_PLAYER_REBIRTH",
                    "args": [],
                    "returnv": "",
                    "description": "Player rebirth notification.",
                    "notes": "All active scripts are notified.",
                    "isEvent": true
                },
                {
                    "fname": "EV_PAUSE_ENTER",
                    "args": [],
                    "returnv": "",
                    "description": "Pause start notification.",
                    "notes": "All active scripts are notified.<br>Assumes that audio is shut off during event.<br><strong>WARNING: DO NOT USE RANDOM NUMBERS OR CREATE ENEMY/BULLET OBJECTS DURING THIS EVENT. DOING SO WILL DESYNC REPLAYS.</strong>",
                    "isEvent": true
                },
                {
                    "fname": "EV_PAUSE_LEAVE",
                    "args": [],
                    "returnv": "",
                    "description": "Pause end notification.",
                    "notes": "All active scripts are notified.<br>Assumes that audio is shut off during event.<br><strong>WARNING: DO NOT USE RANDOM NUMBERS OR CREATE ENEMY/BULLET OBJECTS DURING THIS EVENT. DOING SO WILL DESYNC REPLAYS.</strong>",
                    "isEvent": true
                },
                {
                    "fname": "EV_REQUEST_SPELL",
                    "args": ["enabled : bool"],
                    "returnv": "",
                    "description": "Player bomb request notification. Sets if bombing is enabled.",
                    "notes": "Emitted by player scripts (Player).",
                    "isEvent": true
                },
                {
                    "fname": "EV_GRAZE",
                    "args": [],
                    "returnv": "GetEventArgument(0) - Number of bullets grazed in previous frame : number (int), GetEventArgument(1) - List of bullets grazed in previous frame : number (Object ID) [], GetEventArgument(2) - List of coordinates of bullets grazed in previous frame : number [][]",
                    "description": "Player graze notification.",
                    "notes": "Emitted by player scripts (Player).<br>Example: GetEventArgument(2)[index] -> [x, y]",
                    "isEvent": true
                },
                {
                    "fname": "EV_HIT",
                    "args": [],
                    "returnv": "GetEventArgument(0) - Object ID of bullet that hit the player : number (Object ID)",
                    "description": "Player hit notification.",
                    "notes": "Emitted by player scripts (Player).<br>Used for playing sound effects on death.<br>WARNING: GetEventArgument always returns 0 and is therefore useless",
                    "isEvent": true
                },
                {
                    "fname": "EV_GET_ITEM",
                    "args": [],
                    "returnv": "GetEventArgument(0) - which item was collected : const, GetEventArgument(1) - Object ID of collected item : number (Object ID)",
                    "description": "Item collection notification.",
                    "notes": "Emitted by player scripts (Player).<br>Constants include ITEM_POWER, ITEM_POWER_S, ITEM_SPELL, ITEM_SPELL_S, ITEM_POINT, and ITEM_POINT_S.",
                    "isEvent": true
                },
                {
                    "fname": "EV_DELETE_SHOT_IMMEDIATE",
                    "args": [],
                    "returnv": "GetEventArgument(0) - Object ID of deleted bullet : number (Object ID), GetEventArgument(1) - Coordinates of deleted bullet : number []",
                    "description": "Enemy bullet deletion notification.",
                    "notes": "Emitted by custom bullet scripts.<br>Activated by <code>SetShotDeleteEventEnable (EV_DELETE_SHOT_IMMEDIATE, true)</code>",
                    "isEvent": true
                },
                {
                    "fname": "EV_DELETE_SHOT_TO_ITEM",
                    "args": [],
                    "returnv": "GetEventArgument(0) - Object ID of deleted bullet : number (Object ID), GetEventArgument(1) - Coordinates of deleted bullet : number []",
                    "description": "Enemy bullet itemization notification.",
                    "notes": "Emitted by custom bullet scripts.",
                    "isEvent": true
                },
                {
                    "fname": "EV_DELETE_SHOT_FADE",
                    "args": [],
                    "returnv": "GetEventArgument(0) - Object ID of deleted bullet : number (Object ID), GetEventArgument(1) - Coordinates of deleted bullet : number []",
                    "description": "Enemy bullet fade deletion notification.",
                    "notes": "Emitted by custom bullet scripts.<br>Activated by <code>SetShotDeleteEventEnable (EV_DELETE_SHOT_FADE, true)</code>",
                    "isEvent": true
                }
            ]
        }
    ]
};
