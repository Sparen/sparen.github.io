//Extendible Danmaku Simulator & Game Engine
//Version 2.1 (Attempt at multiple canvases per page)
//Copyright Andrew Fan 2018

//GameEngine.js contains all components that are shared across the system.
//GameEngine.js requires perfect and appropriate parameter usage since ES6's Default Parameters are not yet supported by all browsers.
//It requires a module to handle the player
//It requires a script to handle the plural

"use strict"; //Sanity check

//REMINDERS
//JavaScript Objects are MUTABLE (pass by reference) - var x = y will result in both x and y pointing to the same object.
//However, function parameters are passed by value
//Constructors should start in Uppercase. Variables should be in camelCase.
//Variables and Functions are hoisted (they can be used before they are declared)

//Global variables (use sparingly)
var startedplurals = []; //array containing IDs of all canvases that have already initiated.

//Version number
var VERSION_NUMBER_DANMAKANVAS = "Danmakanvas v2.1.3";

/* *****
 * void createNewGame(string canvasid)
 * -- Creates a new game
 * Param: canvasid - the string containing the id of the canvas to use. 
 * *****/
function createNewGame(canvasid, title) {
    console.log("createNewGame(): Now Running");
    var newgame = new NewGame(canvasid, title);
    newgame.startGame(canvasid);
}

//Constructor for the object
function NewGame(canvasid, title) {
    this.player = {}; //player
    this.bullets = []; //array containing all bullets
    this.pluralcontroller = {}; //Current plural running
    this.canvas = document.getElementById(canvasid);
    this.context = this.canvas.getContext("2d");
    this.frameNo = 0;

    /* *****
     * void startGame(string canvasid)
     * -- Runs the canvas on the given canvas ID
     * Param: canvasid - the string containing the id of the canvas to use. 
     * *****/
    this.startGame = function (canvasid) {
        console.log("startGame(): Running on canvas with id " + canvasid);
        this.resetGame(); //reset the current canvas by purging all elements

        //Obtain the plural controller
        this.pluralcontroller = getPluralController(this, canvasid);
        if (this.pluralcontroller === null) {
            console.log("startGame(): Returned pluralcontroller was null");
        }

        //If the interval has not been started yet, begin it.
        if (!contains(startedplurals, canvasid)) {
            console.log("startGame(): Canvas " + canvasid + " has not been started yet. Initializing this.interval for the canvasid");
            startedplurals.push(canvasid);
            this.setupInterval(20);
        }
    };

    this.setupInterval = function(updatefreq) {
        setInterval(this.update_main, updatefreq, this); //in milliseconds. Runs update every 20 millis (50 FPS). canvasid is passed to update_main
    };

    //Clear all bullets, etc. Every existing update must terminate.
    this.resetGame = function () {
        this.player = {};
        this.bullets = [];
        if (this.pluralcontroller !== undefined && this.pluralcontroller !== null && !isEmpty(this.pluralcontroller)) {
            this.pluralcontroller.remove(); //Forcefully garbage collect all ongoing singles and plurals
        }
        this.pluralcontroller = {};
    };

    this.clearCanvas = function () {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    };

    //Main update loop. Calls the update loops of all objects and handles collision.
    //Since it's called in a setInterval, it is necessary to pass the current instance of the game object in as a parameter
    this.update_main = function (currobj) {
        currobj.clearCanvas(); //Begin by clearing everything
        currobj.frameNo += 1; //Increment the master counter

        currobj.pluralcontroller.update();

        var objtoremove = [];
        var i;
        for (i = 0; i < currobj.bullets.length; i += 1) {
            currobj.bullets[i].update();
            if (!isinbounds(currobj.bullets[i], currobj.canvas.width, currobj.canvas.height)) {
                objtoremove.push(i);
            } else if (currobj.bullets[i].vanishtime > 0 && currobj.bullets[i].existtime > currobj.bullets[i].vanishtime) {
                objtoremove.push(i);
            }
        }
        for (i = objtoremove.length - 1; i >= 0; i -= 1) {
            currobj.bullets.splice(objtoremove[i], 1);
        }

        currobj.draw_main(canvasid); //draw updated things 

        currobj.context.font = "12px Arial";
        currobj.context.fillText(VERSION_NUMBER_DANMAKANVAS + " ~ " + title, 4, 12);
        currobj.context.fillText("Bullet Count: " + (currobj.bullets.length).toString(), 4, currobj.canvas.height - 4);
    };

    //Main draw loop. Handles render order.
    this.draw_main = function (canvasid) {
        var i;
        for (i = 0; i < this.bullets.length; i += 1) {
            this.bullets[i].draw();
        }
    };

    //If the current counter (updated every x milliseconds) / n % 1 === 0, then return true. Else return false.
    //Ex: If frameNo incremeents every 20 ms (50 FPS), then if n = 2, everyinterval will return true every 40 ms (every 25 frames). 
    //If n = 4, true every 80 ms (every 12.5 frames) 
    this.everyinterval = function (n) {
        if ((this.frameNo / n) % 1 === 0) {
            return true;
        }
        return false;
    };
}

/* **************** Object Constructors **************** */

/* *****
 * obj EnemyShot(float x, float y, float speed, float angle, float accel, float maxspeed, hex/rgb color, float brad, float srad, float swid, int hitbox)
 * -- Constructor for an enemy shot object.
 * Param: x, y - the location of the center of the bullet
 * Param: speed, angle - the speed and angle (radians) of the bullet
 * Param: accel, maxspeed - the acceleration and maximum speed of the bullet
 * Param: color - the HTML representation of the bullet's outer stroke color.
 * Param: brad, srad - the radius of the bullet graphic and the radius of the bullet stroke
 * Param: swid - the stroke radius of the bullet graphic
 * Param: hitbox - the radius of the bullet hitbox
 * *****/
function EnemyShot(x, y, speed, angle, accel, maxspeed, color, brad, srad, swid, hitbox, vanishtime, currgame) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.angle = angle;
    this.accel = accel;
    this.maxspeed = maxspeed;
    this.hitbox = hitbox;
    this.createtime = currgame.frameNo;
    this.existtime = 0;
    this.vanishtime = vanishtime;
    this.update = function () {
        this.x += this.speed*Math.cos(this.angle);
        this.y += this.speed*Math.sin(this.angle);
        if (this.accel != 0) { //Only if accelerating
            this.speed = Math.min(this.maxspeed, this.speed + this.accel);
        }
        this.existtime += 1;
    };
    this.draw = function () {
        var ctx = currgame.context; //game window
        ctx.fillStyle = "#FFFFFF";
        ctx.beginPath();
        ctx.arc(this.x, this.y, brad, 0, 2*Math.PI);
        ctx.fill();
        ctx.strokeStyle = color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, srad, 0, 2*Math.PI);
        ctx.lineWidth = swid;
        ctx.stroke();
    };
    return this;
}

/* *****
 * obj Player(float x, float y)
 * -- Constructor for an extendible player object.
 * Param: x, y - the location of the center of the player
 * *****/
function Player(x, y) {
    this.x = x;
    this.y = y;
    //update and draw are defined in the player javascript library
}

/* **************** Accessory Functions **************** */

function isinbounds(obj, wd, ht) {
    if (obj.x < -32 || obj.x > wd + 32 || obj.y < -32 || obj.y > ht + 32) {
        return false;
    }
    return true;
}

function toRadians(i) {
    return i * (Math.PI/180);
}

function contains(a, obj) {
    var i = a.length;
    while (i--) {
       if (a[i] === obj) {
           return true;
       }
    }
    return false;
}

function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}