var bgColor = "turquoise"
var x = 20;
var y = 20;

function setup() {
    createCanvas(500, 500);
    
    background(bgColor);
    
    noStroke();
}

function draw() {
    fill(255, 255, 0);
    ellipse(x, y, 20, 20);
    
    if(x <= 490 && y <= 490) {
        x++;
        y++;   
    }
}