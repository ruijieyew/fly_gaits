var R1, L2, R3;
var L1, R2, L3;
var flt;
var frt;
var blt;
var brt;
var BACKGROUND;
var HEIGHT = 500;
var WIDTH = 500;
var CANVAS_HEIGHT = 1500;
var i = 0;
function setup() {
  frameRate(0.5);
  R1 = color(0);
  L2 = color(0);
  R3 = color(0);
  L1 = color(255);
  R2 = color(255);
  L3 = color(255);
  flt = [[L1,R2],[L3,R1], [L2,R3]];
  frt = [[L3,R2],[L2,R1],[L1,R3]];
  brt = [[L3,R2],[L1,R3],[L2,R1]];
  blt = [[L1,R2],[L2,R3],[L3,R1]];
  BACKGROUND = color(220);
  img = loadImage('originalfigure.png');
  background(BACKGROUND);
  createCanvas(WIDTH,CANVAS_HEIGHT);
}

function draw() {
  // background(BACKGROUND);
  fill(0);
  image(img, 0, height/3, img.width/2, img.height/2);
  if (i==3 || i == 0){
    background(255);
    textAlign(LEFT);
    text("FORWARD LEFT TETRAPOD",5,15);
    text("BACKWARD LEFT TETRAPOD",5,270);
    textAlign(RIGHT);
    text("FORWARD RIGHT TETRAPOD",WIDTH - 5,15);
    text("BACKWARD RIGHT TETRAPOD",WIDTH - 5,270);
    text("Inspired by Figure 4 from \"GAIT TRANSITIONS IN A PHASE OSCILLATOR MODEL\nOF AN INSECT CENTRAL PATTERN GENERATOR\" \n By: Zahra Aminzare, Vaibhav Srivastava, and Philip Holmes",width-10, height-height/2.5);
    image(img, 0, height/3, img.width/2, img.height/2);
    i = 0;
  }
  legSetUp(20, 0, 10, 10, flt[i%3]);
  legSetUp(20, 370, 10, 10, frt[i%3]);
  legSetUp(20, 0, 270, 10, blt[i%3]);
  legSetUp(20, 370, 270, 10, brt[i%3]);
  i+=1;

}

function drawLegs(size, startWidth, spacing){
  fill (220);
  startWidth = 2*size + startWidth;
  startHeight = 2*size;
  for (var i = 0; i < 3; i++){
    circle(startWidth,startHeight,size);
    startHeight = startHeight + 2*size + spacing
  }

  startWidth1 = startWidth + 2*size + spacing
  startHeight = 2*size
  for (var i = 0; i < 3; i++){
    circle(startWidth1,startHeight,size);
    startHeight = startHeight + 2*size + spacing;
  }
}


function legSetUp(size, startWidth, startHeight, spacing, stance){
  var L = [L1,L2,L3,R1,R2,R3];
  var nameL = ["L1","L2","L3","R1","R2","R3"];
  var firstStance;
  var secondStance;
  startWidth = 2*size + startWidth;
  startHeight1 = 2*size + startHeight;
  colorIndex = 0;
  for (var i = 0; i < 3; i++){
    if (stance[0] == L[i]){
      fill(stance[0]);
      circle(startWidth,startHeight1,size);
      fill(150);
      textAlign(CENTER);
      text(nameL[i],startWidth,startHeight1);
    }
    startHeight1 = startHeight1 + 2*size + spacing
  }

  startWidth1 = startWidth + 2*size + spacing
  startHeight2 = 2*size + startHeight;
  for (var i = 0; i < 3; i++){
    if (stance[1] == L[i+3]){
      fill(stance[1]);
      circle(startWidth1,startHeight2,size);
      fill(150)
      textAlign(CENTER);
      text(nameL[i+3],startWidth1,startHeight2);
    } 
    startHeight2 = startHeight2 + 2*size + spacing;
  }
}
