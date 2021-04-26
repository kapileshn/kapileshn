
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper,ground,left,right,bottom;

function preload()
{
	
}

function setup() {
	createCanvas(800, 670);


	engine = Engine.create();
	world = engine.world;
	
	//Create the Bodies Here.

paper=new Paper(200,200,12);
ground=new Ground(600,height,1200,40);

left = new Dustbin(550,600,20,80);
right = new Dustbin(670,600,20,80);
bottom = new Dustbin(610,640,100,20);

Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);

  paper.display();
  ground.display();

  left.display();
  right.display();
  bottom.display();
  
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(paper.body,paper.body.position, {x:15,y: -25})
  }
}
