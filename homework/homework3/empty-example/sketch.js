function setup(){
    createCanvas(windowWidth, windowHeight);
}

function draw(){
    frameRate(30);
    var x = random(windowWidth/2);
    var y = random(windowHeight/2);
    var w = 20;
    var h = 20;
    var x2 = x;
    var y2 = y + 50;
    
    color1 = random(255);
    color2 = random(255);
    color3 = random(255);
    
    //head
    fill(color1, color2, color3);
    stroke(0);
    strokeWeight(2)
    ellipse(x, y, w, h);
    
    //body
    line(x, y + (h/2), x2, y2);
    
    //arms
    strokeWeight(1);
    line(x2, (y + y2) / 2, x + 20, y + 10);
    line(x2, (y + y2) / 2, x - 20, y + 10);
    
    //legs
    line(x2, y2, x2 + 20, y2 + 15);
    line(x2, y2, x2 - 20, y2 + 15);
}