var partes = [];
var bands = [];
var caught = [];
var indexCaught = [];
var p = [];

var capture;
var tracker;
var lavadora;
var counter = 0;
var internalCounter = 0;
var internalIndex = -1;


var audio1;
var audio2;
var audio3;
var isLoaded = false;
var canvas;
var counterClick = 0;
var name;

var cuadro; 
var fondo;
var cuadroG;

function preload() {
    for (i = 0; i < 27; i++) {
        var tempName = "assets/imgs/" + i + ".png";
        var tempImage = loadImage(tempName);
        partes.push(tempImage);

        var caughtName = "assets/imgsCaught/" + i + ".png";
        var caughtImage = loadImage(caughtName);
        caught.push(caughtImage);
    }
    lavadora = loadImage("assets/lavadora.png");
    fondo= loadImage("imgs/fondo.png");
    
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
};

function myFunction() {
    document.getElementById("myCheck").disabled = true;
}

function setup() {
    cuadro= loadImage("imgs/cuadro2.png");
    cuadroG= loadImage("imgs/cuadro_grande.png");
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0, 0);
    canvas.style('z-index', '5000');
    audio1 = loadSound("audio/intro.mp3", audioReady);
    audio2 = loadSound("audio/cancion.mp3");
    audio3 = loadSound("audio/ocean.mp3", audioReady2);
    console.log("juego");
    bands = [displayWidth / 6, (displayWidth / 6) * 2, (displayWidth / 6) * 3, (displayWidth / 6) * 4, (displayWidth / 6) * 5];

    for (var i = 0; i < 300; i++) {
        p.push(new Partes());
    }
    imageMode(CENTER);
};

function audioReady() {
    isLoaded = true;
    audio1.play();
}

function audioReady2() {
    isLoaded = true;
    audio3.play();
}

function mousePressed() {
    audio1.stop();
    audio2.play();
    audio3.stop();
    isLoaded = false;

}

function loadImages() {
    for (i = 0; i < 27; i++) {
        var tempName = "assets/imgs/" + i + ".png";
        var tempImage = loadImage(tempName);
        partes.push(tempImage);
    }
    for (i = 0; i < 27; i++) {
        var caughtName = "assets/imgsCaught/" + i + ".png";
        var caughtImage = loadImage(caughtName);
        caught.push(caughtImage);
    }
};

var booleano = true;
var angle = 0;

function drawLoading() {
    background(252, 150, 198);
    fill(255);
    text('cargando', width / 2, height / 2.5);
}

function draw() {
 console.log(audio2.isPlaying());
    if (isLoaded == true) {
        document.getElementById("curtain").disabled = true;
        canvas.style('z-index', '-5000');
    } else if (audio2.isPlaying() == true) {
        background(255, 0, 0);
        console.log(audio2.isPlaying());
        if (counterClick > 10) {
            canvas.style('z-index', '5000');
        }
        counterClick++;
        background(255, 0, 0);
        clear();
        randomSeed(123);
        var posLav = new p5.Vector(mouseX, height-52);
        for (var i = 0; i < p.length; i++) {
            p[i].go();
            var d = p5.Vector.dist(p[i].vel, posLav);
            if (d < 45) {
                if (d < 45) {
                    internalCounter++;
                    if (internalIndex != i ) {
                        counter++;
                        push();
                        tint(255, 126);
                        pop();
                        indexCaught.push(internalIndex);
                        print("i: " + i + " counter: " + counter);
                        //p[indexCaught].go();
                        internalIndex = p[i].idName;
                        internalCounter++;
                    }

                } else {
                    internalCounter = 0;
                }
            }
        }
        image(cuadroG, width/2, height-52);
       image(lavadora, posLav.x, posLav.y);
        
       // console.log(p[i].loadpartes);
        //drawFinal();
    } else {
        drawFinal();
        
        
    }
}

function drawFinal() {
    print(indexCaught);
    image(fondo, width/2, height/2);
    image(cuadro, width, height/2);
    
var i,
      len = indexCaught.length,
      out = [],
      obj = {};

  for (i = 0; i < len; i++) {
    obj[indexCaught[i]] = 0;
  }
  for (i in obj) {
    out.push(i);
  }


print("el bueno: " + out);
    
    
    for (var i = 0; i < out.length; i++) {
        if(caught[out[i]]){
          image(caught[out[i]], width/2, height/2);
        }
  
    }
}

var Partes = function () {
    this.randBand = bands[Math.floor(Math.random() * bands.length)];
    this.vel = new p5.Vector(this.randBand, -(random(11500)));
    this.aaa = Math.floor(random(4,6));
    this.accel = createVector(0, this.aaa);
    this.idName = Math.floor(Math.random() * partes.length);
    this.loadpartes = partes[this.idName];

};

Partes.prototype.update = function () {
    this.vel.add(this.accel);
};

Partes.prototype.render = function () {

    image(this.loadpartes, this.vel.x, this.vel.y);
};

Partes.prototype.go = function () {
    this.update();
    this.render();
};
