//Plural Module - DDS Guide 3

"use strict";

let CANVAS_1_N = 3;
let CANVAS_2_MODE = "FIXED";
let CANVAS_4_MODE = "FIXED";

// Controller that determines which attacks to display
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
        case "gamecanvas_4":
            return new Plural_4(currgame);
            break;
        default:
            console.log("getPluralController(): Canvas ID " + canvasid + " could not be recognized. Please check to make sure that the canvas ID is correct and/or supported.");
    }
}

// Constructor for a Plural
function Plural_1(currgame) {
    this.step = 0; // Default to first single in array
    this.singles = [new Single_1(currgame)];
    this.update = function () {
        this.singles[this.step].update();
    }
    this.remove = function () {
        this.singles = [];
    }
}

function Plural_2(currgame) {
    this.step = 0; // Default to first single in array
    this.singles = [new Single_2(currgame)];
    this.update = function () {
        this.singles[this.step].update();
    }
    this.remove = function () {
        this.singles = [];
    }
}

function Plural_3(currgame) {
    this.step = 0; // Default to first single in array
    this.singles = [new Single_3(currgame)];
    this.update = function () {
        this.singles[this.step].update();
    }
    this.remove = function () {
        this.singles = [];
    }
}

function Plural_4(currgame) {
    this.step = 0; // Default to first single in array
    this.singles = [new Single_4(currgame)];
    this.update = function () {
        this.singles[this.step].update();
    }
    this.remove = function () {
        this.singles = [];
    }
}

// Constructor for a Single
function Single_1(currgame) {
    this.tasks = [];
    this.update = function () { // Main Loop for a given Danmakanvas Instance
        if (currgame.everyinterval(20)) { 
            CreateRingA1(CANVAS_1_N, GetCenterX(currgame), GetCenterY(currgame), 2, 0, "#FF8888", 4, 8, 1, 0, currgame);
            CANVAS_1_N = document.getElementById("canvas1n").value;
            document.getElementById("canvas1nvalue").innerHTML = "Value: " + CANVAS_1_N;
        }
        // Remove completed tasks
        let tasktoremove = [];
        let i;
        for (i = 0; i < this.tasks.length; i += 1) {
            this.tasks[i].update();
            if (this.tasks[i].finished) {
                tasktoremove.push(i);
                this.tasks[i].remove();
            }
        }
        for (i = tasktoremove.length - 1; i >= 0; i -= 1) {
            this.tasks.splice(tasktoremove[i], 1);
        }
    }
    this.remove = function () {
        this.tasks = [];
    }
}

// Constructor for a Single
function Single_2(currgame) {
    this.tasks = [];
    CreateShotA1(GetCenterX(currgame), 400, 0, 0, "#FF0000", 8, 12, 2, 0, currgame);
    this.update = function () { // Main Loop for a given Danmakanvas Instance
        if (currgame.frameNo % 150 === 1) { 
            this.tasks.push(new Single_2_Helper(CANVAS_2_MODE, currgame));
        }
        // Remove completed tasks
        let tasktoremove = [];
        let i;
        for (i = 0; i < this.tasks.length; i += 1) {
            this.tasks[i].update();
            if (this.tasks[i].finished) {
                tasktoremove.push(i);
                this.tasks[i].remove();
            }
        }
        for (i = tasktoremove.length - 1; i >= 0; i -= 1) {
            this.tasks.splice(tasktoremove[i], 1);
        }
    }
    this.remove = function () {
        this.tasks = [];
    }
}

function Single_2_Helper(mode, cg) {
    this.counter = 0;
    this.maxcounter = 100; // Maximum time allowed for task to run. Use -1 for non-terminating tasks
    this.finished = false;
    let angleBase1 = Math.PI/2; // 90
    let angleBase2 = Math.PI/2; // 90
    this.update = function () {
        if (this.counter % 5 === 0) {
            let dang = 0;
            let graphic = "#00FF80";
            if (mode === "CHANGING") {
                dang = Math.PI/12;
                graphic = "#8000FF";
            }
            if (mode === "RANDOM") {
                graphic = "#FF8000";
                dang = Math.random()*Math.PI*2;
            }
            if (mode === "RANDOM") {
                graphic = "#FF8000";
                dang = Math.random()*Math.PI*2;
            }
            if (mode === "AIMED") {
                graphic = "#0080F0";
                angleBase1 = GetAngleCoordCoord(GetCenterX(cg) + this.counter*3, GetCenterY(cg), GetCenterX(cg), 400);
                angleBase2 = GetAngleCoordCoord(GetCenterX(cg) - this.counter*3, GetCenterY(cg), GetCenterX(cg), 400);
            }
            CreateRingA2(12, GetCenterX(cg) + this.counter*3, GetCenterY(cg), 0, angleBase1 + dang * this.counter, 0.02, 5, graphic, 3, 4, 1, 1, -1, cg);
            CreateRingA2(12, GetCenterX(cg) - this.counter*3, GetCenterY(cg), 0, angleBase2 - dang * this.counter, 0.02, 5, graphic, 3, 4, 1, 1, -1, cg);
        }

        this.counter += 1;
        if (this.counter === this.maxcounter) {
            this.finished = true;
        }
    }
    this.remove = function () { // Deconstructor. Called by the Single object. Destroy any subtasks or objects created by the task here.
    }
}

function Single_2_SetMode(val) {
    CANVAS_2_MODE = val;
}

function Single_3(currgame) {
    this.tasks = [];
    currgame.framereset = false;
    CreateShotA1(GetCenterX(currgame), 200, 0, 0, "#FF0000", 8, 12, 2, 0, currgame);
    this.tasks.push(new Single_3_Helper(currgame));
    this.update = function () { // Main Loop for a given Danmakanvas Instance
        // Remove completed tasks
        let tasktoremove = [];
        let i;
        for (i = 0; i < this.tasks.length; i += 1) {
            this.tasks[i].update();
            if (this.tasks[i].finished) {
                tasktoremove.push(i);
                this.tasks[i].remove();
            }
        }
        for (i = tasktoremove.length - 1; i >= 0; i -= 1) {
            this.tasks.splice(tasktoremove[i], 1);
        }
    }
    this.remove = function () {
        this.tasks = [];
    }
}

function Single_3_Helper(cg) {
    this.counter = 0;
    this.maxcounter = 100; // Maximum time allowed for task to run. Use -1 for non-terminating tasks
    this.finished = false;
    this.update = function () {
        if (this.counter % 5 === 0) {
            let graphic = "#0080F0";
            let angleBase1 = GetAngleCoordCoord(GetCenterX(cg) + this.counter*8, 40, GetCenterX(cg), 200);
            let angleBase2 = GetAngleCoordCoord(GetCenterX(cg) - this.counter*8, 40, GetCenterX(cg), 200);
            CreateRingA2(12, GetCenterX(cg) + this.counter*8, 40, 0, angleBase1, 0.02, 5, graphic, 0, 1, 0.5, 1, -1, cg);
            CreateRingA2(12, GetCenterX(cg) - this.counter*8, 40, 0, angleBase2, 0.02, 5, graphic, 0, 1, 0.5, 1, -1, cg);
            CreateShotA2(GetCenterX(cg) + this.counter*8, 40, 0, angleBase1, 0.02, 5, graphic, 1, 2, 0.5, 1, -1, cg);
            CreateShotA2(GetCenterX(cg) - this.counter*8, 40, 0, angleBase2, 0.02, 5, graphic, 1, 2, 0.5, 1, -1, cg);
        }

        this.counter += 1;
        if (this.counter === this.maxcounter) {
            this.finished = true;
        }
    }
    this.remove = function () { // Deconstructor. Called by the Single object. Destroy any subtasks or objects created by the task here.
    }
}

// Constructor for a Single
function Single_4(cg) {
    this.tasks = [];
    CreateShotA1(GetCenterX(cg), GetCenterY(cg), 0, 0, "#FF0000", 8, 12, 2, 0, cg);
    let angleBase1 = Math.PI/2; // 90
    let angleBase2 = Math.PI/2; // 90
    let angleBase3 = Math.PI/2; // 90
    let angleBase4 = Math.PI/2; // 90
    this.update = function () { // Main Loop for a given Danmakanvas Instance
        if (cg.everyinterval(15)) { 
            let dang = 0;
            let graphic = "#00FF80";
            if (CANVAS_4_MODE === "CHANGING") {
                dang = 13;
                graphic = "#8000FF";
            }
            if (CANVAS_4_MODE === "RANDOM") {
                graphic = "#FF8000";
                dang = Math.random()*Math.PI*2;
            }
            if (CANVAS_4_MODE === "RANDOM") {
                graphic = "#FF8000";
                dang = Math.random()*Math.PI*2;
            }
            if (CANVAS_4_MODE === "AIMED") {
                graphic = "#0080F0";
                angleBase1 = GetAngleCoordCoord(GetCenterX(cg) + 160, GetCenterY(cg) + 160, GetCenterX(cg), GetCenterY(cg));
                angleBase2 = GetAngleCoordCoord(GetCenterX(cg) + 160, GetCenterY(cg) - 160, GetCenterX(cg), GetCenterY(cg));
                angleBase3 = GetAngleCoordCoord(GetCenterX(cg) - 160, GetCenterY(cg) + 160, GetCenterX(cg), GetCenterY(cg));
                angleBase4 = GetAngleCoordCoord(GetCenterX(cg) - 160, GetCenterY(cg) - 160, GetCenterX(cg), GetCenterY(cg));
            }
            CreateRingA2(12, GetCenterX(cg) + 160, GetCenterY(cg) + 160, 0, angleBase1 + dang * cg.frameNo, 0.02, 5, graphic, 3, 4, 1, 1, -1, cg);
            CreateRingA2(12, GetCenterX(cg) + 160, GetCenterY(cg) - 160, 0, angleBase1 + dang * cg.frameNo, 0.02, 5, graphic, 3, 4, 1, 1, -1, cg);
            CreateRingA2(12, GetCenterX(cg) - 160, GetCenterY(cg) + 160, 0, angleBase1 + dang * cg.frameNo, 0.02, 5, graphic, 3, 4, 1, 1, -1, cg);
            CreateRingA2(12, GetCenterX(cg) - 160, GetCenterY(cg) - 160, 0, angleBase1 + dang * cg.frameNo, 0.02, 5, graphic, 3, 4, 1, 1, -1, cg);
        }
        // Remove completed tasks
        let tasktoremove = [];
        let i;
        for (i = 0; i < this.tasks.length; i += 1) {
            this.tasks[i].update();
            if (this.tasks[i].finished) {
                tasktoremove.push(i);
                this.tasks[i].remove();
            }
        }
        for (i = tasktoremove.length - 1; i >= 0; i -= 1) {
            this.tasks.splice(tasktoremove[i], 1);
        }
    }
    this.remove = function () {
        this.tasks = [];
    }
}

function Single_4_SetMode(val) {
    CANVAS_4_MODE = val;
}
