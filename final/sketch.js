var intScene = [],
extScene = [],
sceneBoundary = [],
sceneContent = [],
characterInfo = [];

function preload() {
    screenplay = loadStrings('screenplays/buried.txt');
}

function setup() {
    createCanvas(displayWidth, displayHeight);
    fill(0).strokeWeight(0).textFont('Times New Roman', 20);
    scene();
    character();
}

function draw() {
    if(intScene.length > 0 && extScene.length > 0)
        text('There are ' + sceneContent.length + ' scenes. ' + intScene.length + ' of them are interior and ' + extScene.length + ' of them are exterior.', 25, 25);
    else if(intScene.length == 0)
        text('There are ' + sceneContent.length + ' scenes. All of them are exterior.', 25, 25);
    else if(extScene.length == 0)
        text('There are ' + sceneContent.length + ' scenes. All of them are interior.', 25, 25);

    text('There are ' + characterInfo.length + ' characters:', 25, 75);

    for(var i = 0 ; i < characterInfo.length; i++) { 
        if(characterInfo[i][1] > 1 || characterInfo[i][1] == 0)
            text(characterInfo[i][0] + ', who has ' + characterInfo[i][1] + ' pieces of dialogue.', 50, 95 + (i * 20));
        else
            text(characterInfo[i][0] + ', who has ' + characterInfo[i][1] + ' piece of dialogue.', 50, 95 + (i * 20));
    }
}

function scene() {
    for(var i = 0; i < screenplay.length; i++) {
        var isIntScene = screenplay[i].includes('INT.'),
        isExtScene = screenplay[i].includes('EXT.');

        if(isIntScene)
            intScene.push(screenplay[i]);
        else if(isExtScene)
            extScene.push(screenplay[i]);

        if(isIntScene || isExtScene)
            sceneBoundary.push([i, 0]);
    }

    for(var i = 0; i < sceneBoundary.length; i++) {
        if(i == sceneBoundary.length - 1)
            sceneBoundary[i][1] = screenplay.length - 1;
        else
            sceneBoundary[i][1] = sceneBoundary[i + 1][0];            

        var sceneLine = screenplay.slice(sceneBoundary[i][0], sceneBoundary[i][1]);
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
            isBlack = sceneContent[i][j].includes('BLACK'),
            isEnd = sceneContent[i][j].includes('END');

            if(isAllCaps && !isContinued && !isMontage && !isBlack && !isEnd)
                wordArray.push([i, j, RiTa.tokenize(sceneContent[i][j])]);
        }
    }
    
    var characterArray = [],
    allCapsCounter = 0;
    for(var i = 0; i < wordArray.length; i++) {
        for(var j = 0; j < wordArray[i][2].length; j++) {
            var isAllCaps = /\b[A-Z]{2,}\b/.test(wordArray[i][2][j]),
            isNumber = /\d/.test(wordArray[i][2][j]),
            isPound = /[#]/.test(wordArray[i][2][j]);
            
            if(isAllCaps || isNumber || isPound)
                allCapsCounter++;
        }

        var characterLine = sceneContent[wordArray[i][0]][wordArray[i][1]],
        isContinuedDialogue = characterLine.includes('CONT');
        if(allCapsCounter == wordArray[i][2].length && !characterArray.includes(characterLine))
            characterArray.push(characterLine);

        allCapsCounter = 0;
    }
    
    dialogueCounter = 0;
    for(var i = 0; i < characterArray.length; i++) {
        for(var j = 0; j < sceneContent.length; j++) {
            for(var k = 0; k < sceneContent[j].length; k++) {
                if(sceneContent[j][k].includes('-' + characterArray[i])) {
                    sceneContent[j][k] = sceneContent[j][k].replace(characterArray[i], '');
                    sceneContent[j].splice(j + 1, 0, characterArray[i]);
                }

                var isIntScene = sceneContent[j][k].includes('INT.'),
                isExtScene = sceneContent[j][k].includes('EXT.');
                if(sceneContent[j][k].includes(characterArray[i]) && !isIntScene && !isExtScene) {
                    dialogueCounter++;

                    if(dialogueCounter == 1 && characterArray[i].length != sceneContent[j][k].length)
                        dialogueCounter--;
                }
            }
        }
        characterInfo.push([characterArray[i], dialogueCounter]);

        dialogueCounter = 0;
    }
}