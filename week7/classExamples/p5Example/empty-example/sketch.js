var bgColor = "turquoise"
var x = 10;
var y = 10;

function setup() {
    createCanvas(500, 500);
    
    background(bgColor);
}

function draw() {
    ellipse(x, y, 10, 10);
    
    if(x <= 490 && y <= 490) {
        x++;
        y++;   
    }
}