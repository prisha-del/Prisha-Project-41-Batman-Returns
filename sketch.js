const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var man_image;
var ground;
var ground_options;
var maxDrops = 100;
var drops = [];
var thunder1, thunder2, thunder3, thunder4;
var umbrella;
var thunder, thunderCreatedFrame = 0;

function preload(){
  man_image = loadImage("man.jpeg");
  thunder1 = loadImage("thunder2.png");
  thunder2 = loadImage("thunder4.jpeg");
}

function setup(){
  var canvas = createCanvas(400,600);

  engine = Engine.create();
  world  = engine.world;

  umbrella = new Umbrella();

  if(frameCount%100===0){
    for(var i=0; i<maxDrops;i++){
      drops.push(new Drop(random(0,500),random(0,400),3,10));
     }
   }
}

function draw(){
  background(0);
  Engine.update(engine);

  var rand = Math.round(random(1,2));
  if(frameCount % 80 === 0){
    thunderCreatedFrame = frameCount;
   thunder = createSprite(random(10,370),random(10,30),10,10);

   switch(rand){
     case 2 : thunder.addImage(thunder1);
     break;
     case 3 : thunder.addImage(thunder2);
     break;
     default : break;
   }

   console.log(thunderCreatedFrame);
  }
  
  if(thunderCreatedFrame + 20 === frameCount && thunder){
    thunder.destroy();
 }

  umbrella.display();
  
  for(var i=0; i<maxDrops;i++){
    drops[i].display();
    drops[i].update();
  }
 
  drawSprites();
}