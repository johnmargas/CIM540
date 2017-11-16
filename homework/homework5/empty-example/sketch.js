var bubbleSizeInterfaceItems = [];
var bubbleSize = 25;
var bubbleSizeText = "stroke is 25";

var bubbleColorInterfaceItems = [];
var bubbleColor;
var bubbleColorText = "color is black";

var multiBubble = [];
var re = 0;
var gr = 0;
var bl = 0;

function setup() {
    createCanvas(400, 500);

    bubbleSizeInterfaceItems.push(new interface(15, 425, 25, 'white'));
    bubbleSizeInterfaceItems.push(new interface(50, 425, 25, 'white'));
    
    bubbleColorInterfaceItems.push(new interface(155, 425, 25, 'red'));
    bubbleColorInterfaceItems.push(new interface(190, 425, 25, 'green'));
    bubbleColorInterfaceItems.push(new interface(225, 425, 25, 'blue'));
    bubbleColorInterfaceItems.push(new interface(260, 425, 25, 'white'));   
}

function draw() {
    push();
    fill(re, gr, bl);
    stroke(re, gr, bl);
    ellipse(mouseX, mouseY, bubbleSize, bubbleSize);
    pop();
    
    push();
    fill('white');
    //stroke('white');
    rect(0, 398, 399, 101);
    pop();
    
    fill('black');
    text(bubbleSizeText, 15, 415);
    text(bubbleColorText, 155, 415);
    
    push();
    strokeWeight(2);
    stroke('red');
    line(20, 437.5, 35, 437.5);
    
    stroke('green');
    line(55, 437.5, 70, 437.5);
    line(62.5, 430, 62.5, 445);
    pop();
    
    for(var i = 0; i < bubbleColorInterfaceItems.length; i++) {
        bubbleColorInterfaceItems[i].display();
        var currentItemCheck = bubbleColorInterfaceItems[i].check();
    }
}

function interface(tempX, tempY, tempBoxSize, tempColor) {
    this.x = tempX;
    this.y = tempY;
    this.boxSize = tempBoxSize;
    this.setFill = tempColor;

    this.display = function () {
        fill(this.setFill);
        rect(this.x, this.y, this.boxSize, this.boxSize);
    }

    this.check = function () {
        if (mouseX > this.x && mouseX < (this.x + this.boxSize) && mouseY > this.y && mouseY < (this.y + this.boxSize)) {
            this.setFill = 255;
            return true;
        } else {
            this.setFill = tempColor;
            return false;
        }
    }
}

function mousePressed() {
    for(var i = 0; i < bubbleSizeInterfaceItems.length; i++) {
        var checkItem = bubbleSizeInterfaceItems[i].check();
        var position = i;

        if(checkItem == true) {
            wasPressed = "size" + (i + 1);
            console.log(wasPressed);
            console.log(position);
        } else 
            wasPressed = "";

        if(checkItem == true && position == 0 && bubbleSize >= 10)
            bubbleSize -= 5;
        else if(checkItem == true && position == 1 && bubbleSize <= 50)
            bubbleSize += 5;
        bubbleSizeText = "stroke is " + bubbleSize;
        
        if(bubbleSize < 10)
            bubbleSizeText = "stroke can't be smaller";
        else if (bubbleSize > 50)
            bubbleSizeText = "stroke can't be bigger";
    }
    
    for(var i = 0; i < bubbleColorInterfaceItems.length; i++) {
        var checkItem = bubbleColorInterfaceItems[i].check();
        var position = i;
        
        if(checkItem == true) {
            wasPressed = "color" + (i + 1);
            console.log(wasPressed);
            console.log(position);
        } else 
            wasPressed = "";
    
        if(checkItem == true && position == 0) {
            bubbleColorText = "color is red";
            re = 250;
            gr = 0;
            bl = 0;
        } else if(checkItem == true && position == 1) {
            bubbleColorText = "color is green";
            re = 0;
            gr = 150;
            bl = 0;
        } else if(checkItem == true && position == 2) {
            re = 0;
            gr = 0;
            bl = 250;
            bubbleColorText = "color is blue";
        } else if (checkItem == true && position == 3) {
            re = 255;
            gr = 255;
            bl = 255;
            bubbleColorText = "eraser";
        }
    }
}
