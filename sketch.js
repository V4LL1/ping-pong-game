// posição e tamanho das raquetes

  //Minha raquete
let xRaquete1 = 7;
let yRaquete1 = 150;
let widthRaquete1 = 10;
let heightRaquete1 = 90;

  //Raquete do Oponente
let xRaquete2 = 583;
let yRaquete2 = 150;
let widthRaquete2 = 10;
let heightRaquete2 = 90;
let velocidadeYRaquete2;

// posição e tamanho da bolinha

let xBolinha = 300;
let yBolinha = 200;
let diametro = 20;
let raio = diametro / 2;


// velocidade da bolinha

let velocidadeXBolinha = 4;
let velocidadeYBolinha = 4;


// funções 

function setup() {
  // tamanho do cenário
  createCanvas(600, 400);
}

function printBolinha(){
  // desenha na tela a bolinha na tela
  circle(xBolinha, yBolinha, diametro)
}

function printRaquete1(){
  // desenha na tela a raquete do oponente
  rect(xRaquete1, yRaquete1, widthRaquete1, heightRaquete1)  
}

function printRaquete2(){
  // desenha na tela a raquete do oponente
  rect(xRaquete2, yRaquete2, widthRaquete2, heightRaquete2)
}

function moverBolinha(){
  // adciona movimento na bolinha
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;

} 

function moverRaquete1(){
  // verifica se a tecla esta pressionada e adiciona movimento a raquete1
  if (keyIsDown(UP_ARROW)){ 
    yRaquete1 -= 8; // velocidade da raquete para cima
  }
  
  if (keyIsDown(DOWN_ARROW)){
    yRaquete1 += 8; // velocidade da raquete para baixo
  }
}

function moverRaquete2WASD(){
  if (keyIsDown(W_ARROW)){ 
    yRaquete2 -= 8; // velocidade da raquete para cima
  }
  
  if (keyIsDown(S_ARROW)){
    yRaquete2 += 8; // velocidade da raquete para baixo
  }
}

function moverRaquete2(){
  velocidadeYRaquete2 = yBolinha - yRaquete2 - widthRaquete2 / 2 - 25;
  yRaquete2 += velocidadeYRaquete2
}

function bolinhaColidir(){
  // inverte o movimento da bolinha ao encontrar a borda
  
  if((xBolinha > width - raio) || (xBolinha < 0 + raio)) {

  velocidadeXBolinha *= -1;

} 

if(yBolinha > height - raio || yBolinha < 0 + raio){
  
  velocidadeYBolinha *= -1;  

}   
}

function Raquete1Colidir(){
  // verifica se a bolinha colidiu com a raquete, se colidiu inverte sua direção
  if(xBolinha - raio < xRaquete1 + widthRaquete1 && yBolinha - raio < yRaquete1 + heightRaquete1 && yBolinha + raio > yRaquete1){
    velocidadeXBolinha *= -1;
  }
}

function draw() {
  
  // cor do cenário   
  background(0);

  printBolinha();
  
  moverBolinha();

  bolinhaColidir();

  printRaquete1();

  printRaquete2();
  
  moverRaquete1();
  
  Raquete1Colidir();
  
  //moverRaquete2();

}




//
