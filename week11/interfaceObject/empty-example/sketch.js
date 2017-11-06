var interfaceItems = [];

var wasPressed = "";

var brushSizeText = "";

var brushSize = 10;

function setup() {
    createCanvas(500, 500);

    interfaceItems.push(new interface(50, 50, 25, 'red'));
    interfaceItems.push(new interface(50, 80, 25, 'green'));

    console.log(interfaceItems.length);
}

function draw() {
    background(255);
    fill(0);

    text(brushSizeText, 15, 15);
    brushSizeText = "brushSize is " + brushSize;


    ellipse(mouseX, mouseY, brushSize, brushSize);

    for(var i = 0; i < interfaceItems.length; i++) {
        interfaceItems[i].display();
        var currentItemCheck = interfaceItems[i].check();
    }
    //console.log(currentItemCheck);
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
    for(var i = 0; i < interfaceItems.length; i++) {
        var checkItem = interfaceItems[i].check();
        var position = i;

        if (checkItem == true) {
            wasPressed = "check" + (i + 1);
            console.log(wasPressed);
            console.log(position);
        } else {
            wasPressed = "";
        }

        if(checkItem == true && position == 0)
            brushSize = brushSize - 10;
        else if(checkItem == true && position == 1)
            brushSize = brushSize + 10;
    }
}
