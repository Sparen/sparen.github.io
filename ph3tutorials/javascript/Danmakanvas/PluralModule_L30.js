//Plural Module
//Yaw and Azimuth: For use with Lesson 30
//Copyright Andrew Fan 2019

"use strict";

//Controller that determines which attacks to display
function getPluralController(currgame, canvasid) {
    switch(canvasid) {
        case "gamecanvas_1":
            return new Plural_1(currgame);
            break;
        case "gamecanvas_2":
            return new Plural_2(currgame);
            break;
        default:
            console.log("getPluralController(): Canvas ID " + canvasid + " could not be recognized. Please check to make sure that the canvas ID is correct and/or supported.");
    }
}

//Constructor for a Plural
function Plural_1(currgame) {
    var singles = [new Single_1(currgame)];
    this.step = 0; //Starting single
    this.update = function () {
        singles[this.step].update();
    }
    this.remove = function () {
        singles = [];
    }
}

//Constructor for a Plural
function Plural_2(currgame) {
    var singles = [new Single_2(currgame)];
    this.step = 0; //Starting single
    this.update = function () {
        singles[this.step].update();
    }
    this.remove = function () {
        singles = [];
    }
}

//Constructor for a Single
function Single_1(currgame) {
    var tasks = [];
    //Push Starting/Continuous Tasks here:
    var i;
    for (i = 0; i < 6; i += 1) {
        tasks.push(new Single_1_Task_Shiki(i, 6, 1, 48, "white", "red", 160, currgame));
        tasks.push(new Single_1_Task_Shiki(i, 6, -1, 96, "white", "red", 160, currgame));

        tasks.push(new Single_1_Task_Shiki(i, 6, 1, 48, "white", "red", 480, currgame));
        tasks.push(new Single_1_Task_Shiki(i, 6, -1, 96, "white", "red", 480, currgame));
    }
    // Cameras
    tasks.push(new Single_1_Camera_ShikiA(i, 40, "white", "blue", 160, currgame));
    tasks.push(new Single_1_Camera_ShikiB(i, 40, "white", "blue", 480, currgame));
    // Focus
    tasks.push(new Single_1_Focus_Shiki(i, "white", "white", 160, currgame));
    tasks.push(new Single_1_Focus_Shiki(i, "white", "white", 480, currgame));
    //In update, push tasks that run every x frames
    this.update = function () { //Main Loop
        //Remove completed tasks
        var tasktoremove = [];
        var i;
        for (i = 0; i < tasks.length; i += 1) {
            tasks[i].update();
            if (tasks[i].finished) {
                tasktoremove.push(i);
                tasks[i].reset();
            }
        }
        for (i = tasktoremove.length - 1; i >= 0; i -= 1) {
            tasks.splice(tasktoremove[i], 1);
        }
    }
    this.remove = function () {
        tasks = [];
    }
}

function Single_1_Task_Shiki(ID, numinring, dir, rad, color, color2, x, currgame) {
    this.counter = 0;
    this.maxcounter = -1; //maximum time allowed for task to run. Use -1 for non-terminating tasks
    this.finished = false;

    this.angleT = ID*Math.PI*2/numinring;
    this.update = function () {
        //Comment out counter check for nonterminating tasks
        this.angleT = ID*Math.PI*2/numinring + this.counter*0.02*dir/1.5;
        var shikix = x + rad*Math.cos(this.angleT);
        var shikiy = 128 + rad*Math.sin(this.angleT);
        
        if (currgame.everyinterval(10)) { // Bullet trail
            var selftrailshot = new EnemyShot(shikix, shikiy, 0, 0, 0, 5, color2, 0, 1, 1, 4, 60, currgame);
            currgame.bullets.push(selftrailshot);
        }
        //render shiki as a bullet that lasts one frame
        var selfshot = new EnemyShot(shikix, shikiy, 0, 0, 0, 5, color2, 4, 4, 1, 4, 1, currgame);
        currgame.bullets.push(selfshot);
        this.counter += 1; //increment counter
        if (this.counter === this.maxcounter) {
            this.finished = true;
        }
    }
    this.reset = function () { //Deconstructor. Reset to original values in preparation for removal (except for finished). Called by the Single object
        this.counter = 0;
        this.maxcounter = 0;
        this.angleT = 90;
    }
}

function Single_1_Camera_ShikiA(ID, rad, color, color2, x, currgame) {
    this.counter = 0;
    this.maxcounter = -1; //maximum time allowed for task to run. Use -1 for non-terminating tasks
    this.finished = false;

    this.angleT = Math.PI/-2; // -90
    this.angleT2 = Math.PI/-2 + Math.PI;
    this.update = function () {
        //Comment out counter check for nonterminating tasks
        this.angleT = Math.PI/-2 + this.counter*0.02/2;
        this.angleT2 = this.angleT + Math.PI;
        var shikix = x + rad*Math.cos(this.angleT);
        var shikiy = 128 + rad*Math.sin(this.angleT);
        if (currgame.everyinterval(20)) { // Bullet trail
            var selftrailshot = new EnemyShot(shikix, shikiy, 0, 0, 0, 5, "#8888FF", 0, 1, 0.5, 4, 240, currgame);
            currgame.bullets.push(selftrailshot);
        }
        //render shiki as a bullet that lasts one frame
        var selfshot = new EnemyShot(shikix, shikiy, 0, 0, 0, 5, color2, 4, 4, 1, 4, 1, currgame);
        currgame.bullets.push(selfshot);
        for (var ssctr = 1; ssctr < 5; ssctr += 1) { // Sub shots
            var subshikix = shikix + (ssctr*6)*Math.cos(this.angleT2);
            var subshikiy = shikiy + (ssctr*6)*Math.sin(this.angleT2);
            if (currgame.everyinterval(20)) { // Bullet trail
                var subtrailshot = new EnemyShot(subshikix, subshikiy, 0, 0, 0, 5, "#00FFAA", 0, 1, 0.5, 4, 240, currgame);
                currgame.bullets.push(subtrailshot);
            }
            var selfshot2 = new EnemyShot(subshikix, subshikiy, 0, 0, 0, 5, "#00FFAA", 0, 2, 1, 4, 1, currgame);
            currgame.bullets.push(selfshot2);
        }
        this.counter += 1; //increment counter
        if (this.counter === this.maxcounter) {
            this.finished = true;
        }
    }
    this.reset = function () { //Deconstructor. Reset to original values in preparation for removal (except for finished). Called by the Single object
        this.counter = 0;
        this.maxcounter = 0;
        this.angleT = 90;
    }
}

function Single_1_Camera_ShikiB(ID, rad, color, color2, x, currgame) {
    this.counter = 0;
    this.maxcounter = -1; //maximum time allowed for task to run. Use -1 for non-terminating tasks
    this.finished = false;

    this.angleT = Math.PI/-2; // -90
    this.angleT2 = Math.PI/-2 + Math.PI;
    this.update = function () {
        //Comment out counter check for nonterminating tasks
        this.angleT = Math.PI/-2;
        this.angleT2 = this.angleT + Math.PI + this.counter*0.02/2;
        var shikix = x + rad*Math.cos(this.angleT);
        var shikiy = 128 + rad*Math.sin(this.angleT);
        //render shiki as a bullet that lasts one frame
        var selfshot = new EnemyShot(shikix, shikiy, 0, 0, 0, 5, color2, 4, 4, 1, 4, 1, currgame);
        currgame.bullets.push(selfshot);
        for (var ssctr = 1; ssctr < 5; ssctr += 1) { // Sub shots
            var subshikix = shikix + (ssctr*6)*Math.cos(this.angleT2);
            var subshikiy = shikiy + (ssctr*6)*Math.sin(this.angleT2);
            if (currgame.everyinterval(20)) { // Bullet trail
                var subtrailshot = new EnemyShot(subshikix, subshikiy, 0, 0, 0, 5, "#00FFAA", 0, 1, 0.5, 4, 240, currgame);
                currgame.bullets.push(subtrailshot);
            }
            var selfshot2 = new EnemyShot(subshikix, subshikiy, 0, 0, 0, 5, "#00FFAA", 0, 2, 1, 4, 1, currgame);
            currgame.bullets.push(selfshot2);
        }
        this.counter += 1; //increment counter
        if (this.counter === this.maxcounter) {
            this.finished = true;
        }
    }
    this.reset = function () { //Deconstructor. Reset to original values in preparation for removal (except for finished). Called by the Single object
        this.counter = 0;
        this.maxcounter = 0;
        this.angleT = 90;
    }
}

function Single_1_Focus_Shiki(ID, color, color2, x, currgame) {
    this.counter = 0;
    this.maxcounter = -1; //maximum time allowed for task to run. Use -1 for non-terminating tasks
    this.finished = false;

    this.angleT = Math.PI/-2;
    this.update = function () {
        //Comment out counter check for nonterminating tasks
        this.angleT = Math.PI/-2;
        var shikix = x;
        var shikiy = 128;
        //render shiki as a bullet that lasts one frame
        var selfshot = new EnemyShot(shikix, shikiy, 0, 0, 0, 5, color2, 4, 4, 1, 4, 1, currgame);
        currgame.bullets.push(selfshot);
        this.counter += 1; //increment counter
        if (this.counter === this.maxcounter) {
            this.finished = true;
        }
    }
    this.reset = function () { //Deconstructor. Reset to original values in preparation for removal (except for finished). Called by the Single object
        this.counter = 0;
        this.maxcounter = 0;
        this.angleT = 90;
    }
}

//Constructor for a Single
function Single_2(currgame) {
    var tasks = [];
    //Push Starting/Continuous Tasks here:
    var i;
    for (i = 0; i < 33; i += 1) {
        tasks.push(new Single_2_Task_Static(32, 32 + 192/32*i, "white", "white", currgame));
        tasks.push(new Single_2_Task_Static(224, 32 + 192/32*i, "white", "white", currgame));
        tasks.push(new Single_2_Task_Static(32 + 192/32*i, 32, "white", "white", currgame));
        tasks.push(new Single_2_Task_Static(32 + 192/32*i, 224, "white", "white", currgame));
    }
    for (i = 0; i < 72; i += 1) {
        tasks.push(new Single_2_Task_Static(128 + 96*Math.cos(Math.PI*2/72*i), 128 + 96*Math.sin(Math.PI*2/72*i), "white", "white", currgame));
    }
    tasks.push(new Single_2_Diameter("white", "red", currgame));
    //In update, push tasks that run every x frames
    this.update = function () { //Main Loop
        //Remove completed tasks
        var tasktoremove = [];
        var i;
        for (i = 0; i < tasks.length; i += 1) {
            tasks[i].update();
            if (tasks[i].finished) {
                tasktoremove.push(i);
                tasks[i].reset();
            }
        }
        for (i = tasktoremove.length - 1; i >= 0; i -= 1) {
            tasks.splice(tasktoremove[i], 1);
        }
    }
    this.remove = function () {
        tasks = [];
    }
}


function Single_2_Task_Static(x, y, color, color2, currgame) {
    this.counter = 0;
    this.maxcounter = -1; //maximum time allowed for task to run. Use -1 for non-terminating tasks
    this.finished = false;

    this.angleT = 0;
    this.update = function () {
        //Comment out counter check for nonterminating tasks
        //render shiki as a bullet that lasts one frame
        var selfshot = new EnemyShot(x, y, 0, 0, 0, 5, color2, 1, 1, 1, 4, 1, currgame);
        currgame.bullets.push(selfshot);
        this.counter += 1; //increment counter
        if (this.counter === this.maxcounter) {
            this.finished = true;
        }
    }
    this.reset = function () { //Deconstructor. Reset to original values in preparation for removal (except for finished). Called by the Single object
        this.counter = 0;
        this.maxcounter = 0;
        this.angleT = 90;
    }
}

function Single_2_Diameter(color, color2, currgame) {
    this.counter = 0;
    this.maxcounter = -1; //maximum time allowed for task to run. Use -1 for non-terminating tasks
    this.finished = false;

    this.angleT = 0;
    this.update = function () {
        //Comment out counter check for nonterminating tasks
        this.angleT = Math.PI/-2 + this.counter*0.02;

        var tgtlen = 96/Math.max(Math.abs(Math.sin(this.angleT)), Math.abs(Math.cos(this.angleT))); // radius

        for (var ssctr = 0; ssctr < 13; ssctr += 1) { // Sub shots
            var subshikix = 128 + tgtlen/12*ssctr*Math.cos(this.angleT);
            var subshikiy = 128 + tgtlen/12*ssctr*Math.sin(this.angleT);
            var selfshot2 = new EnemyShot(subshikix, subshikiy, 0, 0, 0, 5, "#00FFAA", 0, 2, 1, 4, 1, currgame);
            currgame.bullets.push(selfshot2);

            subshikix = 128 - tgtlen/12*ssctr*Math.cos(this.angleT);
            subshikiy = 128 - tgtlen/12*ssctr*Math.sin(this.angleT);
            var selfshot3 = new EnemyShot(subshikix, subshikiy, 0, 0, 0, 5, "#00FFAA", 0, 2, 1, 4, 1, currgame);
            currgame.bullets.push(selfshot3);
        }
        this.counter += 1; //increment counter
        if (this.counter === this.maxcounter) {
            this.finished = true;
        }
    }
    this.reset = function () { //Deconstructor. Reset to original values in preparation for removal (except for finished). Called by the Single object
        this.counter = 0;
        this.maxcounter = 0;
        this.angleT = 90;
    }
}