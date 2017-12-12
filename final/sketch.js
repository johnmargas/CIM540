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
            sceneBoundary[i][1] = sceneBoundary[i + 1][0];            
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
            var isAllCaps = /\b[A-Z]{2,}\b/.test(sceneContent[i][j]),
            isContinued = sceneContent[i][j].includes('CONTINUED'),
            isMontage = sceneContent[i][j].includes('MONTAGE'),
            isFadeToBlack =  sceneContent[i][j].includes('FADE TO BLACK');

            if(isAllCaps && !isContinued && !isMontage && !isFadeToBlack) {
                wordArray.push([i, j, RiTa.tokenize(sceneContent[i][j])]);
            }
        }
    }
    
    var counter = 0;
    for(var i = 0; i < wordArray.length; i++) {
        for(var j = 0; j < wordArray[i][2].length; j++) {
            var isAllCaps = /\b[A-Z]{2,}\b/.test(wordArray[i][2][j]),
            isNumber = /\d/.test(wordArray[i][2][j]),
            isPound = /[#]/.test(wordArray[i][2][j]);
            
            if(isAllCaps || isNumber || isPound) {
                counter++;
            }
        }

        var characterLine = sceneContent[wordArray[i][0]][wordArray[i][1]]
        if(counter == wordArray[i][2].length && !characterArray.includes(characterLine)) {
            characterArray.push(characterLine);
        }
        counter = 0;
    }

    for(var i = 0; i < sceneContent.length; i++) {
        for(var j = 0; j < sceneContent[i].length; j++) {
            for(var k = 0; k < characterArray.length; k++) {
                if(sceneContent[i][j].includes('-' + characterArray[k])) {
                    sceneContent[i][j] = sceneContent[i][j].replace(characterArray[k], '');
                    sceneContent[i].splice(j + 1, 0, characterArray[k]);
                }
            }
        }
    }
}