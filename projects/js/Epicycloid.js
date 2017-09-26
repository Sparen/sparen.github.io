//Fooling Around - 2017 Sept 25

"use strict"

var radSmall = 48; //DEFAULT 48
var radBig = 144; //DEFAULT 144
var radEffect = 2; //DEFAULT 2
var colorSmall = "salmon"; //DEFAULT SALMON
var colorBig = "dodgerblue"; //DEFAULT DODGERBLUE
var colorEffect = "lime"; //DEFAULT LIME
var swidthBig = 2; //DEFAULT 2
var swidthSmall = 2; //DEFAULT 2
var swidthEffect = 0.5; //DEFAULT 0.5

var interval = 20; //time between updates. DEFAULT 20
var frames = 0; //frame count - used as angle value.
var counter = 0; //proper frame counter.
var frameincrement = 0.02; //frame increment per interval. In radians. DEFAULT 0.02
var numCirc = 6; //Does not change epicycloid. Defaults to a multiple of 3.
var queues = [];
var maxparticle = 32; //per circle. Defaults to 32
var bowapspeedcounter = 180; //Sine multiplier for BoWaP Mode. Defaults to 180

var BOWAP = false; //Default false
var mainlines = true; //Default true
var sublines = true; //Default true

//Runs once, sets the interval for updates
function loadEpicycloid() {
    console.log("loadEpicycloid(): Running");
    setupEpicycloidA1();
    getMode();
    setInterval(function(){ updateEpicycloidA1(); }, interval);
}

//Resets the entire SVG, including the circle queues.
function setupEpicycloidA1() {
    console.log("setupEpicycloidA1(): Running");
    for (var i = 0; i < numCirc; i += 1) {
        queues[i] = new Queue();
    }
}

function updateEpicycloidA1() {
    var svg = '<svg xmlns="http://www.w3.org/2000/svg" width="640" height="640" version="1.1"' +
        'xmlns:xlink="http://www.w3.org/1999/xlink">' +
        '<rect x="2" y="2" height="636" width="636" fill="#222222" stroke="#CCCCCC" stroke-width="2"></rect>';

    //Draw main circle
    svg += '<circle cx="320" cy="320" r="' + radBig + '" stroke="' + colorBig + '" stroke-width="' + swidthBig + '" fill="none"></circle>'

    //Draw sub circles
    for (var i = 0; i < numCirc; i += 1) {
        var tx = 320 + (radBig + radSmall) * Math.cos(frames);
        var ty = 320 + (radBig + radSmall) * Math.sin(frames);
        svg += '<circle cx="' + tx + '" cy="' + ty + '" r="' + radSmall + '" stroke="' + colorSmall + '" stroke-width="' + swidthSmall + '" fill="none"></circle>';

        while (queues[i].getLength() > maxparticle) {
            queues[i].dequeue();
        }
        //Enqueue a particle
        var px = 320 + (radBig + radSmall) * Math.cos(frames) - radSmall * Math.cos((radBig + radSmall) * frames / radSmall);
        var py = 320 + (radBig + radSmall) * Math.sin(frames) - radSmall * Math.sin((radBig + radSmall) * frames / radSmall);
        queues[i].enqueue('<circle cx="' + px + '" cy="' + py + '" r="' + radEffect + '" stroke="' + colorEffect + '" stroke-width="' + swidthEffect + '" fill="none"></circle>');
        var queueLength = queues[i].getLength();
        for (var j = 0; j < queueLength; j += 1) {
            //pop each one off and add it back
            var next = queues[i].dequeue();
            svg += next;
            queues[i].enqueue(next);
        }

        //Let's add lines
        if (mainlines) {
            svg += '<path d="M' + 320 + ' ' + 320 + ' L ' + tx + ' ' + ty + '" stroke-width="1" stroke="#666666" fill="none"></path>';
        }
        if (sublines) {
            svg += '<path d="M' + tx + ' ' + ty + ' L ' + px + ' ' + py + '" stroke-width="1" stroke="#AAAAAA" fill="none"></path>';
        }

        frames += 2*Math.PI/numCirc;
    }
    frames -= 2*Math.PI; //Reset to actual frame count.

    svg += '</svg>';

    if (BOWAP) {
        frames += Math.PI * frameincrement*Math.sin(counter/bowapspeedcounter); //BOWAP mode
    } else {
        frames += frameincrement; //standard mode
    }
    counter += 1;
    document.getElementById("epicycloid-main").innerHTML = svg;
}

/* ***** Change the simulation ***** */
function getMode() {
    var retval = BOWAP ? "Border of Wave of Particle" : "Regular";
    document.getElementById("currentmode").innerHTML = "[Current: " + retval + "]";
}

function setMode(bowapbool) {
    BOWAP = bowapbool;
}

function setMainLines(bowapbool) {
    mainlines = bowapbool;
}

function setSubLines(bowapbool) {
    sublines = bowapbool;
}

function incrementMaxParticles(dpart) {
    maxparticle += dpart;
    if (maxparticle < 0) {maxparticle = 0;} //because some people will be stupid
    document.getElementById("maxparticle").innerHTML = "Max # Particle Effects: " + maxparticle.toFixed(1);
}

function incrementSmallRad(dr) {
    radSmall += dr;
    if (radSmall < 0) {radSmall = 0;} //because some people will be stupid
    document.getElementById("radsmall").innerHTML = "Radius of Outer Circles: " + radSmall.toFixed(1);
}

function incrementBigRad(dr) {
    radBig += dr;
    if (radBig < 0) {radBig = 0;} //because some people will be stupid
    document.getElementById("radbig").innerHTML = "Radius of Inner Circle: " + radBig.toFixed(1);
}

function incrementEffectRad(dr) {
    radEffect += dr;
    if (radEffect < 0) {radEffect = 0;} //because some people will be stupid
    document.getElementById("radeffect").innerHTML = "Radius of Effect Circles: " + radEffect.toFixed(1);
}

function incrementSmallStroke(ds) {
    swidthSmall += ds;
    if (swidthSmall < 0) {swidthSmall = 0;} //because some people will be stupid
    document.getElementById("strokesmall").innerHTML = "Stroke Width of Outer Circles: " + swidthSmall.toFixed(1);
}

function incrementBigStroke(ds) {
    swidthBig += ds;
    if (swidthBig < 0) {swidthBig = 0;} //because some people will be stupid
    document.getElementById("strokebig").innerHTML = "Stroke Width of Big Circle: " + swidthBig.toFixed(1);
}

function incrementEffectStroke(ds) {
    swidthEffect += ds;
    if (swidthEffect < 0) {swidthEffect = 0;} //because some people will be stupid
    document.getElementById("strokeeffect").innerHTML = "Stroke Width of Effect Circles: " + swidthEffect.toFixed(1);
}