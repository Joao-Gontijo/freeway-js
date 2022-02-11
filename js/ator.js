//ator
let xAtor = 100;
let yAtor = 368;

let colisao = false;

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
                colidiu();
            }
    }
}

function colidiu(){
    yAtor = 368;
}