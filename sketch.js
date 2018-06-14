/*var audio1;
var audio2;
var audio3;
var isLoaded = false;
var canvas;


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
};


function myFunction() {
    document.getElementById("myCheck").disabled = true;
}

function setup() {
  //isLoaded = true;
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0,0);
    canvas.style('z-index','5000');
    audio1 = loadSound("audio/intro.mp3",audioReady);
    audio2 = loadSound("audio/cancion.mp3");
    audio3 = loadSound("audio/ocean.mp3", audioReady2);
}


function audioReady(){
  isLoaded = true;
  //audio1.play();
  audio1.play();
  //audio1.loop();
}
function audioReady2(){
  isLoaded = true;
  audio3.play();
  //audio3.play();
  //audio1.loop();
}

function mousePressed(){
    audio1.stop();
    
    
    audio2.play();
    audio3.stop();
  
}

function draw() {
   // background(255);
    if (isLoaded == true) {
     // print('ya cargué');
       document.getElementById("curtain").disabled = true;
       canvas.style('z-index','-5000');
    } else {
        drawLoading();
    }
    
    
}



var angle= 0;
function drawLoading() {
 //print('no cargué');
    background(252, 150, 198);
    fill(255);
    text('cargando', width/2, height/2.5);
//    translate(windowWidth / 2, windowHeight / 2);
//    rotate(angle);
//    strokeWeight(10);
//    stroke(255);
//    line(0, 0, 100, 100);
//    angle += 0.1;
}*/