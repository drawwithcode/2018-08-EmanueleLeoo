var v=1;
var value;
var r = 1;
var dragoCentro;
var dragoDestra;
var dragoAlto;
var dragoSinistra;

function preload(){
  // put preload code here
  dragoCentro = loadImage("./assets/DragoCentro.png");
  dragoDestra = loadImage("./assets/DragoDestra.png");
  dragoAlto = loadImage("./assets/DragoAlto.png");
  dragoSinistra = loadImage("./assets/DragoSinistra.png");
}

function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  background('#990000');
}

function draw() {

if(r == 1){
    r = 0;
    background('#990000');
    image(dragoCentro, width/2, height/2, dragoCentro.width*1.5, dragoCentro.height*1.5);
    noStroke();
    triangle(width/2-50, height/8, width/2+50, height/8, width/2, height/8-50);
  }
}

function deviceTurned(){
  if(r==0){
  if(v == 1 && turnAxis === 'X'){
    background('#00b8c9');
    image(dragoCentro, width/2, height/2, dragoSinistra.width*1.5, dragoSinistra.height*1.5);
    triangle(width/8, height/2-50, width/8, height/2+50, width/8-50, height/2);
    v = 2;
  }

  if(v == 2 && turnAxis === 'Y'){
    background('#0089c9');
    image(dragoSinistra, width/2, height/2, dragoDestra.width*1.5, dragoDestra.height*1.5);
    triangle(width/2-50, height/1.12, width/2+50, height/1.12, width/2, height/1.12+50);
    v=3;
  }

  if(v == 3 && turnAxis === 'X'){
    background('#0053c9');
    image(dragoAlto, width/2, height/2, dragoAlto.width*1.5, dragoAlto.height*1.5);
    triangle(width/1.12, height/2-50, width/1.12, height/2+50, width/1.12+50, height/2);
    v = 4;
  }

  if(v == 4 && turnAxis === 'Y'){
    background('#0010c9');
    image(dragoDestra, width/2, height/2, dragoDestra.width*1.5, dragoDestra.height*1.5);
    triangle(width/1.12, height/2-50, width/1.12, height/2+50, width/1.12-50, height/2);
    triangle(width/2-50, height/1.12, width/2+50, height/1.12, width/2, height/1.12-50);
    triangle(width/8, height/2-50, width/8, height/2+50, width/8+50, height/2);
    triangle(width/2-50, height/8, width/2+50, height/8, width/2, height/8+50);
    v=1;
  }

}
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
