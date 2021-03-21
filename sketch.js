
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bruce,bruceImg,drops=[]
var thunder, thunder1, thunder2, thunder3,thunder4;
var maxDrops = 100;

function preload()
{
	bruceImg = loadAnimation("images/WalkingFrame/walking_8.png",
	"images/WalkingFrame/walking_7.png",
	"images/WalkingFrame/walking_6.png",
	"images/WalkingFrame/walking_5.png",
	"images/WalkingFrame/walking_4.png",
	"images/WalkingFrame/walking_3.png",
	"images/WalkingFrame/walking_2.png",
	"images/WalkingFrame/walking_1.png",)

	thunder1 = loadImage("images/thunderbolt/1.png");
	thunder2 = loadImage("images/thunderbolt/2.png");
	thunder3 = loadImage("images/thunderbolt/3.png");
	thunder4 = loadImage("images/thunderbolt/4.png");
}

function setup() {
	createCanvas(800,1075);

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
		if(frameCount % 5===1){
			raindrops = new Drop(random(10,800),random(10,200),10)
			raindrops.lifetime=199
			drops.push(raindrops);
		}

	for (var i = 0; i < drops.length; i++) {
		drops[i].display();  
	 }
	umbrella.display();

	var rand = Math.round(random(1,2));
	if(frameCount%80===0){
	 thunder = createSprite(random(100,770),random(10,30),10,10);
	 thunder.lifetime=5;
	 switch(rand){
	   case 1 : thunder.addImage(thunder1);
	   break;
	   case 2 : thunder.addImage(thunder2);
	   break;
	   case 3 : thunder.addImage(thunder3);
	   break;
	   case 4 : thunder.addImage(thunder4);
	   break;
	   default : break;
	 }
	}
	
	drawSprites();
 
}
