//Plural Module - DDS Guide 2

"use strict";

// Controller that determines which attacks to display
function getPluralController(cg, canvasid) {
    switch(canvasid) {
        case "gamecanvas_1":
            return new Plural_1(cg);
            break;
        case "gamecanvas_2":
            return new Plural_2(cg);
            break;
        case "gamecanvas_3":
            return new Plural_3(cg);
            break;
        case "gamecanvas_4":
            return new Plural_4(cg);
            break;
        case "gamecanvas_5":
            return new Plural_5(cg);
            break;
        case "gamecanvas_6a":
            return new Plural_6(cg, false);
            break;
        case "gamecanvas_7a":
            return new Plural_7(cg, false);
            break;
        case "gamecanvas_6b":
            return new Plural_6(cg, true);
            break;
        case "gamecanvas_7b":
            return new Plural_7(cg, true);
            break;
        default:
            console.log("getPluralController(): Canvas ID " + canvasid + " could not be recognized. Please check to make sure that the canvas ID is correct and/or supported.");
    }
}

function Plural_1(cg) {
    this.step = 0; // Default to first single in array
    this.singles = [new Single_1(cg)];
    this.update = function () {
        this.singles[this.step].update();
    }
    this.remove = function () { this.singles = []; }
}

function Plural_2(cg) {
    this.step = 0; // Default to first single in array
    this.singles = [new Single_2(cg)];
    this.update = function () {
        this.singles[this.step].update();
    }
    this.remove = function () { this.singles = []; }
}

function Plural_3(cg) {
    this.step = 0; // Default to first single in array
    this.singles = [new Single_3(cg)];
    this.update = function () {
        this.singles[this.step].update();
    }
    this.remove = function () { this.singles = []; }
}

function Plural_4(cg) {
    this.step = 0; // Default to first single in array
    this.singles = [new Single_4(cg)];
    this.update = function () {
        this.singles[this.step].update();
    }
    this.remove = function () { this.singles = []; }
}

function Plural_5(cg) {
    this.step = 0; // Default to first single in array
    this.singles = [new Single_5(cg)];
    this.update = function () {
        this.singles[this.step].update();
    }
    this.remove = function () { this.singles = []; }
}

function Plural_6(cg, trail) {
    this.step = 0; // Default to first single in array
    this.singles = [new Single_6(cg, trail)];
    this.update = function () {
        this.singles[this.step].update();
    }
    this.remove = function () { this.singles = []; }
}

function Plural_7(cg, trail) {
    this.step = 0; // Default to first single in array
    this.singles = [new Single_7(cg, trail)];
    this.update = function () {
        this.singles[this.step].update();
    }
    this.remove = function () { this.singles = []; }
}

function Single_1(cg) {
    this.tasks = [];
    let angle = 0;
    this.update = function () { // Main Loop for a given Danmakanvas Instance
        if (cg.everyinterval(5)) { 
            let objA = CreateShotA1(GetCenterX(cg), GetCenterY(cg), 2, angle, "#FF00FF", 4, 8, 1, 0, cg);
            SetShotGraphic(objA, "DIAMOND", "#FF00FF", 4, 12, 6, 1, true, 0);
            let objA2 = CreateShotA1(GetCenterX(cg), GetCenterY(cg), 3, -angle, "#FF00FF", 4, 8, 1, 0, cg);
            SetShotGraphic(objA2, "DIAMOND", "#FF00FF", 4, 12, 6, 1, true, 0);
            let objB = CreateShotA1(GetCenterX(cg), GetCenterY(cg), 3, angle, "#FFFF00", 4, 8, 1, 0, cg);
            SetShotGraphic(objB, "ARROWHEAD", "#FFFF00", 4, 12, 8, 1, true, 0);
            let objB2 = CreateShotA1(GetCenterX(cg), GetCenterY(cg), 2, -angle, "#FFFF00", 4, 8, 1, 0, cg);
            SetShotGraphic(objB2, "ARROWHEAD", "#FFFF00", 4, 12, 8, 1, true, 0);
            let objA3 = CreateShotA1(GetCenterX(cg), GetCenterY(cg), 2, angle + Math.PI, "#FF00FF", 4, 8, 1, 0, cg);
            SetShotGraphic(objA3, "DIAMOND", "#FF00FF", 4, 12, 6, 1, true, 0);
            let objA4 = CreateShotA1(GetCenterX(cg), GetCenterY(cg), 3, -angle + Math.PI, "#FF00FF", 4, 8, 1, 0, cg);
            SetShotGraphic(objA4, "DIAMOND", "#FF00FF", 4, 12, 6, 1, true, 0);
            let objB3 = CreateShotA1(GetCenterX(cg), GetCenterY(cg), 3, angle + Math.PI, "#FFFF00", 4, 8, 1, 0, cg);
            SetShotGraphic(objB3, "ARROWHEAD", "#FFFF00", 4, 12, 8, 1, true, 0);
            let objB4 = CreateShotA1(GetCenterX(cg), GetCenterY(cg), 2, -angle + Math.PI, "#FFFF00", 4, 8, 1, 0, cg);
            SetShotGraphic(objB4, "ARROWHEAD", "#FFFF00", 4, 12, 8, 1, true, 0);
            angle += 0.3;
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

function Single_2(cg) {
    this.tasks = [];
    let angle = 0;
    this.update = function () { // Main Loop for a given Danmakanvas Instance
        if (cg.everyinterval(5)) { 
            let objA = CreateShotA1(GetCenterX(cg), GetCenterY(cg), 2, angle, "#FF00FF", 4, 8, 1, 0, cg);
            let objA2 = CreateShotA1(GetCenterX(cg), GetCenterY(cg), 3, -angle, "#FF00FF", 4, 8, 1, 0, cg);
            let objB = CreateShotA1(GetCenterX(cg), GetCenterY(cg), 3, angle, "#FFFF00", 4, 8, 1, 0, cg);
            let objB2 = CreateShotA1(GetCenterX(cg), GetCenterY(cg), 2, -angle, "#FFFF00", 4, 8, 1, 0, cg);
            let objA3 = CreateShotA1(GetCenterX(cg), GetCenterY(cg), 2, angle + Math.PI, "#FF00FF", 4, 8, 1, 0, cg);
            let objA4 = CreateShotA1(GetCenterX(cg), GetCenterY(cg), 3, -angle + Math.PI, "#FF00FF", 4, 8, 1, 0, cg);
            let objB3 = CreateShotA1(GetCenterX(cg), GetCenterY(cg), 3, angle + Math.PI, "#FFFF00", 4, 8, 1, 0, cg);
            let objB4 = CreateShotA1(GetCenterX(cg), GetCenterY(cg), 2, -angle + Math.PI, "#FFFF00", 4, 8, 1, 0, cg);
            angle += 0.3;
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

function Single_3(cg) {
    this.tasks = [];
    let angle = 0;
    this.update = function () { // Main Loop for a given Danmakanvas Instance
        if (cg.everyinterval(5)) { 
            let objA = CreateShotA1(GetCenterX(cg), GetCenterY(cg), 2, angle, "#FF00FF", 4, 8, 1, 0, cg);
            SetShotGraphic(objA, "DIAMOND", "#FF00FF", 4, 12, 6, 1, true, 0);
            objA.customupdate = function() {applywvel(objA, 0.015);}
            let objA2 = CreateShotA1(GetCenterX(cg), GetCenterY(cg), 3, -angle, "#FF00FF", 4, 8, 1, 0, cg);
            SetShotGraphic(objA2, "DIAMOND", "#FF00FF", 4, 12, 6, 1, true, 0);
            objA2.customupdate = function() {applywvel(objA2, -0.015*2/3);}
            let objB = CreateShotA1(GetCenterX(cg), GetCenterY(cg), 3, angle, "#FFFF00", 4, 8, 1, 0, cg);
            SetShotGraphic(objB, "ARROWHEAD", "#FFFF00", 4, 12, 8, 1, true, 0);
            objB.customupdate = function() {applywvel(objB, 0.015*2/3);}
            let objB2 = CreateShotA1(GetCenterX(cg), GetCenterY(cg), 2, -angle, "#FFFF00", 4, 8, 1, 0, cg);
            SetShotGraphic(objB2, "ARROWHEAD", "#FFFF00", 4, 12, 8, 1, true, 0);
            objB2.customupdate = function() {applywvel(objB2, -0.015);}
            let objA3 = CreateShotA1(GetCenterX(cg), GetCenterY(cg), 2, angle + Math.PI, "#FF00FF", 4, 8, 1, 0, cg);
            SetShotGraphic(objA3, "DIAMOND", "#FF00FF", 4, 12, 6, 1, true, 0);
            objA3.customupdate = function() {applywvel(objA3, 0.015);}
            let objA4 = CreateShotA1(GetCenterX(cg), GetCenterY(cg), 3, -angle + Math.PI, "#FF00FF", 4, 8, 1, 0, cg);
            SetShotGraphic(objA4, "DIAMOND", "#FF00FF", 4, 12, 6, 1, true, 0);
            objA4.customupdate = function() {applywvel(objA4, -0.015*2/3);}
            let objB3 = CreateShotA1(GetCenterX(cg), GetCenterY(cg), 3, angle + Math.PI, "#FFFF00", 4, 8, 1, 0, cg);
            SetShotGraphic(objB3, "ARROWHEAD", "#FFFF00", 4, 12, 8, 1, true, 0);
            objB3.customupdate = function() {applywvel(objB3, 0.015*2/3);}
            let objB4 = CreateShotA1(GetCenterX(cg), GetCenterY(cg), 2, -angle + Math.PI, "#FFFF00", 4, 8, 1, 0, cg);
            SetShotGraphic(objB4, "ARROWHEAD", "#FFFF00", 4, 12, 8, 1, true, 0);
            objB4.customupdate = function() {applywvel(objB4, -0.015);}
            angle += 0.3;
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

function Single_4(cg) {
    this.tasks = [];
    let angle = 0;
    this.update = function () { // Main Loop for a given Danmakanvas Instance
        if (cg.everyinterval(5)) { 
            let objA = CreateShotA1(GetCenterX(cg), GetCenterY(cg), 2, angle, "#FF00FF", 4, 8, 1, 0, cg);
            objA.customupdate = function() {applywvel(objA, 0.015);}
            let objA2 = CreateShotA1(GetCenterX(cg), GetCenterY(cg), 3, -angle, "#FF00FF", 4, 8, 1, 0, cg);
            objA2.customupdate = function() {applywvel(objA2, -0.015*2/3);}
            let objB = CreateShotA1(GetCenterX(cg), GetCenterY(cg), 3, angle, "#FFFF00", 4, 8, 1, 0, cg);
            objB.customupdate = function() {applywvel(objB, 0.015*2/3);}
            let objB2 = CreateShotA1(GetCenterX(cg), GetCenterY(cg), 2, -angle, "#FFFF00", 4, 8, 1, 0, cg);
            objB2.customupdate = function() {applywvel(objB2, -0.015);}
            let objA3 = CreateShotA1(GetCenterX(cg), GetCenterY(cg), 2, angle + Math.PI, "#FF00FF", 4, 8, 1, 0, cg);
            objA3.customupdate = function() {applywvel(objA3, 0.015);}
            let objA4 = CreateShotA1(GetCenterX(cg), GetCenterY(cg), 3, -angle + Math.PI, "#FF00FF", 4, 8, 1, 0, cg);
            objA4.customupdate = function() {applywvel(objA4, -0.015*2/3);}
            let objB3 = CreateShotA1(GetCenterX(cg), GetCenterY(cg), 3, angle + Math.PI, "#FFFF00", 4, 8, 1, 0, cg);
            objB3.customupdate = function() {applywvel(objB3, 0.015*2/3);}
            let objB4 = CreateShotA1(GetCenterX(cg), GetCenterY(cg), 2, -angle + Math.PI, "#FFFF00", 4, 8, 1, 0, cg);
            objB4.customupdate = function() {applywvel(objB4, -0.015);}
            angle += 0.3;
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

function Single_5(cg) {
    this.tasks = [];
    let attackphase = 0;
    this.update = function () { // Main Loop for a given Danmakanvas Instance
        if (cg.everyinterval(20) && attackphase % 2 === 0) { 
            CreateSpreadStackA1(3, 8, Math.PI/6, 0.2, GetCenterX(cg), 32, 4, Math.PI/2, "#FFFF00", 6, 5, 2, 0, cg);
            CreateSpreadA1(21, Math.PI/60, GetCenterX(cg), 32, 4, Math.PI/2, "#00FFFF", 0, 3, 3, 0, cg);
            CreateSpreadA1(21, Math.PI/60, GetCenterX(cg), 32, 5.4, Math.PI/2, "#00FFFF", 0, 3, 3, 0, cg);
            attackphase += 1;
        } else if (cg.everyinterval(20) && attackphase % 2 === 1) { 
            CreateSpreadStackA1(4, 10, Math.PI/8*Math.cos(attackphase*1.7), 0.2, GetCenterX(cg), 32, 3, Math.PI/2, "#AA00FF", 3, 5, 2, 0, cg);
            attackphase += 1;
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

function Single_6(cg, trail) {
    this.tasks = [];
    let size = 4;
    if (trail) {
        cg.framereset = false;
        size = 1;
    }
    this.update = function () { // Main Loop for a given Danmakanvas Instance
        if (cg.everyinterval(30)) { 
            CreateRingA1(12, GetCenterX(cg), GetCenterY(cg), 6, Math.PI/2, "rgb(" + Math.random()*255 + "," + Math.random()*255 + "," + Math.random()*255 + ")", 0, size, size, 0, cg);
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

function Single_7(cg, trail) {
    this.tasks = [];
    let size = 4;
    if (trail) {
        cg.framereset = false;
        size = 1;
    }
    this.update = function () { // Main Loop for a given Danmakanvas Instance
        if (cg.everyinterval(30)) { 
            CreateRingA1(12, GetCenterX(cg), GetCenterY(cg), 6, Math.random()*Math.PI*2, "rgb(" + Math.random()*255 + "," + Math.random()*255 + "," + Math.random()*255 + ")", 0, size, size, 0, cg);
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

// Function telling the target to increment its angle by wvel every frame. WARNING: Angular velocity is in radians!
function applywvel(target, wvel) {
    target.angle += wvel;
}
