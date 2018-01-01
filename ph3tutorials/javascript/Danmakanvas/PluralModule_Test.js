//Plural Module
//Fork of initial Danmakanvas Project's 1_PluralModule.js. 
//Copyright Andrew Fan 2017

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
    this.update = function () { //Main Loop
        if (everyinterval(60)) { //every four frames
            tasks.push(new Single_1_Task_SpawnShotA1(["red", "blue", "green", "orange"][Math.floor((Math.random() * 4))]));
        }

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

function Single_1_Task_SpawnShotA1(color) {
    this.counter = 0;
    this.maxcounter = 60; //maximum time allowed for task to run
    this.finished = false;

    this.angleT = 90;
    this.update = function () {
        if (everyinterval(2) && this.counter < this.maxcounter) { //every four frames
            var i;
            for (i = 0; i < 4; i++) {
                var newshot = new EnemyShot(320, 120, 2 + this.counter / 10, this.angleT, 0, 0, color, 6, 6, 3, 4);
                bullets.push(newshot);
                this.angleT += Math.PI/4;
            }
            this.angleT += toRadians(7);
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