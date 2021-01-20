
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bruce,bruceImg,drops=[]
var maxDrops = 100;

function preload()
{
	bruceImg = loadAnimation("images/WalkingFrame/walking_8.png","images/WalkingFrame/walking_7.png","images/WalkingFrame/walking_6.png","images/WalkingFrame/walking_5.png","images/WalkingFrame/walking_4.png","images/WalkingFrame/walking_3.png","images/WalkingFrame/walking_2.png","images/WalkingFrame/walking_1.png",)
}

function setup() {
	createCanvas(800,1200);

	bruce = createSprite(400,900);
	bruce.addAnimation("walking",bruceImg);
	bruce.scale=0.5;

	engine = Engine.create();
	world = engine.world;

	umbrella = new Umbrella(410,840,205);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  umbrella.display();
  if(frameCount % 60*3){
	createDrops();
  };
  drawSprites();
 
}

function createDrops() {
	for (var i = 0; i < maxDrops; i++) {
		drops.push(new Drop(random(0,800),random(0,400),10));
	}
}


