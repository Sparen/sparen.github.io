var player;
var bullets = [];
var boss;
var numdeaths;
var bowapangle = 0;

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

function objEnemy() {
    this.x = x;
    this.y = y;
    this.update = function () {
        
    }
}

function objEnemyShot(x, y, speed, angle, accel, maxspeed, color) {
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
        ctx.arc(this.x, this.y, 6, 0, 2*Math.PI);
        ctx.fill();
        ctx.strokeStyle = color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, 6, 0, 2*Math.PI);
        ctx.lineWidth = 3;
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
        for (i = 0; i < 5; i += 1) {
            var newshot_bowap_color = "rgb(" + (196 + Math.round(64*Math.cos(myGameArea.frameNo/96))) + ", " + (196 + Math.round(64*Math.sin(myGameArea.frameNo/64))) + ", " + (196 + Math.round(64*Math.sin(myGameArea.frameNo/128))) + ")";
            var newshot_bowap = new objEnemyShot(320, 120, 4, bowapangle, 0, 0, newshot_bowap_color);
            bullets.push(newshot_bowap);
            bowapangle += Math.PI*2/5;
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

function inherit(proto) {
    function F() {}
    F.prototype = proto;
    return new F;
}
