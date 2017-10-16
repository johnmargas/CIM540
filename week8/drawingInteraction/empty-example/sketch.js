var centerX = 0;
var centerY = 0;

var bgColor, bgImage, bgImage2, rocket, currentBgImage, bgChange, bgChange2;

var hitZoneX = 100;
var hitZoneY = 100;

var hairRed, hairGreen, hairBlue;

function preload() {
    bgImage = loadImage("assets/sky.jpg");
    bgImage2 = loadImage("assets/space.jpg");
    rocket = loadImage("assets/rocket.png");
}

function setup() {
    bgColor = color(255, 255, 0);
    
    createCanvas(500, 500);
    
    centerX = width / 2;
    centerY = height / 2;
    
    var redText = createP("Red");
    hairRed = createSlider(0, 255, 0);
    var greenText = createP("Green");
    hairGreen = createSlider(0, 255, 0);
    var blueText = createP("Blue");
    hairBlue = createSlider(0, 255, 0);
    
    bgChange = createButton("space");
    bgChange.position(100, 500);
    bgChange.mousePressed(changeBgFunction);
    bgChange2 = createButton("sky");
    bgChange2.position(300, 500);
    bgChange2.mousePressed(changeBgFunction2);
    
    currentBgImage = bgImage;
}

function draw() {
    //console.log(mouseX + ", " + mouseY);
    
    background(bgColor);
    
    image(currentBgImage, 0, 0);
    
    centerX = mouseX;
    centerY = mouseY;

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
    
    stroke("white");
    ellipse(hitZoneX, hitZoneY, 10, 10);
    /*
    if(mouseX == hitZoneX && mouseY == hitZoneY)
        image(rocket, 100, 100);
    */
    
    var hitZoneDist = dist(mouseX, mouseY, hitZoneX, hitZoneY);
    
    if(hitZoneDist <= 20)
        image(rocket, 100, 100);
}

function mousePressed() {
    bgColor = color(255, 0, 0);
}

function changeBgFunction() {
    currentBgImage = bgImage2;
}

function changeBgFunction2() {
    currentBgImage = bgImage;
}