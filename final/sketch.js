var isIntScene, isExtScene, isNumber,
formattedScreenplay = []
sceneHeading = [], 
sceneLine = [];

function preload() {
    screenplay = loadStrings('screenplays/masterOfNone.txt');
}

function setup() {
    noCanvas();
    format();
    scene();
}

function format() {
    for(var i = 0; i < screenplay.length; i++) {
        isIntScene = screenplay[i].includes('INT.');
        isExtScene = screenplay[i].includes('EXT.');
        isNumber = screenplay[i].match(/[0-9]/g);

        if(isNumber == null || 
            isIntScene == true || 
            isExtScene == true) {
            formattedScreenplay.push(screenplay[i]);
        }

        if(isIntScene == true || isExtScene == true) {
            sceneHeading.push(formattedScreenplay[i]);
            sceneLine.push(i);
        }
    }
}

function scene() {
    
}
