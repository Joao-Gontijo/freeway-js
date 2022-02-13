//carros
let xCarros = [600, 600, 600, 600, 600, 600];
let comprimentoCarro = 60;
let alturaCarro = 40;

//posições da estrada
let yCarros = [40, 97, 150, 211, 262, 318];

let velocidadeCarros = [2, 3, 1.2, 7, 3.7, 2.8]

function mostraCarro(){
    for(let i = 0; i < imagemCarros.length; i++){
        image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro); 
    }
    movimentaCarro();
}

function movimentaCarro(){
    for(let i = 0; i < xCarros.length; i++){
        xCarros[i] -= velocidadeCarros[i];
    }
    voltaPosicaoInicialCarro();
}

function voltaPosicaoInicialCarro(){
    for(let i = 0; i < xCarros.length; i++){
        if(passouTodaATela(xCarros[i])){
            xCarros[i] = 600;
        }
    }
}

function passouTodaATela(xCarro){
    return xCarro < -50;
}