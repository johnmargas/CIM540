var load, rm;

function preload() {
    load = loadStrings('test.txt');
}

function setup() {
    noCanvas();

    rm = new RiMarkov(5);
    for (i = 0; i < load.length; i++)
        rm.loadText(load[i]);

    console.log(load);
}
