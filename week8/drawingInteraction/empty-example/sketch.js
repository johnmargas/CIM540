var centerX = 0;
var centerY = 0;
var bgColor;

var hairRed, hairGreen, hairBlue;

function setup() {
    bgColor = color(255, 255, 0);
    
    createCanvas(500, 500);
    
    centerX = width / 2;
    centerY = height / 2;
    
    hairRed = createSlider(0, 255, 0);
    hairGreen = createSlider(0, 255, 0);
    hairBlue = createSlider(0, 255, 0);
}

function draw() {
    background(bgColor);
    
    //centerX = mouseX;
    //centerY = mouseY;

    fill(255)
    stroke(0);
    strokeWeight(1);

    //face
    ellipse(centerX, centerY, 100, 100);
    
    //nose
    var noseWiggle = map(mouseX, 0, width, -10, 10);
    ellipse(centerX + noseWiggle, centerY + 10, 20, 20);
    
    //eyes
    ellipse(centerX - 10, centerY - 10, 10, 20);
    ellipse(centerX + 10, centerY - 10, 10, 20);
    rectMode(CENTER);
    rect(centerX, centerY + 30, 50, 15, 5);
    rect(centerX, centerY + 30, 50, 1, 1);

    noFill();
    stroke(hairRed.value(), hairGreen.value(), hairBlue.value());
    strokeWeight(4);
    arc(centerX, centerY, 100, 100, 0, PI);
    strokeWeight(30);
    arc(centerX, centerY, 100, 100, PI, TWO_PI);
}

function mousePressed() {
    bgColor = color(0, 255, 255);
}
