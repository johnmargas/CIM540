var intScene = [],
extScene = [],
sceneBoundary = [],
sceneContent = [],
characterArray = [];

function preload() {
    screenplay = loadStrings('screenplays/her.txt');
}

function setup() {
    noCanvas();
    scene();
    character();
}

function scene() {
    for(var i = 0; i < screenplay.length; i++) {
        var isIntScene = screenplay[i].includes('INT.'),
        isExtScene = screenplay[i].includes('EXT.');

        if(isIntScene) {
            intScene.push(screenplay[i]);
        } else if(isExtScene) {
            extScene.push(screenplay[i]);
        }

        if(isIntScene || isExtScene) {
            sceneBoundary.push([i, 0]);
        }
    }

    for(var i = 0; i < sceneBoundary.length; i++) {
        if(i == sceneBoundary.length - 1) {
            sceneBoundary[i][1] = screenplay.length - 1;
        } else {
            sceneBoundary[i][1] = sceneBoundary[i + 1][0] - 1;            
        }

        var sceneLine = screenplay.slice(sceneBoundary[i][0], 
            sceneBoundary[i][1]);
        sceneContent.push(sceneLine);
    }
}

function character() {
    var wordArray = [];
    for(var i = 0; i < sceneContent.length; i++) {
        for(var j = 1; j < sceneContent[i].length; j++) {
            var isAllCaps = /\b[A-Z]{2,}\b/.test(sceneContent[i][j]);
            var isContinued = sceneContent[i][j].includes('CONTINUED');

            if(isAllCaps && !isContinued) {
                wordArray.push([i, j, RiTa.tokenize(sceneContent[i][j])]);
            }
        }
    }
    
    var counter = 0;
    for(var i = 0; i < wordArray.length; i++) {
        for(var j = 0; j < wordArray[i][2].length; j++) {
            var isAllCaps = /\b[A-Z]{2,}\b/.test(wordArray[i][2][j]);
            
            if(isAllCaps) {
                counter++;
            }
        }

        var characterLine = sceneContent[wordArray[i][0]][wordArray[i][1]]
        if(counter == wordArray[i][2].length && !characterArray.includes(characterLine)) {
            characterArray.push(characterLine);
        }
        counter = 0;
    }
}