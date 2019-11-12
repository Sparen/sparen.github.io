//Plural Module - DDS Guide 1
//Contents of the two canvases based off of examples from Danmakanvas Repository but trimmed down to not wreck processors since both are running at once

"use strict";

let SPEED_USER_1 = 4.5;
let SPEED_USER_2 = 1;
let RATE_USER_1 = 6;
let RATE_USER_2 = 12;

// Controller that determines which attacks to display
function getPluralController(currgame, canvasid) {
    switch(canvasid) {
        case "gamecanvas_1":
            return new Plural_1(currgame);
            break;
        case "gamecanvas_2":
            return new Plural_2(currgame);
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

// Constructor for a Plural
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

// Constructor for a Single
function Single_1(currgame) {
    this.tasks = [];
    CreateText(4, 40, "#FFFFFF", 12, "Monospace", "start", "Non-Directional (Standard)", currgame);
    CreateText(4, 60, "#FFFFFF", 12, "Monospace", "start", "Non-Directional (w/ Rotation)", currgame);
    CreateText(4, 80, "#FFFFFF", 12, "Monospace", "start", "Directional", currgame);
    CreateText(4, 100, "#FFFFFF", 12, "Monospace", "start", "Directional", currgame);
    CreateText(4, 120, "#FFFFFF", 12, "Monospace", "start", "Vector", currgame);
    CreateText(4, 140, "#FFFFFF", 12, "Monospace", "start", "Vector", currgame);
    this.update = function () { // Main Loop for a given Danmakanvas Instance
        if (currgame.everyinterval(20)) { 
            CreateShotA1(240, 36, 2, 0, "#FF8888", 4, 8, 1, 0, currgame);
            let objB = CreateShotA1(240, 56, 2, 0, "#00FFFF", 4, 8, 1, 0, currgame);
            SetShotGraphic(objB, "DIAMOND", "#00FFFF", 4, 8, 8, 1, false, 0.125);
            let objC = CreateShotA1(240, 76, 2, 0, "#FF00FF", 4, 8, 1, 0, currgame);
            SetShotGraphic(objC, "DIAMOND", "#FF00FF", 4, 12, 6, 1, true, 0);
            let objD = CreateShotA1(240, 96, 2, 0, "#FFFF00", 4, 8, 1, 0, currgame);
            SetShotGraphic(objD, "OVAL", "#FFFF00", 4, 12, 8, 1, true, 0);
            let objE = CreateShotA1(240, 116, 2, 0, "#88FF88", 4, 8, 1, 0, currgame);
            SetShotGraphic(objE, "TRIANGLE", "#88FF88", 4, 12, 10, 1, true, 0);
            let objF = CreateShotA1(240, 136, 2, 0, "#8888FF", 4, 8, 1, 0, currgame);
            SetShotGraphic(objF, "ARROWHEAD", "#AAAAFF", 4, 12, 8, 1, true, 0);
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
    CreateText(4, 40, "#FFFFFF", 12, "Monospace", "start", "Speed (px/fr)", currgame);
    CreateText(104, 40, "#FFFFFF", 12, "Monospace", "start", "Spawn Interval (fr)", currgame);
    CreateText(4, 60, "#FFFFFF", 12, "Monospace", "start", "3 (Low)", currgame);
    CreateText(104, 60, "#FFFFFF", 12, "Monospace", "start", "4 (Low)", currgame);
    CreateText(4, 100, "#FFFFFF", 12, "Monospace", "start", "6 (High)", currgame);
    CreateText(104, 100, "#FFFFFF", 12, "Monospace", "start", "4 (Low)", currgame);
    CreateText(4, 80, "#FFFFFF", 12, "Monospace", "start", "3 (Low)", currgame);
    CreateText(104, 80, "#FFFFFF", 12, "Monospace", "start", "8 (High)", currgame);
    CreateText(4, 120, "#FFFFFF", 12, "Monospace", "start", "6 (High)", currgame);
    CreateText(104, 120, "#FFFFFF", 12, "Monospace", "start", "8 (High)", currgame);

    let text_speed_1 = CreateText(4, 160, "#FFFFFF", 12, "Monospace", "start", "" + SPEED_USER_1, currgame);
    let text_rate_1 = CreateText(104, 160, "#FFFFFF", 12, "Monospace", "start", "" + RATE_USER_1, currgame);
    let text_speed_2 = CreateText(4, 180, "#FFFFFF", 12, "Monospace", "start", "" + SPEED_USER_2, currgame);
    let text_rate_2 = CreateText(104, 180, "#FFFFFF", 12, "Monospace", "start", "" + RATE_USER_2, currgame);
    this.update = function () { // Main Loop for a given Danmakanvas Instance
        if (currgame.everyinterval(4)) { 
            CreateShotA1(240, 56, 3, 0, "#FF8888", 4, 8, 2, 0, currgame);
            CreateShotA1(240, 96, 6, 0, "#FF8888", 4, 8, 2, 0, currgame);
        }
        if (currgame.everyinterval(8)) { 
            CreateShotA1(240, 76, 3, 0, "#FF8888", 4, 8, 2, 0, currgame);
            CreateShotA1(240, 116, 6, 0, "#FF8888", 4, 8, 2, 0, currgame);
        }
        if (currgame.everyinterval(RATE_USER_1)) { 
            text_speed_1.content = SPEED_USER_1;
            text_rate_1.content = RATE_USER_1;
            CreateShotA1(240, 156, SPEED_USER_1, 0, "#00FFFF", 4, 8, 2, 0, currgame);
        }
        if (currgame.everyinterval(RATE_USER_2)) { 
            text_speed_2.content = SPEED_USER_2;
            text_rate_2.content = RATE_USER_2;
            CreateShotA1(240, 176, SPEED_USER_2, 0, "#00FFFF", 4, 8, 2, 0, currgame);
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

function updateSpeedAndRate() {
    SPEED_USER_1 = document.getElementById("speed1").value;
    SPEED_USER_2 = document.getElementById("speed2").value;
    RATE_USER_1 = document.getElementById("rate1").value;
    RATE_USER_2 = document.getElementById("rate2").value;
}
