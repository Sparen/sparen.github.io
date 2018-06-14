//Plural Module
//Astroid: For use with Lesson 8a
//Copyright Andrew Fan 2018

"use strict";

//Controller that determines which attacks to display
function getPluralController(currgame, canvasid) {
    switch(canvasid) {
        case "gamecanvas_1":
            return new Plural_1(currgame);
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

//Constructor for a Single
function Single_1(currgame) {
    var tasks = [];
    //Push Main Tasks here:
    tasks.push(new Single_1_Task_EternalMeek("#0022FF", currgame));
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

function Single_1_Task_EternalMeek(color, currgame) {
    this.counter = 0;
    this.maxcounter = -1; //maximum time allowed for task to run. Use -1 for non-terminating tasks
    this.finished = false;

    this.angleT = 0;
    this.update = function () {
        //Comment out counter check for nonterminating tasks
        if (currgame.everyinterval(1) /*&& this.counter < this.maxcounter**/) { 
            var i;
            for (i = 0; i < 5; i++) {
                var newshot = new EnemyShot(192, 112, 3 + Math.random() * 3, Math.random() * 2 * Math.PI, 0, 0, color, 6, 5, 2, 4, -1, currgame);
                currgame.bullets.push(newshot);
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