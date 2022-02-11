//carros
let xCarros = [600, 600, 600];


//posições da estrada
let yCarros = [40, 97, 150, 211, 262, 320];

let velocidadeCarros = [2, 3, 1.2]

function mostraCarro(){
    image(imagemCarro, xCarros[0], yCarros[0], 60, 40);
    image(imagemCarro2, xCarros[1], yCarros[1], 60, 40);
    image(imagemCarro3, xCarros[2], yCarros[2], 60, 40);
    movimentaCarro();
}

function movimentaCarro(){
    xCarros[0] -= velocidadeCarros[0];
    xCarros[1] -= velocidadeCarros[1];
    xCarros[2] -= velocidadeCarros[2];
    voltaPosicaoInicialCarro();
}

function voltaPosicaoInicialCarro(){
    if(xCarros[0] < -50){
        xCarros[0] = 600;
    }
    if(xCarros[1] < -50){
        xCarros[1] = 600;
    }
    if(xCarros[2] < -50){
        xCarros[2] = 600;
    }
}
