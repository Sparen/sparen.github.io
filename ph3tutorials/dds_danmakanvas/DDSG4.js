//Plural Module - DDS Guide 4

"use strict";

let CANVAS_1_N = 3;
let CANVAS_2_N = 5;
let CANVAS_2_NB = 32;
let CANVAS_5F_SR = 25;

// Controller that determines which attacks to display
function getPluralController(currgame, canvasid) {
    switch(canvasid) {
        case "gamecanvas_1":
            return new Plural_Constructor([new Single_1(currgame)], currgame);
            break;
        case "gamecanvas_2":
            return new Plural_Constructor([new Single_2(currgame)], currgame);
            break;
        case "gamecanvas_3":
            return new Plural_Constructor([new Single_3(currgame)], currgame);
            break;
        case "gamecanvas_4a":
            return new Plural_Constructor([new Single_4a(currgame)], currgame);
            break;
        case "gamecanvas_4b":
            return new Plural_Constructor([new Single_4b(currgame)], currgame);
            break;
        case "gamecanvas_5a":
            return new Plural_Constructor([new Single_5a(currgame)], currgame);
            break;
        case "gamecanvas_5b":
            return new Plural_Constructor([new Single_5b(currgame)], currgame);
            break;
        case "gamecanvas_5c":
            return new Plural_Constructor([new Single_5c(currgame)], currgame);
            break;
        case "gamecanvas_5d":
            return new Plural_Constructor([new Single_5d(currgame)], currgame);
            break;
        case "gamecanvas_5e":
            return new Plural_Constructor([new Single_5e(currgame)], currgame);
            break;
        case "gamecanvas_5f":
            return new Plural_Constructor([new Single_5f(currgame)], currgame);
            break;
        case "gamecanvas_6a":
            return new Plural_Constructor([new Single_5a(currgame)], currgame);
            break;
        case "gamecanvas_6b":
            return new Plural_Constructor([new Single_6b(currgame)], currgame);
            break;
        case "gamecanvas_6c":
            return new Plural_Constructor([new Single_5b(currgame)], currgame);
            break;
        case "gamecanvas_6d":
            return new Plural_Constructor([new Single_6d(currgame)], currgame);
            break;
        case "gamecanvas_6e":
            return new Plural_Constructor([new Single_5c(currgame)], currgame);
            break;
        case "gamecanvas_6f":
            return new Plural_Constructor([new Single_6f(currgame)], currgame);
            break;
        case "gamecanvas_7":
            return new Plural_Constructor([new Single_7(currgame)], currgame);
            break;
        case "gamecanvas_8":
            return new Plural_Constructor([new Single_8(currgame)], currgame);
            break;
        case "gamecanvas_9":
            return new Plural_Constructor([new Single_9(currgame)], currgame);
            break;
        default:
            console.log("getPluralController(): Canvas ID " + canvasid + " could not be recognized. Please check to make sure that the canvas ID is correct and/or supported.");
    }
}

function Plural_Constructor(singles, currgame) {
    this.step = 0; // Default to first single in array
    this.singles = singles;
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
            let newshots1 = CreateSpreadA1(5, Math.PI/15, GetCenterX(currgame) + 64*Math.cos(angleT1), GetCenterY(currgame) + 64*Math.sin(angleT1), 1, angleT1 - Math.PI/3, "#FF8888", 4, 8, 1, 0, currgame);
            let objctr = 0;
            for (objctr = 0; objctr < newshots1.length; objctr += 1) {
                let currbullet = newshots1[objctr];
                SetShotGraphic(currbullet, "OVAL", "#FF4444", 2, 8, 4, 2, true, 0);
            }
            let newshots2 = CreateSpreadA1(3, Math.PI/18, GetCenterX(currgame) + 128*Math.cos(angleT2), GetCenterY(currgame) + 128*Math.sin(angleT2), 1.25, angleT2 + Math.PI/3, "#FF8888", 4, 8, 1, 0, currgame);
            objctr = 0;
            for (objctr = 0; objctr < newshots2.length; objctr += 1) {
                let currbullet = newshots2[objctr];
                SetShotGraphic(currbullet, "DIAMOND", "#44FF44", 2, 8, 4, 2, true, 0);
            }
        }
        if (currgame.everyinterval(18)) { 
            CreateRingA1(36, GetCenterX(currgame), GetCenterY(currgame), 1, Math.random()*Math.PI*2, "#4444FF", 1.5, 3, 1.5, 0, currgame);
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

function Subpattern1(x, y, currgame) {
	CreateRingA1(36, x, y, 2, 0, "#44FF66", 3, 4, 1, 0, currgame);
}

function Subpattern2(x, y, currgame) {
	CreateRingStackA1(8, 6, 0.267, x, y, 2, 0, "#FF6644", 1.333, 5, 3, 0, currgame);
}

function Subpattern1B(x, y, currgame) {
	CreateRingA1(36, x, y, 4, 0, "#44FF66", 3, 4, 1, 0, currgame);
}

function Subpattern2B(x, y, currgame) {
	CreateRingStackA1(8, 6, 0.533, x, y, 2, 0, "#FF6644", 2.667, 5, 3, 0, currgame);
}

function Single_4a(currgame) {
    this.tasks = [];
    this.update = function () { // Main Loop for a given Danmakanvas Instance
        if (currgame.everyinterval(50)) { 
            Subpattern1(GetCenterX(currgame), GetCenterY(currgame), currgame);
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

function Single_4b(currgame) {
    this.tasks = [];
    this.update = function () { // Main Loop for a given Danmakanvas Instance
        if (currgame.everyinterval(50)) { 
            Subpattern2(GetCenterX(currgame), GetCenterY(currgame), currgame);
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

function Single_5a(currgame) {
    this.tasks = [];
    this.update = function () { // Main Loop for a given Danmakanvas Instance
        if (currgame.everyinterval(50)) { 
            Subpattern1(GetCenterX(currgame), GetCenterY(currgame), currgame);
            Subpattern2(GetCenterX(currgame), GetCenterY(currgame), currgame);
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

function Single_5b(currgame) {
    this.tasks = [];
    this.update = function () { // Main Loop for a given Danmakanvas Instance
        if (currgame.everyinterval(50)) { 
            Subpattern1(GetCenterX(currgame), GetCenterY(currgame), currgame);
        }
        if (currgame.frameNo % 50 == 25) {
            Subpattern2(GetCenterX(currgame), GetCenterY(currgame), currgame);
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

function Single_5c(currgame) {
    this.tasks = [];
    this.update = function () { // Main Loop for a given Danmakanvas Instance
        if (currgame.everyinterval(100)) { 
            Subpattern1(GetCenterX(currgame) + 64, GetCenterY(currgame) - 64, currgame);
            Subpattern2(GetCenterX(currgame) - 64, GetCenterY(currgame) - 64, currgame);
        }
        if (currgame.frameNo % 100 == 50) {
            Subpattern1(GetCenterX(currgame) - 64, GetCenterY(currgame) - 64, currgame);
            Subpattern2(GetCenterX(currgame) + 64, GetCenterY(currgame) - 64, currgame);
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

function Single_5d(currgame) {
    this.tasks = [];
    this.update = function () { // Main Loop for a given Danmakanvas Instance
        if (currgame.everyinterval(100)) { 
            Subpattern1(GetCenterX(currgame) + 64, GetCenterY(currgame) - 64, currgame);
        }
        if (currgame.frameNo % 100 == 25) {
            Subpattern2(GetCenterX(currgame) + 64, GetCenterY(currgame) - 64, currgame);
        }
        if (currgame.frameNo % 100 == 50) {
            Subpattern1(GetCenterX(currgame) - 64, GetCenterY(currgame) - 64, currgame);
        }
        if (currgame.frameNo % 100 == 75) {
            Subpattern2(GetCenterX(currgame) - 64, GetCenterY(currgame) - 64, currgame);
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

function Single_5e(currgame) {
    this.tasks = [];
    let counter = 0;
    this.update = function () { // Main Loop for a given Danmakanvas Instance
        if (currgame.everyinterval(20)) { 
            Subpattern1(GetCenterX(currgame) + 96 * Math.cos(Math.PI*2/5*counter), GetCenterY(currgame) + 96 * Math.sin(Math.PI*2/5*counter), currgame);
            counter += 1;
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

function setCanvas5fSpawn(n) {
	CANVAS_5F_SR = n;
}

function Single_5f(currgame) {
    this.tasks = [];
    this.update = function () { // Main Loop for a given Danmakanvas Instance
        if (currgame.everyinterval(100)) { 
            Subpattern2(GetCenterX(currgame) + 96, GetCenterY(currgame), currgame);
            Subpattern2(GetCenterX(currgame) - 96, GetCenterY(currgame), currgame);
        }
        if (currgame.frameNo % 100 == CANVAS_5F_SR) {
            Subpattern1(GetCenterX(currgame), GetCenterY(currgame) + 64, currgame);
            Subpattern1(GetCenterX(currgame), GetCenterY(currgame) - 64, currgame);
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

function Single_6b(currgame) {
    this.tasks = [];
    this.update = function () { // Main Loop for a given Danmakanvas Instance
        if (currgame.everyinterval(50)) { 
            Subpattern1B(GetCenterX(currgame), GetCenterY(currgame), currgame);
            Subpattern2B(GetCenterX(currgame), GetCenterY(currgame), currgame);
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

function Single_6d(currgame) {
    this.tasks = [];
    this.update = function () { // Main Loop for a given Danmakanvas Instance
        if (currgame.everyinterval(50)) { 
            Subpattern1B(GetCenterX(currgame), GetCenterY(currgame), currgame);
        }
        if (currgame.frameNo % 50 == 25) {
            Subpattern2B(GetCenterX(currgame), GetCenterY(currgame), currgame);
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

function Single_6f(currgame) {
    this.tasks = [];
    this.update = function () { // Main Loop for a given Danmakanvas Instance
        if (currgame.everyinterval(100)) { 
            Subpattern1B(GetCenterX(currgame) + 64, GetCenterY(currgame) - 64, currgame);
            Subpattern2B(GetCenterX(currgame) - 64, GetCenterY(currgame) - 64, currgame);
        }
        if (currgame.frameNo % 100 == 50) {
            Subpattern1B(GetCenterX(currgame) - 64, GetCenterY(currgame) - 64, currgame);
            Subpattern2B(GetCenterX(currgame) + 64, GetCenterY(currgame) - 64, currgame);
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

function Single_7(currgame) {
    this.tasks = [];
    this.update = function () { // Main Loop for a given Danmakanvas Instance
        if (currgame.everyinterval(120)) { 
            this.tasks.push(new Single_7_Task_Ring(currgame));
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

function Single_7_Task_Ring(currgame) {
    this.counter = 0;
    this.maxcounter = 60; // Maximum time allowed for task to run. Use -1 for non-terminating tasks
    this.finished = false;
    let initangle = 0;
    this.update = function () {
    	if (currgame.everyinterval(3)) { 
            CreateRingA2(6, GetCenterX(currgame) + 96 * Math.cos(initangle), GetCenterY(currgame) + 96 * Math.sin(initangle), 0, initangle, 0.01, 3, "#FFFF00", 3, 5, 1, 0, -1, currgame);
        	initangle += Math.PI*3/20; // We want a 540 degree span
        }

        this.counter += 1;
        if (this.counter === this.maxcounter) {
            this.finished = true;
        }
    }
    this.remove = function () { // Deconstructor. Called by the Single object. Destroy any subtasks or objects created by the task here.
    }
}

function Single_8(currgame) {
    this.tasks = [];
    this.update = function () { // Main Loop for a given Danmakanvas Instance
        if (currgame.everyinterval(120)) { 
        	let initangle = 0;
            for (let i = 0; i < 20; i += 1) { 
	            CreateRingA2(6, GetCenterX(currgame) + 96 * Math.cos(initangle), GetCenterY(currgame) + 96 * Math.sin(initangle), 0, initangle, 0.01, 3, "#FFFF00", 3, 5, 1, 0, -1, currgame);
	        	initangle += Math.PI*3/20; // We want a 540 degree span
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

function Single_9(currgame) {
    this.tasks = [];
    this.update = function () { // Main Loop for a given Danmakanvas Instance
        if (currgame.everyinterval(120)) { 
            this.tasks.push(new Single_9_Task_Ring(currgame));
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

function Single_9_Task_Ring(currgame) {
    this.counter = 0;
    this.maxcounter = 60; // Maximum time allowed for task to run. Use -1 for non-terminating tasks
    this.finished = false;
    let initangle = 0;
    this.update = function () {
    	if (currgame.everyinterval(3)) { 
            CreateShotA2(GetCenterX(currgame) + 96 * Math.cos(initangle), GetCenterY(currgame) + 96 * Math.sin(initangle), 0, initangle + Math.PI, 0.01, 3, "#FFFF00", 3, 5, 1, 0, -1, currgame);
        	initangle += Math.PI*3/20; // We want a 540 degree span
        }

        this.counter += 1;
        if (this.counter === this.maxcounter) {
            this.finished = true;
        }
    }
    this.remove = function () { // Deconstructor. Called by the Single object. Destroy any subtasks or objects created by the task here.
    }
}
