//Plural Module
//Astroid: For use with Lesson 11
//Copyright Andrew Fan 2017

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
        case "gamecanvas_3":
            return new Plural_3(currgame);
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

//Constructor for a Plural
function Plural_3(currgame) {
    var singles = [new Single_3(currgame)];
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
    //Push Main Tasks here:
    tasks.push(new Single_1_Task_SpawnAstroid("aquamarine", currgame));
    //In update, push tasks that run every x frames
    this.update = function () { //Main Loop
        /*if (everyinterval(60)) { //every four frames
        }*/

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

function Single_1_Task_SpawnAstroid(color, currgame) {
    this.counter = 0;
    this.maxcounter = -1; //maximum time allowed for task to run. Use -1 for non-terminating tasks
    this.finished = false;

    this.angleT = 0;
    this.update = function () {
        //Comment out counter check for nonterminating tasks
        if (currgame.everyinterval(2) /*&& this.counter < this.maxcounter**/) { 
            var i;
            for (i = 0; i < 30; i++) {
                var newshot = new EnemyShot(192 + 120*Math.pow(Math.cos(this.angleT), 3), 224 + 120*Math.pow(Math.sin(this.angleT), 3), 0, this.angleT, 0, 0, color, 6, 6, 3, 4, 6, currgame);
                currgame.bullets.push(newshot);
                this.angleT += Math.PI*2/30;
            }
            this.angleT += toRadians(30);
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

//Constructor for a Single
function Single_2(currgame) {
    var tasks = [];
    //Push Main Tasks here:
    tasks.push(new Single_2_Task_SpawnAstroid("aquamarine", currgame));
    //In update, push tasks that run every x frames
    this.update = function () { //Main Loop
        /*if (everyinterval(60)) { //every four frames
        }*/

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

function Single_2_Task_SpawnAstroid(color, currgame) {
    this.counter = 0;
    this.maxcounter = -1; //maximum time allowed for task to run. Use -1 for non-terminating tasks
    this.finished = false;

    this.angleT = 0;
    this.update = function () {
        //Comment out counter check for nonterminating tasks
        if (currgame.everyinterval(1.2) /*&& this.counter < this.maxcounter**/) { 
            var i;
            for (i = 0; i < 60; i++) {
                var newshot = new EnemyShot(192 + 120*Math.pow(Math.cos(this.angleT), 3), 224 + 120*Math.pow(Math.sin(this.angleT), 3), 2, this.angleT, 0, 0, color, 6, 6, 3, 4, -1, currgame);
                currgame.bullets.push(newshot);
                this.angleT += Math.PI*2/60;
            }
            this.angleT += toRadians(15);
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

//Constructor for a Single
function Single_3(currgame) {
    var tasks = [];
    //Push Starting/Continuous Tasks here:
    tasks.push(new Single_3_Task_SpawnPRing(["lightcoral", "blanchedalmond", "lightseagreen", "chartreuse"][Math.floor((Math.random() * 4))], currgame));
    //In update, push tasks that run every x frames
    this.update = function () { //Main Loop
        if (currgame.everyinterval(320)) {
            tasks.push(new Single_3_Task_SpawnPRing(["lightcoral", "blanchedalmond", "lightseagreen", "chartreuse"][Math.floor((Math.random() * 4))], currgame));
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

function Single_3_Task_SpawnPRing(color, currgame) {
    this.counter = 0;
    this.maxcounter = 120; //maximum time allowed for task to run. Use -1 for non-terminating tasks
    this.finished = false;

    this.angleT = Math.random() * Math.PI * 2;
    this.update = function () {
        //Comment out counter check for nonterminating tasks
        if (currgame.everyinterval(1) && this.counter < this.maxcounter) { 
            var i;
            for (i = 0; i < 3; i++) {
                var newshot = new EnemyShot(192 + 120*Math.cos(this.angleT * 3), 224 + 90*Math.sin(this.angleT * 5), 0, this.angleT * 3, 0.0015, 5, color, 3, 5, 0.75, 4, -1, currgame);
                currgame.bullets.push(newshot);
                this.angleT += Math.PI*2/3;
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