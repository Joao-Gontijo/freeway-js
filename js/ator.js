//ator
let xAtor = 100;
let yAtor = 368;

let colisao = false;

let meusPontos = 0;

function mostraAtor(){
    image(imagemDoAtor, xAtor, yAtor, 28, 28);
    movimentaAtor();
}

function movimentaAtor(){
    if(keyIsDown(UP_ARROW)){
        yAtor -= 3;
    } else if(keyIsDown(DOWN_ARROW)){
        yAtor += 3;
    }
    verificaColisao();
}

function verificaColisao(){
    //collideRectCircle(x1, y1, width, height, cx, cy, diameter);
    for(let i = 0; i < imagemCarros.length; i++){
        colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, 
            alturaCarro, xAtor, yAtor, 14);
            if(colisao){
                voltaAtorPosicaoInicial();
            }
    }
}

function voltaAtorPosicaoInicial(){
    yAtor = 368;
}

function incluiPontos(){
    textAlign(CENTER);
    textSize(22);
    fill(color(80, 255, 255));
    text(meusPontos, width/5, 27);
    marcaPonto();
}

function marcaPonto(){
    if(yAtor < 15){
        meusPontos += 1;
        voltaAtorPosicaoInicial();
    }
}