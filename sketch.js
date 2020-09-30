var hr; 
var min; 
var sc;



function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50); 
  angleMode(DEGREES); 
}

function draw() {
  background(0); 
  translate(200,200); 
  rotate(-90);
  noFill(); 
  hr = hour();  
  min = minute(); 
  sc = second();
  scAngle = map(sc,0,60,0,360); 
  hrAngle = map(hr%12,0,12,0,360); 
  minAngle = map(min,0,60,0,360);
  push();
  rotate(scAngle); 
  stroke(255,0,0); 
  strokeWeight(7); 
  line(0,0,100,0); 
  pop();  

  push();
  rotate(minAngle); 
  stroke(0,255,0); 
  strokeWeight(7); 
  line(0,0,75,0); 
  pop();  

  push();
  rotate(hrAngle); 
  stroke(0,0,255); 
  strokeWeight(7); 
  line(0,0,50,0); 
  pop(); 

  stroke(255,0,255);
  strokeWeight(10); 
  noFill(); 
  stroke(255,0,0);
  arc(0, 0, 300, 300, 0, scAngle);    
  stroke(0,255,0);
  arc(0, 0, 270, 270, 0, minAngle); 
  stroke(0,0,255);  
  arc(0, 0, 240, 240, 0, hrAngle);
  
   
   
  
  //stroke(255,0,0); 
  //strokeWeight(7); 
  //line(0,100,0,0);
  drawSprites();
}