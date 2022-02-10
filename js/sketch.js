let imagemDaEstrada;
let imagemDoAtor;
let imagemCarro;

function preload(){
    imagemDaEstrada = loadImage("./assets/images/estrada.png");
    imagemDoAtor = loadImage("./assets/images/ator-1.png");
    imagemCarro = loadImage("./assets/images/carro-1.png");
}

function setup(){
    createCanvas(600, 400);
}

function draw(){
    background(imagemDaEstrada);
    image(imagemDoAtor, 100, 365, 30, 30);
    image(imagemCarro, 400, 40, 60, 40);
}