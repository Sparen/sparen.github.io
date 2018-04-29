//Plural Module
//Astroid: For use with Lesson 28
//Copyright Andrew Fan 2018

"use strict";

//Controller that determines which attacks to display
function getPluralController(canvasid) {
    switch(canvasid) {
        case "gamecanvas_1":
            return new Plural_1();
            break;
        default:
            console.log("getPluralController(): Canvas ID " + canvasid + " could not be recognized. Please check to make sure that the canvas ID is correct and/or supported.");
    }
}

//Constructor for a Plural
function Plural_1() {
    var singles = [new Single_1()];
    this.step = 0; //Starting single
    this.update = function () {
        singles[this.step].update();
    }
    this.remove = function () {
        singles = [];
    }
}

//Constructor for a Single
function Single_1() {
    var tasks = [];
    //Push Starting/Continuous Tasks here:
    var i;
    for (i = 0; i < 6; i += 1) {
        tasks.push(new Single_1_Task_Shiki(i, 6, 1, 48, "aquamarine", "blue"));
        tasks.push(new Single_1_Task_Shiki(i, 6, -1, 96, "pink", "red"));
    }
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

function Single_1_Task_Shiki(ID, numinring, dir, rad, color, color2) {
    this.counter = 0;
    this.maxcounter = -1; //maximum time allowed for task to run. Use -1 for non-terminating tasks
    this.finished = false;

    this.angleT = ID*Math.PI*2/numinring;
    this.update = function () {
        //Comment out counter check for nonterminating tasks
        this.angleT = ID*Math.PI*2/numinring + this.counter*0.02*dir;
        var shikix = 192 + rad*Math.cos(this.angleT);
        var shikiy = 224 + rad*Math.sin(this.angleT);
        //render shiki as a bullet that lasts one frame
        var selfshot = new EnemyShot(shikix, shikiy, 0, 0, 0, 5, color2, 8, 4, 1, 4, 1);
        bullets.push(selfshot);
        if (everyinterval(20)) { 
            var i;
            for (i = 0; i < 3; i++) {
                var newshot = new EnemyShot(shikix, shikiy, 1.5, this.angleT + Math.PI + i * toRadians(120), 0, 5, color, 3, 5, 0.75, 4, -1);
                bullets.push(newshot);
            }
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