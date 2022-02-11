//carro
let xCarro = 600;
let xCarro2 = 600;
let xCarro3 = 600;

let velocidadeCarro1 = 2;
let velocidadeCarro2 = 3;
let velocidadeCarro3 = 1.5;

//posições da estrada
const primeiraFaixa = 40;
const segundaFaixa = 97;
const terceiraFaixa = 150;
const quartaFaixa = 211;
const quintaFaixa = 262;
const sextaFaixa = 320;

function mostraCarro(){
    image(imagemCarro, xCarro, primeiraFaixa, 60, 40);
    image(imagemCarro2, xCarro2, segundaFaixa, 60, 40);
    image(imagemCarro3, xCarro3, terceiraFaixa, 60, 40);
    movimentaCarro();
}

function movimentaCarro(){
    xCarro -= velocidadeCarro1;
    xCarro2 -= velocidadeCarro2;
    xCarro3 -= velocidadeCarro3;
}
