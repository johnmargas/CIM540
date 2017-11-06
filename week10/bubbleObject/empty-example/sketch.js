var bubble1;
var bubble2;
var multiBubble = [];

function setup() {
    createCanvas(400, 400);

    for(var i = 0; i < 100; i++) {
        var r = random(256);
        var g = random(256);
        var b = random(256);
        multiBubble.push(new bubble(random(width), random(height), random(100), r, g, b, 0));
    }
}

function draw() {
    background(255);

    for(var i = 0; i < multiBubble.length; i++) {
        multiBubble[i].display();
        multiBubble[i].move();
        multiBubble[i].checkPos();

        if(multiBubble[i].checkPos() == true)
            multiBubble[i].direction = 0;
        else if (multiBubble[i].checkPos() == false)
            multiBubble[i].direction = 1;

        console.log(multiBubble[i].direction);
    }
}

function bubble(tempX, tempY, tempDiameter, tempR, tempG, tempB, tempDirection) {
    this.x = tempX;
    this.y = tempY;
    this.diameter = tempDiameter;
    this.r = tempR;
    this.g = tempG;
    this.b = tempB;
    this.direction = tempDirection;

    this.display = function () {
        fill(this.r, this.g, this.b);
        ellipse(this.x, this.y, this.diameter, this.diameter);
    }

    this.move = function () {
        if(this.direction == 1) {
            this.x = this.x + random(0, 5);
            this.y = this.y + random(0, 5);
        } else if(this.direction == 0) {
            this.x = this.x - random(0, 5);
            this.y = this.y - random(0, 5);
        }
    }

    this.checkPos = function () {
        if (this.x > width || this.y > height) {
            this.direction = 0;
            return true;
        } else if (this.x < 0 || this.y < 0) {
            this.direction = 1;
            return false;
        }
    }
}
