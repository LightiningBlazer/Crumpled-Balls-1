const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
	rectMode(CENTER);
	

	paper = new Paper(100,50);

	box1 = new Box(400,650,240,20);
	box2 = new Box(510,605,20,100);
	box3 = new Box(290,605,20,100);


	groundSprite=createSprite(width/2, height-35, width,10);

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  fill("white");
  box1.display();
  box2.display();
  box3.display();
  paper.display();
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === UP_ARROW) {
	paper.velocityX=10;
	paper.velocityY=10;
  }
}