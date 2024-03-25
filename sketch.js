let picnic;
let ants;
let topLayer;

function preload(){
 picnic = loadImage("picnicc.jpg");
 ants = loadImage("antss.jpg");
}

function setup() {
createCanvas(800, 500);
  topLayer = createGraphics(width,height);
  
  topLayer.background(108, 139, 62);
  topLayer.textSize(50);
  topLayer.textAlign(CENTER);
  topLayer.text("a nice picnic", width/5.2, height/1.025);
  
  topLayer.strokeWeight(37);
  //topLayer.blendMode(REMOVE);
  topLayer.erase();
  
}

function draw() {
  image(picnic, 7, 7,  width, height);
  if(mouseIsPressed) {
   topLayer.triangle(pmouseX, pmouseY, mouseX, mouseY);
    
    
  }
  image(topLayer,0, 0);
  
}
