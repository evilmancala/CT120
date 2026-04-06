function preload() {
// ooo look at me adding notes as proof I can do stuff LOL! Added sparkle image for bg
let div;
let div2;
let div3;
let div4;
let Cfont;
CFont = loadFont("centurygothic_bold.ttf");
}

function setup() {
  createCanvas(700, 700, WEBGL);
div = createDiv("background filler...");
frameRate(2);
div2 = createDiv("killed the sparkle...");
div3 = createDiv("oooo words look at the words");
div4 = createDiv("FILLER FILLER FILLER GET DISTRACTED BOOM BOOM BOOM");
angleMode(DEGREES);
function setup() {

}

// idk how it works but w/o it this clock falls apart I am not kidding
}

function draw() { 
background("pink")
noCursor();
  // thought it made it look uninterrupted
// bg color bc originally there were cracks and it made me panic
let x = random(windowWidth);
let y = random(windowHeight);
div.position(x, y);
let x2 = random(windowWidth);
let y2 = random(windowHeight);
div2.position(x2, y2);
let x3 = random(windowWidth);
let y3 = random(windowHeight);
div3.position(x3,y3);
let x4 = random(windowWidth);
let y4 = random(windowHeight);
div4.position(x4,y4);
  let h = hour();
  let m = minute();
  let s = second();
// gotta add the time...
  strokeWeight(10);
  noSmooth();
  stroke("cornflowerblue");
  noFill();
  let seconds = map(s, 0, 60, 0, 360);
  arc(25, 25, 400, 400, 0, seconds);
// arc adjusts position based off time; in this case it is seconds...
  stroke("hotpink");
  noSmooth();
  noFill();
  let minutes = map(m, 0, 60, 0, 360);
  arc(25, 25, 350, 350, 0, minutes);

  stroke("ghostwhite");
  noSmooth();
  noFill();
  let hours = map(h % 12, 0, 12, 0, 360);
  arc(25, 25, 300, 300, 0, hours);
// trans colors !!
  // no smooth bc i like the unpolished look but idk if it actually worked 
noStroke();
fill("ghostwhite");
circle(25,25,250);
// NEEDED FILLER.
clock();
  }

function clock()
{
 fill("cornflowerblue");
  let h = hour();
  let m = minute();
  let s = second();
  textFont(CFont);
  textSize(width/17);let noon = h >= 12? " PM" : " AM"
  if(m < 10)
  m = "0"+m
  h%=12
  text(h+":"+m+":"+s+noon, -79, 50); 
}



