var garden,rabbit;
var gardenImg,rabbitImg;
var appleImg,apple;
var leafImg, leaf;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadAnimation("apple.png");
  leafImg = loadAnimation("leaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);


}


function draw() {
  background(0);
  

  rabbit.x= World.mouseX

  edges= createEdgeSprites();
  rabbit.collide(edges);



  drawSprites();
var select_sprites = Math.round(random(100,105));

if(frameCount%80==0){  
  if(select_sprites == 100){
    spawnApple(); 
  }else{
    spwanLeaf();
  }
}
  
}




function spawnApple(){
  
  apple = createSprite(390,10,10,10);
  apple.addAnimation("apple",appleImg);
  apple.x = Math.round(random(905,110));
  apple.velocityY= 5;
  apple.scale = 0.1;  
  


}

function spwanLeaf(){
  
      leaf = createSprite(200,10,10,10);
      leaf.addAnimation("leaf",leafImg);
      leaf.x=Math.round(random(10,150));
      leaf.velocityY = 5;
      leaf.scale= 0.1;
  
}



















