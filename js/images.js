//images and sounds

let imagemDaEstrada;
let imagemDoAtor;
let imagemCarro;
let imagemCarro2;
let imagemCarro3;

let somDaTrilha;
let somDaColisao;
let somDoPonto;

function preload(){
    imagemDaEstrada = loadImage("./assets/images/estrada.png");
    imagemDoAtor = loadImage("./assets/images/ator-1.png");
    imagemCarro = loadImage("./assets/images/carro-1.png");
    imagemCarro2 = loadImage("./assets/images/carro-2.png");
    imagemCarro3 = loadImage("./assets/images/carro-3.png");
    imagemCarros = [imagemCarro, imagemCarro2, imagemCarro3,
    imagemCarro2, imagemCarro, imagemCarro3];

    somDaTrilha = loadSound("./assets/sounds/trilha.mp3");
    somDaColisao = loadSound("./assets/sounds/colidiu.mp3");
    somDoPonto = loadSound("./assets/sounds/pontos.wav");
}