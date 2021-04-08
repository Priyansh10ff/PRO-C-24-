
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint ;
var ball1,ball2,ball3,ball4,ball5;
var ground;
var roofObject;
function preload()
{
	
}

function setup() {



	engine = Engine.create();
	world = engine.world;
  
  createCanvas(800, 700);


	

	
    ball1= new Ball(300,420,50);
  	ball2= new Ball(350,420,50);
	  ball3= new Ball(400,420,50);
  	ball4= new Ball(450,420,50);
  	ball5= new Ball(500,420,50);

    ground= new Roof(400,250,300,50);


   sling1= new Rope(ball1.body,ground.body,-50*2,0)
   sling2= new Rope(ball2.body,ground.body,-25*2,0)
   sling3= new Rope(ball3.body,ground.body,-0*2,0)
   sling4= new Rope(ball4.body,ground.body,25*2,0)
   sling5= new Rope(ball5.body,ground.body,50*2,0)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(100);
  
  drawSprites();
 


  ball1.display()
  ball2.display()
  ball3.display()
  ball4.display()
  ball5.display()

  ground.display()
  
  sling1.display()
  sling2.display()
  sling3.display()
  sling4.display()
  sling5.display()
 
}


function keyPressed() { 
	if (keyCode === UP_ARROW) 
	{ Matter.Body.applyForce(ball1.body,ball1.body.position,{x:-100,y:-100}); } 
} 



