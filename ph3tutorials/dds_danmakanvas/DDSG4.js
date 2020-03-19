//Plural Module - DDS Guide 4

"use strict";

let CANVAS_1_N = 3;
let CANVAS_2_N = 5;
let CANVAS_2_NB = 32;

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
        default:
            console.log("getPluralController(): Canvas ID " + canvasid + " could not be recognized. Please check to make sure that the canvas ID is correct and/or supported.");
    }
}

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

function Single_1(currgame) {
    this.tasks = [];
    let angleT = 0;
    this.update = function () { // Main Loop for a given Danmakanvas Instance
        if (currgame.everyinterval(20)) { 
            for (let i = 0; i < 6; i += 1) {
                let newshots = CreateSpreadA1(CANVAS_1_N, Math.PI/6/CANVAS_1_N, GetCenterX(currgame), GetCenterY(currgame), 2, angleT, "#FF8888", 4, 8, 1, 0, currgame);
                let objctr = 0;
                for (objctr = 0; objctr < newshots.length; objctr += 1) {
                    let currbullet = newshots[objctr];
                    SetShotGraphic(currbullet, "ARROWHEAD", "#FF8888", 2, 8, 4, 2, true, 0);
                }
                angleT += Math.PI*2/6;
            }
            CANVAS_1_N = document.getElementById("canvas1n").value;
            document.getElementById("canvas1nvalue").innerHTML = "Number of Bullets in Spread: " + CANVAS_1_N;
            angleT += Math.PI/9;
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
    let angleT = 0;
    this.update = function () { // Main Loop for a given Danmakanvas Instance
        if (currgame.everyinterval(20)) { 
            for (let i = 0; i < CANVAS_2_N; i += 1) {
                CreateRingA1(3, GetCenterX(currgame) + CANVAS_2_NB*Math.cos(Math.PI*2/CANVAS_2_N*i), GetCenterY(currgame) + CANVAS_2_NB*Math.sin(Math.PI*2/CANVAS_2_N*i), 2, angleT, "#44AAFF", 2, 4, 2, 0, currgame);
            }
            CANVAS_2_N = document.getElementById("canvas2n").value;
            document.getElementById("canvas2nvalue").innerHTML = "Number of Bullets in Ring: " + CANVAS_2_N;
            CANVAS_2_NB = document.getElementById("canvas2nb").value;
            document.getElementById("canvas2nvalue2").innerHTML = "Ring Radius: " + CANVAS_2_NB;
            angleT += Math.PI/9;
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

function Single_3(currgame) {
    this.tasks = [];
    let angleT1 = -Math.PI/2; // Starting from 0 creates a difficult wall at the bottom. Starting at +Math.PI creates a cheapshot.
    let angleT2 = -Math.PI/2;
    let mainshotR = CreateShotA1(GetCenterX(currgame) + 64*Math.cos(angleT1), GetCenterY(currgame) + 64*Math.sin(angleT1), 0, 0, "#FF4444", 8, 12, 2, 0, currgame);
    let mainshotG = CreateShotA1(GetCenterX(currgame) + 64*Math.cos(angleT2), GetCenterY(currgame) + 64*Math.sin(angleT2), 0, 0, "#44FF44", 8, 12, 2, 0, currgame);
    this.update = function () { // Main Loop for a given Danmakanvas Instance
        mainshotR.x = GetCenterX(currgame) + 64*Math.cos(angleT1);
        mainshotR.y = GetCenterY(currgame) + 64*Math.sin(angleT1);
        mainshotG.x = GetCenterX(currgame) + 128*Math.cos(angleT2);
        mainshotG.y = GetCenterY(currgame) + 128*Math.sin(angleT2);
        angleT1 += Math.PI/60;
        angleT2 -= Math.PI/60;
        if (currgame.everyinterval(5)) { 
            let newshots1 = CreateSpreadA1(5, Math.PI/15, GetCenterX(currgame) + 64*Math.cos(angleT1), GetCenterY(currgame) + 64*Math.sin(angleT1), 1.5, angleT1 - Math.PI/3, "#FF8888", 4, 8, 1, 0, currgame);
            let objctr = 0;
            for (objctr = 0; objctr < newshots1.length; objctr += 1) {
                let currbullet = newshots1[objctr];
                SetShotGraphic(currbullet, "OVAL", "#FF4444", 2, 8, 4, 2, true, 0);
            }
            let newshots2 = CreateSpreadA1(3, Math.PI/18, GetCenterX(currgame) + 128*Math.cos(angleT2), GetCenterY(currgame) + 128*Math.sin(angleT2), 1.75, angleT2 + Math.PI/3, "#FF8888", 4, 8, 1, 0, currgame);
            objctr = 0;
            for (objctr = 0; objctr < newshots2.length; objctr += 1) {
                let currbullet = newshots2[objctr];
                SetShotGraphic(currbullet, "DIAMOND", "#44FF44", 2, 8, 4, 2, true, 0);
            }
        }
        if (currgame.everyinterval(18)) { 
            CreateRingA1(36, GetCenterX(currgame), GetCenterY(currgame), 1, Math.random()*Math.PI*2, "#4444FF", 2, 3, 1, 0, currgame);
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
