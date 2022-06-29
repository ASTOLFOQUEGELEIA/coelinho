var garden,rabbit;
var gardenImg,rabbitImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  orangeImg = loadImage("orangeLeaf.png");
  redImg = loadImage("redImage.png"); 
}

function setup(){
  
  createCanvas(400,400);
  
// mover o fundo
garden=createSprite(200,200);
garden.addImage(gardenImg);

//criar sprite do coelho
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);

   rabbit.x = World.mouseX;
   edges= createEdgeSprites();
   rabbit.collide(edges);
  
  drawSprites();
  
}

function creatwApples() {
apple = createSprite(random(50,350),40,10,10);
apple.addImage(appleImg);
apple.scale=0.07;
apple.velocitY = 3;
apple.lifetime = 150;

}

function creatwOrange() {
  orange = createSprite(random(50,350),40,10,10);
  orange.addImage(orangeImg);
  orange.scale=0.08;
  orange.velocitY = 3;
  orange.lifetime = 150;
  
  }

  function creatwRed() {
    red = createSprite(random(50,350),40,10,10);
    red.addImage(redImg);
    red.scale=0.06;
    red.velocitY = 3;
    red.lifetime = 150;
    
}
    
var seclet_sprites = Math.round(random(1,3));

if (frameCount % 80 == 0) {
  if (seclet_sprites == 1){
      creatwApples();
  } else if (seclet_sprites == 2){
     creatwOrange();
  }else {
    creatwRed();
  }

}

