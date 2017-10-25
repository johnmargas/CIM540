var frameAmount = 4;
var frameArray = [];
var currentFrame = 0;


var interval = 2000;
var pMillis = 0;

function preload() {
    for (var i = 0; i < frameAmount; i++) {
        var frameString = "assets/Thatwasclose" + i + ".jpg";
        frameArray[i] = loadImage(frameString);
    }
}

function setup() {
    createCanvas(500, 500);
    frameRate(60);
}

function draw() {
    //console.log(millis());

    image(frameArray[currentFrame], 0, 0);

    if (millis() - pMillis >= interval) {
        currentFrame++;
        pMillis = millis();
    }

    if (currentFrame == frameArray.length) {
        currentFrame = 0;
    }

    ellipse(mouseX, mouseY, 100, 100);
}
