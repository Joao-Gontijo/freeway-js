let imagemDaEstrada;
let imagemDoAtor;
let imagemCarro;

//ator
let xAtor = 100;
let yAtor = 368;

//carro
let xCarro = 600;

//posições da estrada
const primeiraFaixa = 40;
const segundaFaixa = 97;
const terceiraFaixa = 150;
const quartaFaixa = 211;
const quintaFaixa = 262;
const sextaFaixa = 320;

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
    mostraAtor();
    mostraCarro();
}

function mostraAtor(){
    image(imagemDoAtor, xAtor, yAtor, 28, 28);
    movimentaAtor();
}

function mostraCarro(){
    image(imagemCarro, xCarro, primeiraFaixa, 60, 40);
    movimentaCarro();
}

function movimentaCarro(){
    xCarro -= 2;
}

function movimentaAtor(){
    if(keyIsDown(UP_ARROW)){
        yAtor -= 3;
    } else if(keyIsDown(DOWN_ARROW)){
        yAtor += 3;
    }
}