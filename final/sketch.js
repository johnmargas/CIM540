var load, rm;

function preload() {
    load = loadStrings('test.txt');
}

function setup() {
    noCanvas();
    
    rm = new RiMarkov(5);
    for(i = 0; i < load.length; i++)
        rm.loadText(load[i]);
    console.log(rm.size());
//    for(i = 0; i <= rm.size(); i++)
//        tokens = rm.generateTokens(i);
//    
//    console.log(tokens);
//    
//    wordArray = RiTa.tokenize(sentence);
//    
//    console.log(wordArray);
}