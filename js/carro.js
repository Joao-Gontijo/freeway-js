//carro
let xCarro = 600;

//posições da estrada
const primeiraFaixa = 40;
const segundaFaixa = 97;
const terceiraFaixa = 150;
const quartaFaixa = 211;
const quintaFaixa = 262;
const sextaFaixa = 320;

function mostraCarro(){
    image(imagemCarro, xCarro, primeiraFaixa, 60, 40);
    movimentaCarro();
}

function movimentaCarro(){
    xCarro -= 2;
}
