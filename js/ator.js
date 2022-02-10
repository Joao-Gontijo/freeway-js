//ator
let xAtor = 100;
let yAtor = 368;

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
}