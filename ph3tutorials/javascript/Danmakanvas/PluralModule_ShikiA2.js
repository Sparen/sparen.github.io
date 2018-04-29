//Plural Module
//Side Familiars: For use with Lesson 28
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
    tasks.push(new Single_1_Task_Shiki(1, 64, "aquamarine", "aquamarine"));
    tasks.push(new Single_1_Task_Shiki(-1, 64, "pink", "pink"));
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

function Single_1_Task_Shiki(dir, dist, color, color2) {
    this.counter = 0;
    this.maxcounter = -1; //maximum time allowed for task to run. Use -1 for non-terminating tasks
    this.finished = false;

    this.update = function () {
        //Comment out counter check for nonterminating tasks
        //render shiki as a bullet that lasts one frame
        var selfshot = new EnemyShot(192 + dir * dist, 224, 0, 0, 0, 5, color2, 3, 5, 1, 4, 1);
        bullets.push(selfshot);
        if (everyinterval(75)) { 
            var i;
            for (i = 0; i < 36; i++) {
                var newshot = new EnemyShot(192 + dir * dist, 224, -2 + i/36*4, toRadians(90 + 15*Math.sin(i * 15) + this.counter * 0.7 * dir), 0, 5, color, 1, 3, 1, 4, -1);
                bullets.push(newshot);
                var newshot2 = new EnemyShot(192 + dir * dist, 224, -2 + i/36*4, toRadians(90 - 15*Math.sin(i * 15) + this.counter * 0.7 * dir), 0, 5, color, 1, 3, 1, 4, -1);
                bullets.push(newshot2);
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