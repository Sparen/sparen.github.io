//Extendible Danmaku Simulator & Game Engine
//Version 2.0 (IE less garbage than original)
//Copyright Andrew Fan 2017

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

var player; //player
var bullets = []; //array containing all bullets
var pluralcontroller; //Current plural running
var startedplurals = []; //array containing IDs of all canvases that have already initiated.

/* *****
 * void startGame(string canvasid)
 * -- Runs the canvas on the given canvas ID
 * Param: canvasid - the string containing the id of the canvas to use. Multiple canvases on the same page are not supported.
 * *****/
function startGame(canvasid) {
    console.log("startGame(): Running on canvas with id " + canvasid);
    myGameArea.start(canvasid); //set up canvas and interval, etc.
    pluralcontroller = getPluralController(canvasid);
}

var myGameArea = {
    start: function (canvasid) {
        resetGame();
        this.canvas = document.getElementById(canvasid);
        this.context = this.canvas.getContext("2d");
        this.frameNo = 0;
        if (!contains(startedplurals, canvasid)) {
            console.log("myGameArea.start(): Canvas " + canvasid + "has not been started yet. Initializing this.interval for the canvasid");
            startedplurals.push(canvasid);
            this.interval = setInterval(update_main, 20, canvasid); //in milliseconds. Runs update every 20 millis (50 FPS). canvasid is passed to update_main
        }
    },
    clear: function () {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
};

//Clear all bullets, etc. Every existing update must terminate.
function resetGame() {
    player = {};
    bullets = [];
    if (pluralcontroller !== undefined) {
        pluralcontroller.remove(); //Forcefully garbage collect all ongoing singles and plurals
    }
    pluralcontroller = {};
}

//Main update loop. Calls the update loops of all objects and handles collision.
function update_main(canvasid) {
    myGameArea.clear(); //Begin by clearing everything
    myGameArea.frameNo += 1; //Increment the master counter

    pluralcontroller.update();

    var objtoremove = [];
    var i;
    for (i = 0; i < bullets.length; i += 1) {
        bullets[i].update();
        if (!isinbounds(bullets[i])) {
            objtoremove.push(i);
        } else if (bullets[i].vanishtime > 0 && bullets[i].existtime > bullets[i].vanishtime) {
            objtoremove.push(i);
        }
    }
    for (i = objtoremove.length - 1; i >= 0; i -= 1) {
        bullets.splice(objtoremove[i], 1);
    }

    draw_main(canvasid); //draw updated things 
}

//Main draw loop. Handles render order.
function draw_main(canvasid) {
    var i;
    for (i = 0; i < bullets.length; i += 1) {
        bullets[i].draw();
    }
    myGameArea.context.font = "12px Arial";
    myGameArea.context.fillText("Danmakanvas v2.0 ~ Bullet Count: " + (bullets.length).toString(), 4, 12);
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
function EnemyShot(x, y, speed, angle, accel, maxspeed, color, brad, srad, swid, hitbox, vanishtime) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.angle = angle;
    this.accel = accel;
    this.maxspeed = maxspeed;
    this.hitbox = hitbox;
    this.createtime = myGameArea.frameNo;
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
        var ctx = myGameArea.context; //game window
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

function isinbounds(obj) {
    if (obj.x < -32 || obj.x > 672 || obj.y < -32 || obj.y > 512) {
        return false;
    }
    return true;
}

//If the current counter (updated every x milliseconds) / n % 1 === 0, then return true. Else return false.
//Ex: If frameNo incremeents every 20 ms (50 FPS), then if n = 2, everyinterval will return true every 40 ms (every 25 frames). 
//If n = 4, true every 80 ms (every 12.5 frames) 
function everyinterval(n) {
    if ((myGameArea.frameNo / n) % 1 === 0) {
        return true;
    }
    return false;
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