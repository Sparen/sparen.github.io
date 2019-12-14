//Plural Module - DDS Guide 3

"use strict";

let CANVAS_1_N = 3;
let CANVAS_5_N = 64;
let CANVAS_6S_N = 64;
let CANVAS_6P_N = 128;
let CANVAS_7_N = 3;
let CANVAS_7_ARC = 30;
let CANVAS_8_N = 3;
let CANVAS_8_MIN = 2.0;
let CANVAS_8_MAX = 5.0;
let CANVAS_2_MODE = "FIXED";
let CANVAS_4_MODE = "FIXED";
let CANVAS_5_MODE = "FIXED";
let CANVAS_6_MODE = "FIXED";
let CANVAS_9_MODE = "CHANGING";

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
        case "gamecanvas_5":
            return new Plural_5(currgame);
            break;
        case "gamecanvas_6":
            return new Plural_6(currgame);
            break;
        case "gamecanvas_7":
            return new Plural_7(currgame);
            break;
        case "gamecanvas_8":
            return new Plural_8(currgame);
            break;
        case "gamecanvas_9a":
            return new Plural_9a(currgame);
            break;
        case "gamecanvas_9b":
            return new Plural_9b(currgame);
            break;
        case "gamecanvas_10":
            return new Plural_10(currgame);
            break;
        case "gamecanvas_11":
            return new Plural_11(currgame);
            break;
        default:
            console.log("getPluralController(): Canvas ID " + canvasid + " could not be recognized. Please check to make sure that the canvas ID is correct and/or supported.");
    }
}

// Constructor for a Plural
function Plural_1(currgame) {
    this.step = 0; // Default to first single in array
    this.singles = [new Single_1(currgame)];
    this.update = function () { this.singles[this.step].update(); }
    this.remove = function () { this.singles = []; }
}

function Plural_2(currgame) {
    this.step = 0; // Default to first single in array
    this.singles = [new Single_2(currgame)];
    this.update = function () { this.singles[this.step].update(); }
    this.remove = function () { this.singles = []; }
}

function Plural_3(currgame) {
    this.step = 0; // Default to first single in array
    this.singles = [new Single_3(currgame)];
    this.update = function () { this.singles[this.step].update(); }
    this.remove = function () { this.singles = []; }
}

function Plural_4(currgame) {
    this.step = 0; // Default to first single in array
    this.singles = [new Single_4(currgame)];
    this.update = function () { this.singles[this.step].update(); }
    this.remove = function () { this.singles = []; }
}

function Plural_5(currgame) {
    this.step = 0; // Default to first single in array
    this.singles = [new Single_5(currgame)];
    this.update = function () { this.singles[this.step].update(); }
    this.remove = function () { this.singles = []; }
}

function Plural_6(currgame) {
    this.step = 0; // Default to first single in array
    this.singles = [new Single_6(currgame)];
    this.update = function () { this.singles[this.step].update(); }
    this.remove = function () { this.singles = []; }
}

function Plural_7(currgame) {
    this.step = 0; // Default to first single in array
    this.singles = [new Single_7(currgame)];
    this.update = function () { this.singles[this.step].update(); }
    this.remove = function () { this.singles = []; }
}

function Plural_8(currgame) {
    this.step = 0; // Default to first single in array
    this.singles = [new Single_8(currgame)];
    this.update = function () { this.singles[this.step].update(); }
    this.remove = function () { this.singles = []; }
}

function Plural_9a(currgame) {
    this.step = 0; // Default to first single in array
    this.singles = [new Single_9a(currgame)];
    this.update = function () { this.singles[this.step].update(); }
    this.remove = function () { this.singles = []; }
}

function Plural_9b(currgame) {
    this.step = 0; // Default to first single in array
    this.singles = [new Single_9b(currgame)];
    this.update = function () { this.singles[this.step].update(); }
    this.remove = function () { this.singles = []; }
}

function Plural_10(currgame) {
    this.step = 0; // Default to first single in array
    this.singles = [new Single_10(currgame)];
    this.update = function () { this.singles[this.step].update(); }
    this.remove = function () { this.singles = []; }
}

function Plural_11(currgame) {
    this.step = 0; // Default to first single in array
    this.singles = [new Single_11(currgame)];
    this.update = function () { this.singles[this.step].update(); }
    this.remove = function () { this.singles = []; }
}

function Single_1(currgame) {
    this.tasks = [];
    this.update = function () { // Main Loop for a given Danmakanvas Instance
        if (currgame.everyinterval(20)) { 
            CreateRingA1(CANVAS_1_N, GetCenterX(currgame), GetCenterY(currgame), 2, 0, "#FF8888", 4, 8, 1, 0, currgame);
            CANVAS_1_N = document.getElementById("canvas1n").value;
            document.getElementById("canvas1nvalue").innerHTML = "Number of Bullets in Ring: " + CANVAS_1_N;
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
    this.remove = function () { this.tasks = []; }
}

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
    this.remove = function () { this.tasks = []; }
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
    this.remove = function () {}
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
    this.remove = function () { this.tasks = []; }
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
    this.remove = function () {}
}

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
    this.remove = function () { this.tasks = []; }
}

function Single_4_SetMode(val) {
    CANVAS_4_MODE = val;
}

function Single_5(cg) {
    this.tasks = [];
    let mainshot = CreateShotA1(GetCenterX(cg) + 128*Math.cos(cg.frameNo/80), 360, 0, 0, "#FF0000", 8, 12, 2, 0, cg);
    let angleBase = Math.PI/2; // 90
    this.update = function () { // Main Loop for a given Danmakanvas Instance
        CANVAS_5_N = document.getElementById("canvas5n").value;
        document.getElementById("canvas5nvalue").innerHTML = "Distance from Center (px): " + CANVAS_5_N;
        mainshot.x = GetCenterX(cg) + 128*Math.cos(cg.frameNo/80);
        if (cg.everyinterval(5)) { 
            let dang = 0;
            let graphic = "#00FF80";
            if (CANVAS_5_MODE === "CHANGING") {
                dang = 0.01;
                graphic = "#8000FF";
            }
            if (CANVAS_5_MODE === "RANDOM") {
                graphic = "#FF8000";
                dang = Math.random()*Math.PI*2;
            }
            if (CANVAS_5_MODE === "AIMED") {
                graphic = "#0080F0";
                // Use fixed position for seed
                angleBase = GetAngleCoordCoord(GetCenterX(cg), GetCenterY(cg), mainshot.x, 360);
            }
            let i = 0;
            for (i = 0; i < 32; i += 1) {
                let tgtang = angleBase + dang * cg.frameNo + Math.PI*2/32*i;
                CreateShotA2(GetCenterX(cg) + CANVAS_5_N*Math.cos(tgtang), GetCenterY(cg) + CANVAS_5_N*Math.sin(tgtang), 0, tgtang, 0.02, 20, graphic, 3, 4, 1, 1, -1, cg);
            }
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
    this.remove = function () { this.tasks = []; }
}

function Single_6(cg) {
    this.tasks = [];
    let mainshot = CreateShotA1(GetCenterX(cg) + CANVAS_6P_N*Math.cos(cg.frameNo/80), GetCenterY(cg) + CANVAS_6P_N*Math.sin(cg.frameNo/80), 0, 0, "#FF0000", 8, 12, 2, 0, cg);
    let angleBase = Math.PI/2; // 90
    this.update = function () { // Main Loop for a given Danmakanvas Instance
        CANVAS_6S_N = document.getElementById("canvas6sn").value;
        CANVAS_6P_N = document.getElementById("canvas6pn").value;
        document.getElementById("canvas6snvalue").innerHTML = "Spawn Distance from Center (px): " + CANVAS_6S_N;
        document.getElementById("canvas6pnvalue").innerHTML = "Player Distance from Center (px): " + CANVAS_6P_N;
        mainshot.x = GetCenterX(cg) + CANVAS_6P_N*Math.cos(cg.frameNo/80);
        mainshot.y = GetCenterX(cg) + CANVAS_6P_N*Math.sin(cg.frameNo/80);
        if (cg.everyinterval(6)) { 
            let dang = 0;
            let graphic = "#00FF80";
            if (CANVAS_6_MODE === "CHANGING") {
                dang = 0.01;
                graphic = "#8000FF";
            }
            if (CANVAS_6_MODE === "RANDOM") {
                graphic = "#FF8000";
                dang = Math.random()*Math.PI*2;
            }
            let i = 0;
            for (i = 0; i < 32; i += 1) {
                let tgtang = angleBase + dang * cg.frameNo + Math.PI*2/32*i;
                let fireang = GetAngleCoordCoord(GetCenterX(cg) + CANVAS_6S_N*Math.cos(tgtang), GetCenterY(cg) + CANVAS_6S_N*Math.sin(tgtang), mainshot.x, mainshot.y);
                let currbullet = CreateShotA2(GetCenterX(cg) + CANVAS_6S_N*Math.cos(tgtang), GetCenterY(cg) + CANVAS_6S_N*Math.sin(tgtang), 0, fireang, 0.025, 20, graphic, 3, 4, 1, 1, -1, cg);
                currbullet.customupdate = function() {applyfade(currbullet);}
            }
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
    this.remove = function () { this.tasks = []; }
}

// Function lowering brad over time
function applyfade(target) {
    target.brad *= 0.995;
}

function Single_5_SetMode(val) {
    CANVAS_5_MODE = val;
}

function Single_6_SetMode(val) {
    CANVAS_6_MODE = val;
}

function Single_7(currgame) {
    this.tasks = [];
    this.update = function () { // Main Loop for a given Danmakanvas Instance
        if (currgame.everyinterval(20)) { 
            CreateSpreadA1(CANVAS_7_N, Math.PI / 180 * CANVAS_7_ARC/(CANVAS_7_N - 1), GetCenterX(currgame), GetCenterY(currgame)/4, 2, Math.PI/2, "#FF8888", 4, 8, 1, 0, currgame);
            CANVAS_7_N = document.getElementById("canvas7n").value;
            CANVAS_7_ARC = document.getElementById("canvas7arc").value;
            document.getElementById("canvas7nvalue").innerHTML = "Number of Bullets in Spread: " + CANVAS_7_N;
            document.getElementById("canvas7arcvalue").innerHTML = "Arc Angle (Total): " + CANVAS_7_ARC;
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
    this.remove = function () { this.tasks = []; }
}

function Single_8(currgame) {
    this.tasks = [];
    this.update = function () { // Main Loop for a given Danmakanvas Instance
        if (currgame.everyinterval(20)) { 
            CreateStackA1(CANVAS_8_N, (CANVAS_8_MAX - CANVAS_8_MIN)/(CANVAS_8_N-1), GetCenterX(currgame), GetCenterY(currgame)/4, CANVAS_8_MIN, Math.PI/2 + Math.PI/4*Math.cos(currgame.frameNo/80), "#FF8888", 4, 8, 1, 0, currgame);
            CANVAS_8_N = document.getElementById("canvas8n").value;
            CANVAS_8_MIN = parseFloat(document.getElementById("canvas8min").value);
            CANVAS_8_MAX = parseFloat(document.getElementById("canvas8max").value);
            document.getElementById("canvas8nvalue").innerHTML = "Number of Bullets in Stack: " + CANVAS_8_N;
            document.getElementById("canvas8minvalue").innerHTML = "Minimum Speed: " + CANVAS_8_MIN;
            document.getElementById("canvas8maxvalue").innerHTML = "Maximum Speed: " + CANVAS_8_MAX;
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
    this.remove = function () { this.tasks = []; }
}

function Single_9_SetMode(val) {
    CANVAS_9_MODE = val;
}

function Single_9a(cg) {
    this.tasks = [];
    let mainshot = CreateShotA1(GetCenterX(cg) + 128*Math.cos(cg.frameNo/80), 240, 0, 0, "#FF0000", 8, 12, 2, 0, cg);
    let angleBase = Math.PI/2; // 90
    this.update = function () { // Main Loop for a given Danmakanvas Instance
        mainshot.x = GetCenterX(cg) + 128*Math.cos(cg.frameNo/80);
        if (cg.everyinterval(15)) { 
            let dang = 0;
            let graphic = "#00FF80";
            if (CANVAS_9_MODE === "CHANGING") {
                dang = 0.017;
                graphic = "#8000FF";
            }
            if (CANVAS_9_MODE === "AIMED") {
                graphic = "#0080F0";
                // Use fixed position for seed
                angleBase = GetAngleCoordCoord(GetCenterX(cg), GetCenterY(cg), mainshot.x, 240);
            }
            CreateRingA1(20, GetCenterX(cg), GetCenterY(cg), 2, angleBase + dang * cg.frameNo, graphic, 3, 4, 1, 1, cg);
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
    this.remove = function () { this.tasks = []; }
}

function Single_9b(cg) {
    this.tasks = [];
    let mainshot = CreateShotA1(GetCenterX(cg) + 128*Math.cos(cg.frameNo/80), 240, 0, 0, "#FF0000", 8, 12, 2, 0, cg);
    let angleBase = Math.PI/2; // 90
    this.update = function () { // Main Loop for a given Danmakanvas Instance
        mainshot.x = GetCenterX(cg) + 128*Math.cos(cg.frameNo/80);
        if (cg.everyinterval(30)) { 
            let dang = 0;
            let graphic = "#00FF80";
            if (CANVAS_9_MODE === "CHANGING") {
                dang = 0.017;
                graphic = "#8000FF";
            }
            if (CANVAS_9_MODE === "AIMED") {
                graphic = "#0080F0";
                // Use fixed position for seed
                angleBase = GetAngleCoordCoord(GetCenterX(cg), GetCenterY(cg), mainshot.x, 240);
            }
            CreateRingStackA1(20, 3, 0.33, GetCenterX(cg), GetCenterY(cg), 2, angleBase + dang * cg.frameNo, graphic, 3, 4, 1, 1, cg);
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
    this.remove = function () { this.tasks = []; }
}

function Single_10(cg) {
    this.tasks = [];
    let mainshot = CreateShotA1(GetCenterX(cg) + 128*Math.cos(cg.frameNo/80), 240, 0, 0, "#FF0000", 8, 12, 2, 0, cg);
    let angleBase = Math.PI/2; // 90
    this.update = function () { // Main Loop for a given Danmakanvas Instance
        mainshot.x = GetCenterX(cg) + 128*Math.cos(cg.frameNo/80);
        if (cg.everyinterval(60)) { 
            let graphic = "#0080F0";
            // Use fixed position for seed
            angleBase = GetAngleCoordCoord(GetCenterX(cg), 40, mainshot.x, 240);
            CreateSpreadStackA1(5, 18, Math.PI/8, 0.33, GetCenterX(cg), 40, 0.67, angleBase, graphic, 3, 4, 1, 1, cg);
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
    this.remove = function () { this.tasks = []; }
}

function Single_11(cg) {
    this.tasks = [];
    let angleBase1 = Math.PI/2; // 90
    let angleBase2 = Math.PI/2 + Math.PI/3; // 90 + 60
    let angleBase3 = Math.PI/2; // 90
    let iterct1 = 0;
    let iterct2 = 0;
    let iterct3 = 0;
    this.update = function () { // Main Loop for a given Danmakanvas Instance
/*        if (cg.everyinterval(20)) { 
            // Use fixed position for seed
            let i = 0;
            for (i = 0; i < 3; i += 1) {
	            let newshots = CreateSpreadStackA1(3, 2, Math.PI/8, 0.5, GetCenterX(cg) + 32*Math.cos(angleBase3+Math.PI*2/3*i), GetCenterY(cg) + 32*Math.sin(angleBase3+Math.PI*2/3*i), 3 + 1.5*Math.cos(iterct1*0.25), angleBase1 + i*Math.PI*2/3, "#0080F0", 3, 4, 1, 1, cg);
	            let objctr = 0;
	            for (objctr = 0; objctr < newshots.length; objctr += 1) {
	                let currbullet = newshots[objctr];
	                SetShotGraphic(currbullet, "ARROWHEAD", "#FFFF00", 0, 8, 2, 4, true, 0);
	            }
	        }
            angleBase1 += 0.17;
            iterct1 += 1;
        }*/
        if (cg.everyinterval(20)) { 
            // Use fixed position for seed
            let i = 0;
            for (i = 0; i < 3; i += 1) {
	            let newshots = CreateSpreadStackA1(2, 2, Math.PI/12, 0.5, GetCenterX(cg), GetCenterY(cg), 1.5 + 1*Math.cos(iterct2*0.25), angleBase2 + i*Math.PI*2/3, "#0080F0", 3, 4, 1, 1, cg);
	            let objctr = 0;
	            for (objctr = 0; objctr < newshots.length; objctr += 1) {
	                let currbullet = newshots[objctr];
	                SetShotGraphic(currbullet, "ARROWHEAD", "#FF44AA", 0, 8, 8, 2, true, 0);
	            }
	        }
            angleBase2 += 0.17;
            iterct2 += 1;
        }
        if (cg.everyinterval(30)) { 
            let i = 0;
            for (i = 0; i < 5; i += 1) {
	            let newshots = CreateRingStackA1(5, 8, 0.5, GetCenterX(cg) + 200*Math.cos(angleBase3+Math.PI*2/5*i), GetCenterY(cg) + 200*Math.sin(angleBase3+Math.PI*2/5*i), 1, angleBase3+Math.PI*2/5*i, "#0080F0", 3, 4, 1, 1, cg);
	            let objctr = 0;
	            for (objctr = 0; objctr < newshots.length; objctr += 1) {
	                let currbullet = newshots[objctr];
	                SetShotGraphic(currbullet, "DIAMOND", "#00FFFF", 0, 4, 2, 2, true, 0);
	            }
	        }
            angleBase3 -= 0.17;
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
    this.remove = function () { this.tasks = []; }
}
