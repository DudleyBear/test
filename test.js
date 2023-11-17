function setup(){
createCanvas(400, 400);
strokeWeight(4);
}


function draw() {
background(125, 255, 125);
fill(255, 192, 203);
  
// legs
rect(125, 250, 25, 125);
rect(250, 250, 25, 125);
  fill(0,0,0)
  
//feet
rect(250, 350, 25, 30);
fill(0,0,0)
rect(125, 350, 25, 30);
  
// body
fill(255,192,203);
ellipse(200, 200, 255, 220);
  
// ears
ellipse(165, 138, 25,45);
ellipse(235, 138, 25,45);
  
// face
fill(255,192,203);
ellipse(200, 200, 125, 135);
  
// left eye
fill(255,255,255)
ellipse(175,170,25,25);
fill(0,0,0)
ellipse(175,170,10,10);
  
// right eye
fill(255,255,255)
ellipse(225,170,25,25);
fill(0,0,0)
ellipse(225,170,10,10);
  
// nose
fill(255,192,203);
ellipse(200, 210, 45,25);
fill(0,0,0)
ellipse(190,210,10,10);
ellipse(210,210,10,10);

  
// mouth
fill(255,192,203);
arc(200, 240, 50, 30, 0, 3, OPEN)
}
