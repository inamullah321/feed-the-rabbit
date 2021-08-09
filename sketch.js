var garden,rabbit;
var gardenImg,rabbitImg;
var apple,leaf;
var appleImg,leafImg
var orangeL,redL;
var orangeImg,redImg;
function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leafImg = loadImage("leaf.png");
  orangeImg = loadImage("orangeLeaf.png")
  redImg = loadImage("redLeaf.png")
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.addImage(rabbitImg);
rabbit.scale =0.09;

}


function draw() {
  background(0);
  
//boy Moving on Xaxis with mouse
rabbit.x = World.mouseX;
  edges= createEdgeSprites();
  rabbit.collide(edges);

  drawSprites();


var select_sprites = Math.round(random(1,3));

if (frameCount % 80 == 0) {
  if (select_sprites == 1) {
    createApples();
  } else if (select_sprites == 2) {
    createOrange();
  } else if (slect_sprites == 3) {
    createRed();
  } 
}


function createApples(){
  apple = createSprites(random(50, 350),40,10,10);
  apple.addImage(appleImg);
  apple.Scale=0.07;
  apple.velocityY = 3;
  apple.lifetime = 150;
}

function createOrange() {
  orangeL = createSprites(random(50, 350),40,10,10);
  orangeL.addImage(orangeImg);
  orangeL.Scale=0.08;
  orangeL.velocityY = 3;
  orangeL.lifetime = 150;
}

function createRed() {
  redL = createSprites(random(50, 350),40,10,10);
  redL.addImage(redImg);
  redL.Scale=0.06;
  redL.velocityY = 3;
  redL.lifetime = 150;
}
}