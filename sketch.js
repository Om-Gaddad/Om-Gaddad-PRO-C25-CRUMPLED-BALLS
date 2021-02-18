
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	

	
	groundObject=new ground(width/2,670,4000,20);
	paperObject = new Paper(100,200,25);
	dustbinObj=new dustbin(1200,650);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 

  groundObject.display();
  paperObject.display();
  dustbinObj.display();	

  keyPressed();

}


function keyPressed() {
	if(keyCode === UP_ARROW){
	  Matter.Body.applyForce(paperObject.body, paperObject.body.position,{x:6.2,y:-6.2});
	}
  }
  
  