var player;
var bullets = [];
var numdeaths;
var bowapangle = 0;
var numinring = 5;
var speedtoggle = 4;
var bulletrad = 6;
var strokerad = 6;
var strokewid = 3;

function startGame() {
    console.log("startGame(): Running");
    myGameArea.start(); //set up canvas and interval, etc.
}

/* ****OBJECT TYPES**** */
function objPlayer() {
    this.x = x;
    this.y = y;
    this.update = function () {

    }
}

function objEnemyShot(x, y, speed, angle, accel, maxspeed, color, brad, srad, swid) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.angle = angle;
    //this.accel = accel;
    //this.maxspeed = maxspeed;
    this.update = function () {
        ctx = myGameArea.context; //game window
        this.x += this.speed*Math.cos(this.angle);
        this.y += this.speed*Math.sin(this.angle);
        ctx.fillStyle = "#FFFFFF";
        ctx.beginPath();
        ctx.arc(this.x, this.y, brad, 0, 2*Math.PI);
        ctx.fill();
        ctx.strokeStyle = color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, srad, 0, 2*Math.PI);
        ctx.lineWidth = swid;
        ctx.stroke();
    }
}

var myGameArea = {
    canvas: document.getElementById("gamecanvas"),
    start: function () {
        this.context = this.canvas.getContext("2d");
        this.frameNo = 0;
        this.interval = setInterval(updateGame, 20); //in milliseconds. Runs update every 20 millis (50 FPS)
    },
    clear: function () {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}

function updateGame() {
    //console.log("updateGame(): Running");
    //COLLISION
    /*for (i = 0; i < bullets.length; i += 1) {
        if (player.crashWith(bullets[i])) {
            numdeaths++;
        } 
    }*/

    myGameArea.clear();
    myGameArea.frameNo += 1;
    if (everyinterval(4)) { //fire stuff here
        //console.log("updateGame: Creating New Bullet");
        for (i = 0; i < numinring; i += 1) {
            var newshot_bowap_color = "rgb(" + (196 + Math.round(64*Math.cos(myGameArea.frameNo/96))) + ", " + (196 + Math.round(64*Math.sin(myGameArea.frameNo/64))) + ", " + (196 + Math.round(64*Math.sin(myGameArea.frameNo/128))) + ")";
            var newshot_bowap = new objEnemyShot(320, 120, speedtoggle, bowapangle, 0, 0, newshot_bowap_color, bulletrad, strokerad, strokewid);
            bullets.push(newshot_bowap);
            bowapangle += Math.PI*2/numinring;
        }
        bowapangle += Math.sin(myGameArea.frameNo/96);
    }

    //UPDATE
    var itorem = [];
    for (i = 0; i < bullets.length; i += 1) {
        bullets[i].update();
        if (!isinbounds(bullets[i])) {
            itorem.push(i);
        }
    }
    for (i = itorem.length - 1; i >= 0; i -= 1) {
        bullets.splice(itorem[i], 1);
    }

    ctx = myGameArea.context;
    ctx.font="16px Andale Mono";
    ctx.fillText("#BULLET: " + bullets.length , 8, 24);
}

function isinbounds(obj) {
    if (obj.x < -32 || obj.x > 672 || obj.y < -32 || obj.y > 512) {return false;}
    return true;
}

function everyinterval(n) {
    if ((myGameArea.frameNo / n) % 1 == 0) {return true;}
    return false;
}

function incrementNumInRing(n) {
    numinring += n;
    if (numinring < 0) {numinring = 0;}
    if (numinring > 512) {numinring = 512;} //because some people will be stupid
    document.getElementById("numinring").innerHTML = "Number in ring: " + numinring;
}

function incrementSpeed(n) {
    speedtoggle += n;
    if (speedtoggle <= 0) {speedtoggle = 0.1;}
    document.getElementById("speedtoggle").innerHTML = "Bullet&nbsp;&nbsp;Speed: " + speedtoggle.toFixed(1);
}

function incrementBulletRad(n) {
    bulletrad += n;
    if (bulletrad < 0) {bulletrad = 0;}
    if (bulletrad > 128) {bulletrad = 128;} //because some people will be stupid
    document.getElementById("bulletrad").innerHTML = "Bullet&nbsp;Radius: " + bulletrad.toFixed(1);
}

function incrementStrokeRad(n) {
    strokerad += n;
    if (strokerad < 0) {strokerad = 0;}
    if (strokerad > 128) {strokerad = 128;} //because some people will be stupid
    document.getElementById("strokerad").innerHTML = "Stroke&nbsp;Radius: " + strokerad.toFixed(1);
}

function incrementStrokeWidth(n) {
    strokewid += n;
    if (strokewid < 0) {strokewid = 0;}
    if (strokewid > 32) {strokewid = 32;} //because some people will be stupid
    document.getElementById("strokewid").innerHTML = "Stroke&nbsp;&nbsp;Width: " + strokewid.toFixed(1);
}