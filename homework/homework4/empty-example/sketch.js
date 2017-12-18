var bgColor = "green";
var fSize = 200;

var posX = 0;
var posY = 0;

var faceColor = 'pink';
var mouthColor = 'red';


function setup() {
    createCanvas(1000, 500);

    background(125);
    background(255, 0, 0);
    background("#333333");
    background("cyan");

    background(bgColor);

    posX = width / 2;
    posY = 100;


}

function draw() {
    background(bgColor);

    strokeWeight(0);
    //Face
    fill(faceColor);
    ellipse(posX, posY, fSize, fSize);

    //mouth
    fill(mouthColor);
    rect(posX - 50, posY + 50, 100, 20);

    //eyes
    fill(255);
    ellipse(posX - 50, posY - 20, 20, 40);
    ellipse(posX + 50, posY - 20, 20, 40);
    //pupils
    fill(0);
    ellipse(posX - 50, posY - 10, 20, 20);
    ellipse(posX + 50, posY - 10, 20, 20);
    //mouthline
    stroke(125,0,0);
    strokeWeight(3);
    line(posX - 50, posY + 60, posX + 50, posY + 60);
    
    push();
    fill('blue');
    ellipse(50, 50, 50, 50);
    pop();

    push();
    fill('purple');
    ellipse(50, 150, 50, 50);
    pop();

    push();
    fill('white');
    ellipse(50, 250, 50, 50);
    strokeWeight(2);
    stroke('green');
    line(50, 237.5, 50, 262.5);
    line(37.5, 250, 62.5, 250);
    pop();

    push();
    fill('white');
    ellipse(50, 350, 50, 50);
    strokeWeight(2);
    stroke('red');
    line(37.5, 350, 62.5, 350);
    pop();

    push();
    fill('green');
    ellipse(50, 450, 50, 50);
    pop();

    if (mouseX > 25 && mouseX < 75 && mouseY > 25 && mouseY < 75) {
        faceColor = 'blue';
    } else {
        faceColor = 'pink';
    }

    if(mouseX > 25 && mouseX < 75 && mouseY > 125 && mouseY < 175) {
        mouthColor = 'purple';
    } else {
        mouthColor = 'red';
    }

    if(mouseX > 25 && mouseX < 75 && mouseY > 225 && mouseY < 275) {
        posX += 10;
    } else {
        posX = width/2;
    }

    if(mouseX > 25 && mouseX < 75 && mouseY > 325 && mouseY < 375) {
        posY += 10;
    } else {
        posY = 100;
    }

    if(mouseX > 25 && mouseX < 75 && mouseY > 425 && mouseY < 475) {
        faceColor = bgColor;
    }
}